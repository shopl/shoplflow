---
name: task-workflow
description: shoplflow Jira 티켓(SHF) 단위 작업 허브. 티켓 키를 받아 `tasks/<KEY>/meta.yaml`로 진행 단계를 확인하고, 컴포넌트 추가·수정은 task-component, 디자인 승인 후 배포·티켓 완료는 task-release로 넘긴다. Use when 사용자가 SHF 티켓 작업, task workflow, 다음 단계, 진행 상황 확인, 배포까지 처리, 또는 /task-workflow를 요청할 때.
---

# Task Workflow (shoplflow 허브)

shoplflow 컴포넌트 작업을 **Jira 티켓 하나 = 브랜치 하나 = PR 하나** 단위로 처리한다.
허브는 단계 확인과 라우팅만 하고, 실제 작업은 owner skill이 한다.

```
intake → spec → build → verify → pr → approve → release → done
└──────────── task-component ────────────┘   └── task-release ──┘
```

| 단계 | 누가 | Jira 상태 |
|------|------|-----------|
| intake ~ pr | `task-component` (로컬) | 진행 중 → (PR 후) 에픽·[DEV] 검토 중, [QA] 진행 중 |
| approve | 디자이너가 Chromatic에서 Approve | — |
| release | **자동** — GitHub Actions `design-approved-release.yml` → `changesets-workflow.yml` | — |
| done | `task-release` (로컬) — 결과 확인 + Jira 정리 | 완료 (실패 시 검토 중 유지) |

자동으로 도는 건 "Chromatic 승인 → 배포" 하나뿐이다. 크로매틱 업로드와 Jira는 모두 로컬 Claude가 한다 (GitHub Secrets 추가 없음).

## 준비물 (사용자별 1회)

- **Atlassian(Jira) MCP 로그인** — 티켓 조회·상태 변경·댓글
- **`gh auth login`** — PR 생성, 배포 workflow 실행
- 외부 서버, API 토큰, Jira Automation 설정은 **필요 없다**.

MCP가 연결되어 있지 않으면 진행하지 말고 연결 방법만 안내하고 멈춘다.

## Hard rules

1. **티켓 키 필수** (`[A-Z][A-Z0-9]+-\d+`, 보통 `SHF-123`). URL이 오면 키를 추출한다. 없으면 요청한다. 하위 티켓 키면 상위 에픽 키로 바꿔서 진행한다 (`tasks/<에픽 키>/`, 브랜치 `feature/<에픽 키>`).
2. 시작할 때 항상 `tasks/<KEY>/meta.yaml`을 먼저 읽는다. 없으면 [templates/meta.yaml](templates/meta.yaml)로 만든다.
3. 단계를 건너뛰지 않는다. 앞 단계 산출물이 없으면 그 단계부터 진행한다.
4. `tasks/`는 **로컬 기록**(gitignore)이다. 다른 사람이 이어받으면 meta.yaml이 없을 수 있으므로, owner skill은 티켓·브랜치·PR에서 상태를 다시 읽어 복원한다.
5. 되돌리기 어려운 작업(브랜치 push, PR 생성, 배포 실행, Jira 완료 처리)은 실행 직전에 사용자에게 확인한다.
6. 비밀번호·토큰은 meta.yaml, 커밋, Jira 댓글 어디에도 남기지 않는다.

## Workflow

```
- [ ] 1. 티켓 키 확보
- [ ] 2. tasks/<KEY>/meta.yaml 읽기 (없으면 생성)
- [ ] 3. 현재 단계 판단 (아래 표)
- [ ] 4. owner skill 실행 또는 다음 할 일 안내
- [ ] 5. 단계가 끝나면 meta.yaml 갱신 (stage, updated_at, decisions)
```

### 3. 현재 단계 판단

meta.yaml이 없거나 오래됐으면 실제 상태로 판단한다.

| 확인 결과 | 단계 | 다음 |
|-----------|------|------|
| 브랜치 없음 | intake | `task-component` |
| 브랜치 있음, PR 없음 | build / verify | `task-component` (이어서) |
| PR open, CI 진행 중·실패 | pr | `task-component`의 PR 단계에서 CI 확인·수정 |
| PR open, CI 통과, `UI Review` 대기 | approve | 디자이너 승인 대기 안내 (Chromatic에서 Approve하면 자동 배포) |
| PR open, `UI Review` 통과 | release | 자동 배포 진행 중. `task-release`로 결과 확인 |
| PR merged, Jira 미완료 | release | `task-release` (결과 확인 + 티켓 정리) |
| PR merged, Jira 완료 | done | 종료 |

