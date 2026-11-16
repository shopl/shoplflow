---
name: task-component
description: SHF 티켓(예: "[shoplflow] Tag v1.1")을 받아 컴포넌트를 추가·수정하고 PR까지 올린다. 티켓 제목에서 컴포넌트와 버전을 읽고, 코드·스토리·컴포넌트 changelog 버전·MCP 메타데이터·changeset을 함께 갱신한 뒤 Jira를 진행 중 → 검토 중으로 옮긴다. Use when shoplflow 컴포넌트 추가/수정 티켓 작업, "SHF-123 작업해줘", 또는 task-workflow가 intake~pr 단계로 넘겼을 때.
---

# Task Component (intake → PR)

```
① intake → ② spec → ③ build → ④ verify → ⑤ pr
```

각 단계가 끝나면 `tasks/<KEY>/meta.yaml`의 `stage`, `updated_at`을 갱신한다 (허브: `task-workflow`).

---

## ① intake — 티켓 읽기

1. Atlassian MCP로 티켓을 조회한다 (이슈 조회 도구, 예: `getJiraIssue`).
   - 제목, 설명, 상태, 담당자, **`디자인` 필드(Figma 링크)**, 댓글
   - **하위 티켓 키(예: `[DEV] Callout v2.2`)를 받았으면 `parent`의 에픽으로 올라가서** 에픽 키를 기준(`<KEY>`)으로 진행한다. 받은 키는 meta `decisions`에 남긴다.
2. 하위 티켓을 조회한다 (JQL `parent = <KEY>`). 보통 `[Design]`, `[DEV]`, `[QA]` 세 개다.
3. **제목에서 컴포넌트와 버전을 추출한다.**
   - 형식: `[shoplflow] <컴포넌트> v<버전>` (머리말이 `[ui kit]` 등으로 다를 수 있음)
   - 정규식 예: `^\[[^\]]+\]\s*(.+?)\s+v(\d+(?:\.\d+)*)\s*$`
   - 형식이 맞지 않으면(버그 티켓 등) **컴포넌트와 목표 버전을 사용자에게 묻는다.** 추측하지 않는다.
4. **컴포넌트 폴더 찾기** — `packages/base/src/components/**/<Name>/<Name>.stories.tsx`
   - 대소문자·공백·하이픈을 무시하고 비교한다 (`helperText` → `HelperText`, `Select Button` → `SelectButton`).
   - 후보가 없거나 여러 개면 목록을 보여 주고 **사용자에게 고르게 한다**.
     (예: `ComboBox` → `Comboboxs/Combobox` / `Comboboxs/NumberCombobox`)
5. **현재 버전 읽기** — stories 파일의 changelog 배열 첫 항목 `version`.
   - 변수명은 대부분 `COMPONENT_CHANGELOG`, **Button만 `BUTTON_CHANGELOG`**. 이름 대신 `ComponentChangelogEntry[]` 타입으로 찾는다.
6. **버전 비교** (major.minor 숫자 비교)

   | 경우 | 처리 |
   |------|------|
   | 목표 > 현재 | 정상. 진행 |
   | 목표 == 현재 | 이미 반영됐거나 같은 티켓의 추가 수정(E7)이다. 새 항목을 만들지 않고 해당 버전 항목의 `changes`에 추가할지 사용자에게 확인 |
   | 목표 < 현재 | **멈추고** 사용자에게 확인 (티켓 제목 오타 가능성) |

   현재 changelog가 `1.0` 한 항목뿐이고 날짜가 2026-04-22면 문서용으로 일괄 넣은 값이다. 실제 버전과 다를 수 있으니 목표 버전과 차이가 크면 그대로 기록할지 사용자에게 확인한다.

