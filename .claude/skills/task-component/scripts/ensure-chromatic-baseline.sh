#!/usr/bin/env bash
# 크로매틱 비교 기준(baseline) 빌드가 "내 브랜치가 갈라져 나온 main 커밋"에 있는지 확인하고, 없으면 올린다.
#
# 왜: 크로매틱 UI Review는 PR 빌드를 기준 빌드와 비교해서 바뀐 스토리만 보여 준다.
#   - 기준이 없으면 모든 스토리가 "새것"으로 나오고 리뷰가 "Complete setup to review"에서 멈춘다 (Approve 불가 → 자동 배포 불가).
#   - 기준이 더 예전 main이면 그 사이 다른 PR의 변경까지 섞인다.
#   그래서 main이 바뀔 때마다가 아니라, PR을 처음 올리기 전에 "갈라진 시점"에만 필요하면 올린다.
#
# 판단: 크로매틱은 빌드를 올린 커밋에 GitHub commit status "Storybook Publish"를 남긴다. 이게 있으면 기준이 있다.
#
# 사용 (작업 브랜치 / worktree 안에서):
#   .claude/skills/task-component/scripts/ensure-chromatic-baseline.sh            # 확인 후 없으면 올림
#   .claude/skills/task-component/scripts/ensure-chromatic-baseline.sh --check    # 확인만
#   .claude/skills/task-component/scripts/ensure-chromatic-baseline.sh --check <SHA>  # 특정 main 커밋 확인
#
# 필요: gh auth login, pnpm. Claude Code 샌드박스 밖에서 실행. 올릴 때 3~5분 걸린다.
set -uo pipefail

REPO="${REPO:-shopl/shoplflow}"
MODE="${1:-}"
BASE="${2:-}"

ok()   { printf '  \033[32m✔\033[0m %s\n' "$*"; }
warn() { printf '  \033[33m!\033[0m %s\n' "$*"; }
fail() { printf '  \033[31m✘\033[0m %s\n' "$*"; }

ROOT=$(git rev-parse --show-toplevel) || { echo "git 저장소 안에서 실행하세요."; exit 2; }

if [ -z "$BASE" ]; then
  git fetch -q origin main || { fail "origin main을 가져오지 못했어요."; exit 1; }
  BASE=$(git merge-base HEAD origin/main) || { fail "갈라진 시점을 찾지 못했어요."; exit 1; }
fi
INPUT="$BASE"
BASE=$(git rev-parse --verify "$INPUT^{commit}" 2>/dev/null) || { fail "커밋을 찾지 못했어요: $INPUT"; exit 2; }
SHORT=${BASE:0:7}
echo "갈라진 main 커밋: $SHORT  $(git log -1 --format=%s "$BASE")"

# 조회 실패(네트워크·인증·404)는 "기준 없음"과 구분한다
if ! STATUS_JSON=$(gh api "repos/$REPO/commits/$BASE/status" 2>/dev/null); then
  fail "GitHub에서 커밋 상태를 조회하지 못했어요. (gh 로그인·네트워크·push 여부 확인)"
  exit 1
fi
PUBLISHED=$(echo "$STATUS_JSON" | jq -r \
  '[.statuses[] | select(.context == "Storybook Publish" and .state == "success")][0] | if . then "\(.description) \(.target_url)" else "" end')

if [ -n "$PUBLISHED" ]; then
  ok "기준 빌드 있음: $PUBLISHED"
  exit 0
fi

warn "기준 빌드 없음 — 이 상태로 PR을 올리면 모든 스토리가 변경으로 보이고 Approve가 안 돼요."
if [ "$MODE" = "--check" ]; then
  echo "  올리려면 --check 없이 다시 실행하세요."
  exit 3
fi

WT="$ROOT/.claude/worktrees/chromatic-baseline-$SHORT"
cleanup() { git -C "$ROOT" worktree remove --force "$WT" >/dev/null 2>&1; git -C "$ROOT" worktree prune; }
trap cleanup EXIT

echo "  기준 빌드를 올려요 (main $SHORT, 3~5분)…"
rm -rf "$WT"
HUSKY=0 git -C "$ROOT" worktree add --detach "$WT" "$BASE" >/dev/null 2>&1 || { fail "임시 worktree를 만들지 못했어요."; exit 1; }
(
  cd "$WT" &&
  pnpm install --frozen-lockfile --prefer-offline >/dev/null 2>&1 &&
  pnpm build:assets >/dev/null 2>&1 &&
  # 기준 빌드는 main 브랜치로 기록하고 그대로 승인한다. PR 브랜치에는 절대 --auto-accept-changes를 쓰지 않는다.
  pnpm chromatic:base --branch-name main --auto-accept-changes 2>&1 | sed 's/\x1b\[[0-9;]*m//g' | grep -E "Build [0-9]+ (passed|auto-accepted|completed)|View your Storybook|Tested"
)
RESULT=$?

if [ $RESULT -ne 0 ]; then
  fail "기준 빌드 업로드에 실패했어요. (설치·빌드·크로매틱 단계 확인)"
  exit 1
fi
ok "기준 빌드를 올렸어요. 이제 PR 브랜치를 올리면 바뀐 스토리만 보여요."
