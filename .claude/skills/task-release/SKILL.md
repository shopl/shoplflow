---
name: task-release
description: 디자이너 승인 후 SHF 티켓의 배포 결과를 확인하고 Jira 티켓을 정리한다. 배포는 디자이너가 Chromatic UI Review에서 Approve하면 GitHub Actions(design-approved-release.yml → changesets-workflow.yml)가 자동으로 한다. 이 skill은 그 결과(머지·npm 버전)를 확인하고 Jira MCP로 상위·하위 티켓을 완료(실패 시 검토 중 유지 + 댓글) 처리한다. 자동 배포가 안 됐을 때는 gh로 배포를 직접 실행할 수 있다. Use when "SHF-123 배포됐어?", "디자인 승인됐어", "배포하고 티켓 닫아줘", 또는 task-workflow가 approve~done 단계로 넘겼을 때.
---

# Task Release (approve → done)

```
디자이너: Chromatic에서 Approve
   ↓ 자동 (GitHub Actions — 토큰 설정 없음)
design-approved-release.yml → changesets-workflow.yml → 머지 → npm 배포
   ↓ 로컬 (이 skill)
① 상태 확인 → ② 결과 확인 → ③ Jira 정리
          └ 자동 배포가 안 됐으면 ④ 직접 배포
```

**CI 파일은 바꾸지 않는다.** Jira는 Atlassian MCP로만 다룬다 (GitHub에 Jira 토큰 없음).

---

## ① 상태 확인

티켓 키로 상태를 복원한다. meta.yaml이 없어도 동작해야 한다 (다른 사람이 만든 PR일 수 있음).
하위 티켓 키를 받았으면 상위 에픽 키로 진행한다.

PR이 열려 있으면 먼저 승인 확인 스크립트를 돌린다. workflow와 같은 규칙으로 UI Review 승인, PR, changeset, 필수 CI(`build-test`, `check`)를 확인하고 배포 명령만 출력한다 (드라이런).

```bash
chmod +x .claude/skills/task-release/scripts/check-approval.sh   # 처음 한 번
.claude/skills/task-release/scripts/check-approval.sh <PR번호>
```

나머지 상태는 아래로 본다.

```bash
gh pr list --state all --search "<KEY>" --json number,state,headRefName,headRefOid,url,mergedAt
gh pr checks <번호>
gh run list --workflow=design-approved-release.yml --limit 10 --json databaseId,status,conclusion,createdAt,headSha,url
gh run list --workflow=changesets-workflow.yml --event=workflow_dispatch --limit 5 --json databaseId,status,conclusion,createdAt,url
```