7. 담당자(owner)를 사용자에게 확인한다. 기본값은 현재 사용자.
8. **작업 위치 확인** — 현재 폴더에서 브랜치를 만들지, worktree로 분리할지 묻는다.
9. 사용자 확인 후 Jira: 상위 티켓 + `[DEV]` 하위 티켓을 **진행 중**으로 옮긴다. `transitionJiraIssue`에 `transitionName: "진행 중"`을 넘기면 된다 (SHF는 전환 이름 = 상태 이름). 이미 그 상태면 건너뛴다.
10. meta.yaml에 `component`, `figma`, `children`, `owner` 기록 → `stage: spec`

## ② spec — 바꿀 내용 확정

1. 티켓 설명, `[Design]` 하위 티켓, Figma 링크에서 스펙을 정리한다. Figma MCP가 있으면 해당 노드를 읽는다.
2. 컴포넌트의 현재 구현을 읽는다: `*.types.ts`, `*.styled.ts(x)`, `*.tsx`, `*.stories.tsx`, 그리고 **`*.figma.tsx`(Code Connect)가 있으면 그것도** 읽는다. Figma 속성(property) 이름과 코드 prop이 어떻게 연결돼 있는지 확인한다.
3. 비슷한 컴포넌트의 기존 패턴을 따른다 (`sizeVar`/`styleVar` 상수 객체, `getStyleBySizeVar` 같은 helper, 토큰 사용).
4. 아래 형식으로 **변경 계획을 사용자에게 보여 주고 승인받는다.**

   ```
   컴포넌트: Tag (1.0 → 1.1)
   변경:
   - TagSizeVariants에 XXS 추가
   - XXS: height 16px, padding 0 4px, typography caption_400
   영향: 기존 XS/S/M 변경 없음
   Code Connect: Tag.figma.tsx의 size enum에 XXS 추가 (파일 없으면 "없음")
   changelog: "XXS 사이즈 추가"
   changeset: @shoplflow/base ? (major / minor / patch — 사용자에게 확인)
   ```

   Figma에 없는 값(높이·여백 등)은 지어내지 않고 질문한다.
5. 승인되면 `stage: build`

## ③ build — 구현

1. 브랜치 생성 (meta에 이미 있으면 그 브랜치로 이동)

   ```bash
   git fetch origin main
   git switch -c feature/<KEY> origin/main
   ```

   husky `post-checkout` 훅이 fetch/pull/`pnpm refresh:node_modules`를 실행하므로 시간이 걸릴 수 있다.
   (파일 하나만 되돌리는 `git checkout -- <file>`도 이 훅을 탄다. 되돌릴 땐 `git restore <file>`을 쓴다.)

   **worktree로 분리할 때**

   ```bash
   git fetch origin main
   git branch feature/<KEY> origin/main
   HUSKY=0 git worktree add .claude/worktrees/<KEY> feature/<KEY>
   cd .claude/worktrees/<KEY> && pnpm install --frozen-lockfile --prefer-offline
   ```

   - 샌드박스에서는 `.mcp.json` 쓰기가 막혀 worktree 생성이 실패한다 → 샌드박스 밖에서 실행.
   - 새 worktree에는 아이콘 생성 파일이 없어 type-check가 실패한다 → ④ 전에 `pnpm build:assets`.
2. 코드 수정 — 프로젝트 규칙(CLAUDE.md의 Component Patterns)을 따른다.
   - `*.types.ts` 변형 상수, `*.styled.ts(x)` 스타일, 필요 시 `*.tsx`
   - `*.stories.tsx`: 새 변형을 보여 주는 스토리·argTypes 추가 ([STORIES_CONVENTION.md](../../../packages/base/.storybook/STORIES_CONVENTION.md))
   - **`*.figma.tsx` (Code Connect)** — 파일이 있고 사용법이 바뀌면(새 prop·변형·하위 컴포넌트) 같이 고친다. 디자이너·개발자가 Figma Dev Mode에서 보는 코드 예시가 이 파일이다.
     - Figma 속성 이름은 지어내지 않는다. Figma MCP `get_metadata` / `get_design_context`로 컴포넌트 속성(variant·boolean·text) 이름을 확인해서 `figma.enum` / `figma.boolean` / `figma.string`에 쓴다.
     - 새 하위 컴포넌트(예: `Callout.TextButton`)는 `example`에 실제 쓰는 모양대로 넣는다.
     - 파일이 없는 컴포넌트면 새로 만들지 않는다 (필요하면 따로 제안).
