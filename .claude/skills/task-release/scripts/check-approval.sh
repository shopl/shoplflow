#!/usr/bin/env bash
# 크로매틱 승인 → 배포 판단을 design-approved-release.yml과 같은 규칙으로 로컬에서 확인한다.
#
# workflow와 같은 순서로 확인한다:
#   0) UI Review 상태 — Chromatic이 GitHub에 status / check 중 무엇으로 보냈는지
#   1) 승인된 커밋의 열린 PR 찾기 (feature/<티켓키> → main, 최신 커밋인지)
#   2) 배포 전 확인 (changeset 존재, CI 통과)
#   3) 배포 — 기본은 실행하지 않고 명령만 출력 (--execute 를 줘야 실제 실행)
#
# 사용:
#   .claude/skills/task-release/scripts/check-approval.sh <PR번호 | 커밋SHA> [--execute]
#
# 필요: gh auth login (Claude Code 샌드박스 밖에서 실행)
# workflow(.github/workflows/design-approved-release.yml)의 규칙을 바꾸면 이 스크립트도 같이 바꾼다.
set -uo pipefail

REPO="${REPO:-shopl/shoplflow}"
TARGET="${1:-}"
EXECUTE="${2:-}"
WF_JOB_NAME="디자인 승인 → 배포 실행"

ok()   { printf '  \033[32m✔\033[0m %s\n' "$*"; }
warn() { printf '  \033[33m!\033[0m %s\n' "$*"; }
fail() { printf '  \033[31m✘\033[0m %s\n' "$*"; }
step() { printf '\n\033[1m%s\033[0m\n' "$*"; }

if [ -z "$TARGET" ]; then
  echo "사용: $0 <PR번호 | 커밋SHA> [--execute]"
  exit 2
fi

# PR 번호를 주면 그 PR의 최신 커밋으로 테스트한다
if [[ "$TARGET" =~ ^[0-9]+$ ]]; then
  SHA=$(gh pr view "$TARGET" -R "$REPO" --json headRefOid -q .headRefOid) || { echo "PR #$TARGET 을 찾지 못했어요."; exit 1; }
  echo "PR #$TARGET 최신 커밋: $SHA"
else
  SHA="$TARGET"
fi

# ── 0) UI Review 상태 ───────────────────────────────────────────
step "0) UI Review 상태 (Chromatic → GitHub)"
STATUS=$(gh api "repos/$REPO/commits/$SHA/status" \
  --jq '[.statuses[] | select(.context == "UI Review")][0] | if . then "\(.state) \(.target_url)" else "" end')
CHECK=$(gh api "repos/$REPO/commits/$SHA/check-runs" \
  --jq '[.check_runs[] | select(.name == "UI Review")][0] | if . then "\(.status)/\(.conclusion) \(.html_url)" else "" end')
OTHER=$(gh api "repos/$REPO/commits/$SHA/status" --jq '[.statuses[].context] | unique | join(", ")')
OTHER_CHECKS=$(gh api "repos/$REPO/commits/$SHA/check-runs" --jq '[.check_runs[].name] | unique | join(", ")')

APPROVED=""
if [ -n "$STATUS" ]; then
  ok "commit status로 옴: $STATUS"
  [[ "$STATUS" == success* ]] && APPROVED=status
fi
if [ -n "$CHECK" ]; then
  ok "check run으로 옴: $CHECK"
  [[ "$CHECK" == completed/success* ]] && APPROVED=check_run
fi
if [ -z "$STATUS" ] && [ -z "$CHECK" ]; then
  fail "'UI Review' 가 status·check 어디에도 없어요 → Chromatic–GitHub 연결 또는 PR 빌드 확인 필요"
  echo "     이 커밋의 status: ${OTHER:-없음}"
  echo "     이 커밋의 check : ${OTHER_CHECKS:-없음}"
fi
if [ -n "$APPROVED" ]; then
  ok "승인됨 → 실제 workflow라면 '$APPROVED' 이벤트로 실행돼요"
else
  warn "아직 승인(success) 상태가 아니에요. 실제 workflow는 여기서 실행되지 않아요. (아래는 로직 테스트로 계속 진행)"
fi

# ── 1) PR 찾기 ──────────────────────────────────────────────────
step "1) 승인된 커밋의 PR 찾기"
# ALLOW_CLOSED=1 이면 머지·닫힌 PR도 받는다 (로직 테스트 전용, --execute와 같이 못 씀)
if [ "${ALLOW_CLOSED:-}" = "1" ]; then
  [ "$EXECUTE" = "--execute" ] && { echo "ALLOW_CLOSED=1 과 --execute 는 같이 쓸 수 없어요."; exit 2; }
  STATE_FILTER='true'
  warn "ALLOW_CLOSED=1 — 닫힌 PR도 테스트 대상으로 받아요 (실제 workflow는 열린 PR만)"
else
  STATE_FILTER='.state == "open"'
fi
PR_JSON=$(gh api "repos/$REPO/commits/$SHA/pulls" \
  --jq "[.[] | select($STATE_FILTER and .base.ref == \"main\" and .head.repo.full_name == \"$REPO\")][0] // empty")
if [ -z "$PR_JSON" ]; then
  fail "커밋 $SHA 에 열린 main 대상 PR이 없어요 → workflow는 여기서 건너뜀"
  exit 0