확인 명령:

```bash
git ls-remote --heads origin "*<KEY>*"
gh pr list --state all --search "<KEY>" --json number,state,headRefName,url
```

### 4. 라우팅

| 사용자 요청 | 실행 |
|-------------|------|
| "SHF-123 작업해줘", "컴포넌트 수정" | `task-component` |
| "SHF-123 배포해줘", "승인됐어" | `task-release` |
| "SHF-123 어디까지 했어?" | 3번 표로 판단 후 요약만 |
| "디자이너가 수정 요청했어", "배포가 안 돼" | 아래 예외 표로 판단 → 해당 skill |

## 예외 상황 (E1~E8)

정상 흐름: `티켓 읽기 → 코드·검사 → PR·크로매틱·QA 요청 → 디자이너 리뷰 → 승인 → 배포 전 확인 → 승인 SHA 확인 → 머지·npm 배포 → 결과 확인·Jira 완료`

**공통 규칙: 코드가 바뀌어 새 커밋이 생기면 이전 승인은 무효다.** 다시 크로매틱에 올리고 다시 승인받는다.

| # | 상황 | 어떻게 알게 되나 | 돌아갈 단계 | 할 일 | skill |
|---|------|-----------------|-------------|-------|-------|
| E1 | 디자이너 수정 요청 | Jira·크로매틱 댓글 | **코드·검사** | 수정 → push → 크로매틱 재업로드 → QA 댓글 갱신 → 재승인 | task-component |
| E2 | UI Review 체크 없음 | PR에 `UI Review` 없음, 승인 버튼 없음 | **PR·크로매틱** | 기준 빌드 확인 → 크로매틱 업로드. 그래도 없으면 연결 문제 → 직접 배포 | task-component |
| E3 | 배포 전 확인 실패 (changeset 없음, 필수 CI 실패) | PR에 ⛔ 댓글 (승인 감지 workflow) | **코드·검사** | 고쳐서 push → 재업로드 → 재승인 | task-component |
| E3' | 필수 CI가 30분 안에 안 끝남 / CI가 안 돎 | PR에 ⛔ 댓글 | **머지·npm 배포** | 코드 그대로. CI 끝난 뒤 `check-approval.sh <PR> --execute` (재승인 불필요) | task-release |
| E4 | 승인 후 커밋 추가 | PR에 ⛔ 댓글, 또는 배포 workflow "승인된 커밋인지 확인" 실패 | **PR·크로매틱** | 크로매틱 재업로드 → 재승인 | task-component |
| E5 | 배포 중 push | 배포 workflow push 충돌 / `--match-head-commit` 머지 거부, Slack·PR 실패 알림 | 배포 끝난 뒤 판단 | 머지 안 됐으면 E4처럼, 머지됐으면 E7처럼 | task-release |
| E6 | 배포 실패 | Slack ❌ + PR 실패 댓글 | 머지 전: **코드·검사** / 머지 후: **머지·npm 배포** | 머지 전이면 고쳐서 재승인. 머지 후면 npm 버전 확인 후 workflow 재실행. Jira는 검토 중 유지 | task-release |
| E7 | 배포 후 수정 필요 | 사용자 요청 | **처음부터 (새 PR)** | `feature/<KEY>-fix` 새 브랜치 → 새 PR. 컴포넌트 버전은 티켓 제목 버전, changeset 종류는 사용자에게 확인 | task-component |
| E8 | 승인 후 화면과 무관한 작은 수정 | 사용자 요청 | **머지·npm 배포** | 수정 push 후, 디자이너가 이전 커밋을 승인한 걸 사용자에게 확인받고 `check-approval.sh <PR> --execute` | task-release |

- **승인 후에는 배포가 끝날 때까지 그 브랜치에 push하지 않는다.** (E4·E5 예방. 배포 workflow가 승인 커밋을 다시 확인하지만, 섞이면 배포가 실패로 끝난다)
- 직접 배포(`--execute`)는 항상 사용자 확인 후, 사용자가 직접 실행하게 안내한다.

## Non-goals

- 컴포넌트 구현 세부 → `task-component`
- 배포 실행·Jira 완료 처리 → `task-release`
- 아이콘·토큰 변경은 기존 자동화(`icon-automation.yml`, `token-update-workflow.yml`)를 쓴다. 이 워크플로우 대상이 아니다.