3. **컴포넌트 changelog** — stories 파일의 changelog 배열 **맨 앞**에 추가

   ```ts
   { version: '1.1', date: 'YYYY-MM-DD', changes: ['XXS 사이즈 추가'] },
   ```

   - `version`은 티켓 제목의 버전, `date`는 오늘
   - `changes`는 ②에서 승인받은 문구
4. **changeset** — `.changeset/<kebab-case>.md`

   ```md
   ---
   '@shoplflow/base': minor
   ---

   Tag XXS 사이즈 추가 (SHF-123)
   ```

   - **changeset 종류(major / minor / patch)는 항상 사용자에게 묻는다.** 추측해서 정하지 않는다. 물을 때 참고로 추천은 붙인다 (예: 새 prop·변형 → minor, 스타일·버그 수정 → patch, 기존 API 깨짐 → major). ② spec에서 계획을 승인받을 때 같이 물어도 된다.
   - **컴포넌트 버전(changelog)과 패키지 버전(changeset)은 별개**다. 컴포넌트 버전은 **항상 Jira 티켓 제목의 버전**을 따르고, changeset은 사용자가 정한 종류를 쓴다.
5. `stage: verify`

## ④ verify — 검사

모두 통과해야 다음으로 간다. 실패하면 ③으로 돌아가 고친다.

```bash
pnpm exec eslint $(git diff --name-only origin/main -- '*.ts' '*.tsx')   # 바뀐 파일만 (error 0이면 통과)
pnpm --filter @shoplflow/base type-check
pnpm --filter @shoplflow/base exec vitest run   # `test -- --run`은 watch로 빠지므로 쓰지 않는다
pnpm --filter @shoplflow/mcp generate:metadata   # MCP 메타데이터 재생성
pnpm --filter @shoplflow/base figma:parse        # *.figma.tsx를 바꿨을 때만. 토큰 없이 로컬에서 문법·매핑 검사
```

- eslint는 폴더 전체로 돌리지 않는다. 기존 파일(예: `*.figma.tsx`)의 오래된 error가 섞이고, `--fix`가 관계없는 파일까지 고친다.
- `pnpm build:assets` 후 `packages/*-assets/src/**/generated/index.ts`가 바뀌면 `git restore`로 되돌린다 (정렬만 바뀐 생성물).
- **테스트는 main 기준과 비교한다.** main에서도 실패하는 테스트(예: 2026-11 기준 `scripts/__tests__/seperate_tokens.test.ts`)는 이번 작업의 실패로 보지 않는다. 새로 생긴 실패만 막는다. 기존 실패는 사용자에게 알리기만 한다.
- `generate:metadata`가 아이콘 배럴이 없다며 실패하면 `pnpm build:assets` 후 다시 실행한다.
- `packages/mcp/src/data/`가 바뀌면 **같이 커밋**한다. 안 하면 CI(`build-test.yml`)가 실패한다.
- **changelog 버전 확인**: stories 파일 changelog 첫 항목의 `version` == meta `target_version`
- **changeset 존재 확인**: `.changeset/`에 README 외 `.md`가 있는지
- **Code Connect 확인**: `*.figma.tsx`를 바꿨으면 `figma:parse`가 오류 없이 끝나야 한다. Figma 반영(`figma:publish`)은 Figma 토큰이 필요해서 배포 후 사람이 한다 → meta `decisions`에 "figma publish 필요"를 남기고 `task-release`가 안내한다.
- 시각 확인이 필요하면 `pnpm --filter @shoplflow/base dev:stories` (포트 6007)로 띄우고 사용자에게 확인을 요청한다.

통과하면 `stage: pr`

## ⑤ pr — PR 생성 + 디자인 QA 요청

1. 커밋 — 메시지 형식은 기존 이력을 따른다.

   ```
   feat(base): Tag XXS 사이즈 추가 (SHF-123)
   ```