fi
NUMBER=$(echo "$PR_JSON" | jq -r .number)
BRANCH=$(echo "$PR_JSON" | jq -r .head.ref)
HEAD=$(echo "$PR_JSON" | jq -r .head.sha)
KEY=$(echo "$BRANCH" | grep -oE '[A-Z][A-Z0-9]+-[0-9]+' | head -1 || true)
ok "PR #$NUMBER  $BRANCH  ($(echo "$PR_JSON" | jq -r .html_url))"
if [[ "$BRANCH" != feature/* || -z "$KEY" ]]; then
  fail "feature/<티켓키> 브랜치가 아니에요 → workflow는 여기서 건너뜀"
  exit 0
fi
ok "티켓 키: $KEY"
if [ "$HEAD" != "$SHA" ]; then
  fail "승인된 커밋이 PR 최신 커밋이 아니에요 (승인 ${SHA::7} / 최신 ${HEAD::7}) → workflow는 여기서 멈추고 PR에 ⛔ 댓글 (E4: 재업로드 → 재승인)"
  exit 1
fi
ok "PR 최신 커밋과 일치"

# ── 2) 배포 전 확인 ────────────────────────────────────────────
step "2) 배포 전 확인"
BLOCK=""
FILES=$(gh pr diff "$NUMBER" -R "$REPO" --name-only)
CHANGESETS=$(echo "$FILES" | grep -E '^\.changeset/.+\.md$' | grep -v '^\.changeset/README\.md$' || true)
if [ -n "$CHANGESETS" ]; then
  ok "changeset: $(echo "$CHANGESETS" | tr '\n' ' ')"
else
  fail "changeset(.changeset/*.md)이 PR에 없어요"
  BLOCK="changeset 없음"
fi

CHECKS=$(gh pr checks "$NUMBER" -R "$REPO" --json name,bucket \
  --jq "[.[] | select(.name != \"UI Review\" and .name != \"$WF_JOB_NAME\")]" 2>/dev/null || true)
[ -z "$CHECKS" ] && CHECKS='[]'
# workflow와 같은 규칙: 배포를 막는 건 BLOCKING_CHECKS만, 나머지 실패는 경고
BLOCKING_CHECKS='["build-test","check"]'
echo "$CHECKS" | jq -r --argjson b "$BLOCKING_CHECKS" \
  '.[] | "     \(.bucket)\t\(.name)\(if (.name as $n | $b | index($n)) then "  (필수)" else "" end)"'
PENDING=$(echo "$CHECKS" | jq -r --argjson b "$BLOCKING_CHECKS" \
  '[.[] | select(.bucket == "pending" and (.name as $n | $b | index($n))) | .name] | join(", ")')
BAD=$(echo "$CHECKS" | jq -r --argjson b "$BLOCKING_CHECKS" \
  '[.[] | select(.bucket != "pass" and .bucket != "skipping" and .bucket != "pending" and (.name as $n | $b | index($n))) | .name] | join(", ")')
MISSING=$(echo "$CHECKS" | jq -r --argjson b "$BLOCKING_CHECKS" \
  '[$b[] as $n | select([.[].name] | index($n) | not) | $n] | join(", ")')
OTHER_BAD=$(echo "$CHECKS" | jq -r --argjson b "$BLOCKING_CHECKS" \
  '[.[] | select((.bucket == "fail" or .bucket == "cancel") and (.name as $n | $b | index($n) | not)) | .name] | join(", ")')
[ -n "$OTHER_BAD" ] && warn "배포를 막지 않는 체크 실패: $OTHER_BAD"
if [ -n "$BAD" ]; then
  fail "필수 CI 실패: $BAD"
  BLOCK="${BLOCK:+$BLOCK, }필수 CI 실패"
elif [ -n "$PENDING" ]; then
  warn "필수 CI 진행 중: $PENDING (실제 workflow는 최대 30분 기다린 뒤 판단. 그래도 안 끝나면 E3': CI 끝난 뒤 직접 배포)"
  BLOCK="${BLOCK:+$BLOCK, }필수 CI 진행 중"
elif [ -n "$MISSING" ]; then
  fail "필수 CI 체크가 PR에 없어요: $MISSING"
  BLOCK="${BLOCK:+$BLOCK, }필수 CI 없음"
else
  ok "필수 CI 통과 (build-test, check)"
fi

# ── 3) 배포 ─────────────────────────────────────────────────────
step "3) 배포"
CMD=(gh workflow run changesets-workflow.yml -R "$REPO" --ref main -f "branch=$BRANCH" -f "sha=$SHA")
if [ -n "$BLOCK" ]; then
  fail "배포 안 함 — $BLOCK (실제 workflow도 여기서 멈추고 실패로 끝나요)"
  exit 1
fi
if [ -z "$APPROVED" ]; then
  warn "로직은 통과했지만 UI Review 승인 전이라 실제로는 실행되지 않아요."
fi
echo "  실행할 명령: ${CMD[*]}"
if [ "$EXECUTE" != "--execute" ]; then
  ok "드라이런 — 실제로는 실행하지 않았어요. (실행하려면 --execute)"
  exit 0
fi

echo
echo "  ⚠ $BRANCH 를 main에 머지하고 npm에 배포해요. 되돌리기 어려워요."
read -r -p "  진행하려면 'deploy' 입력: " ANSWER
if [ "$ANSWER" != "deploy" ]; then
  echo "  취소했어요."
  exit 0
fi
"${CMD[@]}" && ok "changesets-workflow.yml 실행 요청 완료 — gh run list --workflow=changesets-workflow.yml 로 확인"