| 상태 | 판단 | 다음 |
|------|------|------|
| PR merged | 배포가 실행됐다 | ② |
| PR open, `UI Review` pending | 디자이너 승인 대기 | 안내하고 종료. 승인 위치: 리뷰 화면 오른쪽 위 `Review now` → `Approve review yourself` (로그인 필요) |
| PR open, `UI Review` success, release run 없음 | `design-approved-release.yml`이 main에 아직 없거나 동작 안 함 | ④ 직접 배포 (스크립트에 `--execute`) |
| PR open, `UI Review` success, release run 진행 중 | 배포 중 | `gh run watch <id> --exit-status`를 백그라운드로 기다린 뒤 ② |
| PR open, `UI Review` success, release run 실패 | 배포 전 확인에서 막힘. PR에 ⛔ 댓글이 있다 | 댓글의 이유로 판단: CI 30분 초과·CI 안 돎(E3') → CI 끝난 뒤 ④ 직접 배포 / changeset·CI 실패(E3)·승인 후 커밋(E4) → `task-component`로 넘김 |
| PR open, changesets-workflow 실패 (머지 전) | 승인 커밋 불일치(E4·E5) 또는 빌드 실패(E6) | 로그(`gh run view <id> --log-failed`)로 판단. E4·E5 → `task-component`(재업로드·재승인), E6 → 고친 뒤 재승인 |
| PR open, `UI Review` 체크 자체가 없음 | 크로매틱 업로드 안 됨 또는 연결 문제 (E2) | `task-component`의 크로매틱 단계로. 그래도 없으면 ④ 직접 배포를 제안 |

## ② 결과 확인

- `changesets-workflow` run의 두 job(`디자인 승인 — 버전 범프 → PR 머지`, `Release (디자인 승인 직후)`)이 모두 성공해야 한다.

  ```bash
  gh run view <run_id> --json jobs --jq '.jobs[] | {name, conclusion}'
  ```

- **npm 배포 확인** — main의 패키지 버전과 npm 최신 버전이 같은지 본다.

  ```bash
  git fetch origin main
  git show origin/main:packages/base/package.json | grep '"version"'
  npm view @shoplflow/base version
  ```

  changeset이 다른 패키지도 올렸다면 그 패키지도 확인한다.
- main push로 `Release` job이 한 번 더 돌 수 있다. 같은 버전이 이미 배포돼 있으면 그 job이 실패해도 배포는 된 것이다. 판단 기준은 npm 버전이다.

## ③ Jira 정리 (MCP)

### 성공

1. 하위 티켓을 조회한다 (JQL `parent = <KEY>`).
2. **완료되지 않은 티켓 목록을 보여 주고 확인받는다.** 기본값은 전부 완료다.
3. 하위 티켓 → 상위 티켓 순서로 `transitionJiraIssue`(`transitionName: "완료"`).
4. 상위 티켓에 댓글:

   ```
   배포 완료: @shoplflow/base@0.49.0
   컴포넌트 버전: Tag 1.1
   PR: <PR 링크>
   ```

5. **Code Connect 반영 안내** — 이번 PR에서 `*.figma.tsx`가 바뀌었으면 (`gh pr diff <번호> --name-only | grep '\.figma\.tsx$'`) 사용자에게 Figma 반영을 안내한다. Figma 토큰이 필요해서 Claude가 대신 실행하지 않는다.

   ```bash
   # main 최신으로 받은 뒤, Figma 개인 토큰(FIGMA_ACCESS_TOKEN)이 있는 사람이 실행
   pnpm --filter @shoplflow/base figma:publish
   ```

6. meta: `release.result: success`, `release.published`, `stage: done`

### 실패

1. 티켓 상태는 **검토 중 그대로** 둔다.
2. 상위 티켓에 실패 댓글: 실패한 job 이름, run 링크, 로그 핵심 한두 줄
3. 사용자에게 원인과 다음 행동을 알려 준다 (E6).
   - **머지 전 실패** (`디자인 승인 — 버전 범프 → PR 머지` job): 승인 커밋 불일치면 E4(재업로드·재승인), 빌드 실패면 `task-component`로 고친 뒤 재승인.
   - **머지 후 실패** (`Release (디자인 승인 직후)` job): npm 버전을 먼저 확인한다. 아직 안 올라갔으면 사용자 확인 후 `gh run rerun <run_id> --failed`.
4. meta: `release.result: failure`

## ④ 직접 배포 (자동 배포가 안 됐을 때만)

`UI Review` 체크가 없거나 자동 workflow가 동작하지 않을 때, **디자인 승인을 사용자에게 확인받은 뒤** 실행한다.

쓰는 경우 (예외 정의는 `task-workflow`):

| 예외 | 상황 | 주의 |
|------|------|------|
| E2 | 크로매틱 연결 문제로 `UI Review`가 안 붙음 | 디자이너가 스토리북에서 확인하고 OK했다는 걸 사용자에게 확인 |
| E3' | 필수 CI가 30분 넘게 걸렸거나 안 돌았음 | CI가 통과한 뒤 실행. 승인은 그대로 유효 |
| E8 | 승인 후 화면과 무관한 작은 수정을 push | 새 커밋은 크로매틱 승인이 없다. 무엇을 바꿨는지 보여 주고 "디자인 영향 없음"을 사용자에게 확인받은 뒤 실행 |
| — | `design-approved-release.yml`이 main에 아직 없음 | 승인 확인 후 실행 |

1. 확인: `check-approval.sh <PR번호>`가 "드라이런" 까지 통과, stories changelog 첫 버전 == 티켓 버전
2. 배포 내용을 보여 주고 확인받는다 (머지와 npm 배포는 되돌리기 어렵다).
3. 실행 — 사용자가 직접 실행하게 안내한다 (`deploy` 입력 확인이 있다):

   ```bash
   .claude/skills/task-release/scripts/check-approval.sh <PR번호> --execute
   ```

   직접 실행해야 하면 `gh workflow run changesets-workflow.yml --ref main -f branch=<브랜치> -f sha=<승인된 커밋>`.
   `sha`를 넘기면 배포 workflow가 브랜치 최신 커밋이 그 커밋일 때만 배포한다. 승인 후 push가 섞이면 멈춘다.

4. ②로 이어간다.

## 하지 않는 것

- CI workflow 수정, Secrets 추가 (workflow를 바꿔야 하면 사용자에게 제안만 한다)
- 사용자 확인 없이 직접 배포·Jira 완료 처리
- Slack 메시지 직접 전송 (workflow가 기존 Webhook으로 보낸다)