2. 사용자 확인 후 push + PR 생성

   ```bash
   git push -u origin feature/<KEY>
   gh pr create --base main --title "<커밋 제목>" --body-file <본문 파일>
   ```

   PR 본문에 넣을 것: 티켓 링크, Figma 링크, 변경 요약, 컴포넌트 버전(`1.0 → 1.1`), changeset 종류, 검사 결과.
3. **크로매틱 업로드** — PR을 만든 **뒤에** 실행한다 (열린 PR이 있어야 Chromatic UI Review가 생긴다).

   **먼저 비교 기준(baseline)을 확인한다.** 크로매틱은 "내 브랜치가 갈라져 나온 main 커밋"의 빌드와 비교해서 바뀐 스토리만 보여 준다. 그 커밋에 기준 빌드가 없으면 모든 스토리가 변경으로 나오고 Approve가 안 된다. main이 바뀔 때마다 올리지 않고, 여기서 필요할 때만 올린다.

   ```bash
   bash .claude/skills/task-component/scripts/ensure-chromatic-baseline.sh   # 있으면 바로 끝, 없으면 기준 빌드 업로드(3~5분)
   pnpm chromatic:base
   ```

   - 기준 확인은 GitHub commit status `Storybook Publish`로 한다 (크로매틱이 빌드한 커밋에 남긴다).
   - 확인만 하려면 `--check` (없으면 exit 3).
   - 스크립트는 임시 worktree에서 기준 빌드를 올리고 끝나면 지운다. 기준 빌드에만 `--auto-accept-changes`를 쓴다.

   - **변경이 있으면 업로드가 성공해도 exit 1로 끝난다** (`Found N visual changes`). `Build N completed`와 `View your Storybook at`이 나오면 성공이다.
   - 출력의 `View your Storybook at https://...` 주소를 meta `chromatic.storybook_url`에 기록한다.
   - 리뷰 주소는 `https://www.chromatic.com/review?appId=69afad58aa7c90fbf3c141ee&number=<PR번호>&type=linked` → meta `chromatic.review_url`.
   - PR에 `UI Review` commit status가 붙는지 확인한다 (`gh api repos/shopl/shoplflow/commits/<sha>/status`). 안 붙으면 크로매틱–GitHub 연결 문제이므로 사용자에게 알린다 (자동 배포가 동작하지 않는다).
   - 그래도 리뷰 화면이 **"Complete setup to review"**에서 멈추고 변경이 전체 스토리 수만큼 나오면, 이 브랜치의 이전 빌드(기준 없이 올린 것)가 기준으로 잡힌 것이다. `ensure-chromatic-baseline.sh` 후 `pnpm chromatic:base --force-rebuild`로 다시 올린다.
   - `--auto-accept-changes`는 **기준 빌드에만** 쓴다. PR 브랜치에 쓰면 디자이너 확인 없이 변경이 승인된다.
   - main을 브랜치에 머지(rebase)해서 갈라진 시점이 바뀌었으면 기준 확인부터 다시 한다.
   - 기준 빌드와 렌더링 차이(폰트 로딩 등)로 바뀌지 않은 컴포넌트가 변경으로 잡힐 수 있다. QA 요청 댓글에 "이번에 바뀐 컴포넌트: <이름>"을 적어 디자이너가 구분할 수 있게 한다.
4. **Jira (MCP)** — 사용자 확인 후
   - 상위 티켓 + `[DEV]` → **검토 중**
   - `[QA]` → **진행 중**
   - `[QA]`에 댓글 (없으면 상위 티켓):

     ```
     디자인 QA 요청
     이번에 바뀐 컴포넌트: <컴포넌트> (<현재> → <목표>)
     스토리북: <storybook_url>
     Chromatic 리뷰: <review_url>
     PR: <PR 링크>
     확인 후 Chromatic 리뷰 화면 오른쪽 위 `Review now` → `Approve review yourself`를 눌러 주세요. 승인되면 자동으로 배포돼요.
     승인 후에는 배포가 끝날 때까지 이 브랜치에 push하지 않아요.
     ```

   이미 QA 댓글이 있으면(재요청) 새로 달지 않고 그 댓글을 수정한다 (`addOrEditJiraIssueComment`에 기존 comment id).

5. **QA 요청 전에** `gh pr checks <번호>`로 필수 CI(`build-test`, `check`)가 통과했는지 확인한다. 실패하면 원인을 고쳐 다시 push하고, 크로매틱도 다시 올린 뒤 QA를 요청한다 (UI Review는 PR 최신 커밋 기준). 승인 뒤에 CI가 막히는 E3을 줄인다.
6. meta: `pr_url`, `stage: approve`
7. 사용자에게 안내하고 종료한다.

   > PR과 디자인 QA 요청을 올렸어요. 디자이너가 Chromatic에서 Approve하면 자동으로 배포돼요. 배포가 끝나면 `/task-release <KEY>`로 결과 확인과 Jira 완료 처리를 하면 돼요.

## 다시 돌아오는 경우 (예외 E1·E2·E3·E4·E7)

예외 정의와 판단 기준은 `task-workflow`의 "예외 상황" 표를 따른다. 이 skill이 맡는 것:

| 예외 | 시작 단계 | 순서 |
|------|----------|------|
| E1 디자이너 수정 요청 | ③ build | 수정 → ④ verify → push → 크로매틱 재업로드 → QA 댓글 갱신 (재승인 요청) |
| E2 UI Review 없음 | ⑤-3 크로매틱 | `ensure-chromatic-baseline.sh` → `pnpm chromatic:base` → PR에 `UI Review` 상태 확인. 그래도 없으면 사용자에게 알리고 `task-release` 직접 배포 경로 안내 |
| E3 changeset 없음 / 필수 CI 실패 | ③ build | 고침 → ④ verify → push → 크로매틱 재업로드 → QA 댓글 갱신 (재승인 요청) |
| E4 승인 후 커밋 추가 | ⑤-3 크로매틱 | 크로매틱 재업로드 → QA 댓글 갱신 (재승인 요청) |
| E7 배포 후 수정 | ① intake | 티켓 키로 새 브랜치 `feature/<KEY>-fix` (origin/main 기준) → 새 PR. **컴포넌트 버전은 그 티켓 제목의 버전**을 따른다: 새 티켓(예: `Callout v2.3`)이면 새 항목, 같은 티켓이면 같은 버전 항목에 `changes` 추가. **changeset 종류는 사용자에게 묻는다.** Jira가 이미 완료면 다시 열지 사용자에게 확인 |

- PR 댓글에 ⛔ "배포를 시작하지 않았어요"가 달려 있으면 거기 적힌 이유로 위 표에서 고른다.
- 재승인 요청 시 QA 댓글에 "무엇이 바뀌었는지"를 한 줄 적는다 (디자이너가 처음부터 다시 보지 않게).

## 주의

- 티켓에 없는 변경(리팩터링, 다른 컴포넌트 수정)은 하지 않는다. 필요해 보이면 따로 제안한다.
- 여러 컴포넌트를 함께 바꾸는 티켓이면 컴포넌트마다 changelog를 각각 올린다.
- `packages/shopl-assets/src/icons/generated/index.ts` 같은 생성 파일이 의도치 않게 바뀌면 커밋에서 뺀다.
- 메인 폴더에서 husky `post-checkout` 훅(`refresh:node_modules`)이 돌면 `.claude/worktrees/*/node_modules`까지 지워진다. worktree에서 명령이 `spawn ENOENT` / `node_modules missing`으로 실패하면 그 worktree에서 `pnpm install --frozen-lockfile --prefer-offline && pnpm build:assets`를 다시 한다.
- Claude Code 샌드박스에서는 `git commit`(pre-commit 훅이 pnpm 설정을 읽음), `git push`, `gh`(인증서 오류), `pnpm chromatic:base`가 실패한다. 실패하면 샌드박스 밖에서 다시 실행한다.
