---
name: deploy-with-design-review
description: Shoplflow 배포·디자인 검수 플로우. Figma 링크 → Figma MCP로 컴포넌트 구현 → Chromatic 실행 → Slack 전송 전 사용자 확인 → 확인 시에만 URL과 "디자인 검수 완료" 버튼 전송 → 디자이너가 버튼 클릭 시 자동으로 main 머지·npm 배포. 배포, 디자인 검수, Figma, changeset, Chromatic, Slack, preview를 언급할 때 적용.
---

# 배포 + 디자인 검수 워크플로우

## 플로우 (5단계)

| 순서 | 담당 | 내용 |
|------|------|------|
| 1 | 개발자 | **Figma 링크**를 준다 |
| 2 | 개발자/에이전트 | **feature 브랜치 생성·체크아웃**, Figma MCP로 컴포넌트 구현, changeset 추가, 커밋(한국어)·푸시 |
| 3 | 개발자/에이전트 | **Chromatic 실행** → URL 획득 → **사용자에게 Slack 전송 여부 확인** → 동의 시 **Slack에 Block Kit 메시지 전송** (Chromatic URL + "디자인 검수 완료" 버튼) |
| 4 | 디자이너 | Slack 메시지의 Chromatic URL로 스토리북 검수 후 **"디자인 검수 완료" 버튼 클릭** |
| 5 | 시스템 자동화 | Cloudflare Worker → GitHub `repository_dispatch` → GitHub Actions(`design-approved-deploy.yml`)가 feature 브랜치를 main에 머지·푸시 → `changesets-workflow.yml`이 npm 배포 처리 |

---

## 에이전트가 할 일 (2~3단계)

### 2단계: 브랜치 생성·구현·커밋

1. **브랜치**: main에 있으면 `git checkout -b feat/xxx`, 이미 feature 브랜치에 있으면 유지.
2. **Figma MCP**: `get_design_context` 등으로 디자인 참고, 프로젝트 패턴(base/templates)에 맞춰 구현.
3. **Changeset**: `.changeset/*.md`(README 제외)가 없으면 `pnpm changeset` 실행.
4. **커밋·푸시**: 메시지는 **한국어**, `git push -u origin <브랜치>`.

### 3단계: Chromatic 실행 + Slack 메시지 전송

#### Slack 전송 전 사용자 확인 (필수)

에이전트는 **Slack API를 호출하거나** `script/send-design-review-slack.mjs`를 실행하기 **전에** 반드시 사용자에게 아래를 묻는다.

1. **전송해도 될지** (예: 지금 이 Chromatic URL로 디자인 검수 요청을 Slack에 올릴까요?)
2. 필요 시 **브랜치명**·**채널**이 `.env.local`의 `SLACK_CHANNEL_ID`와 일치하는지 (다른 채널을 원하면 사용자가 직접 바꾸거나 명시)

- 사용자가 **보내지 말라**·**취소**·**나중에** 등으로 거절하면 **Slack 전송을 하지 않는다.** Chromatic URL만 공유하고 끝내도 된다.
- 사용자가 **보내 달라**고 확인하면 아래 curl 또는 스크립트로 전송한다.

#### Chromatic 실행

```bash
# CHROMATIC_PROJECT_TOKEN 환경변수가 설정된 경우
pnpm chromatic

# 직접 지정하는 경우
pnpm build:storybook && pnpm chromatic --project-token=<CHROMATIC_PROJECT_TOKEN>
```

출력에서 **Storybook URL**을 복사한다.  
(실제 스토리북이 열리는 주소: `https://<projectId>-<hash>.chromatic.com/`  
빌드 대시보드 주소 `https://www.chromatic.com/build?appId=...&number=...` 가 아니라, 터미널에 나오는 "View your Storybook at ..." 뒤의 URL을 쓴다.)

#### Slack Block Kit 메시지 전송

**위에서 사용자가 전송을 승인한 경우에만** 아래 curl 명령(또는 `pnpm exec dotenv -e .env.local -- node script/send-design-review-slack.mjs "<CHROMATIC_URL>"`)으로 Chromatic **스토리북 URL**과 "디자인 검수 완료" 버튼을 Slack에 보낸다.  
`BRANCH`에는 현재 브랜치명, `CHROMATIC_URL`에는 **스토리북이 열리는 URL** (`https://xxx-xxxxx.chromatic.com/`)을 넣는다.

```bash
BRANCH="feat/xxx"
CHROMATIC_URL="https://69afad58aa7c90fbf3c141ee-swbskrlizu.chromatic.com/"

curl -s -X POST "https://slack.com/api/chat.postMessage" \
  -H "Authorization: Bearer $SLACK_BOT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "channel": "'"$SLACK_CHANNEL_ID"'",
    "blocks": [
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": "*디자인 검수 요청*\n브랜치: `'"$BRANCH"'`\n\n<'"$CHROMATIC_URL"'|Chromatic 스토리북 열기>"
        }
      },
      {
        "type": "actions",
        "elements": [
          {
            "type": "button",
            "text": { "type": "plain_text", "text": "디자인 검수 완료" },
            "style": "primary",
            "action_id": "design_approved",
            "value": "'"$BRANCH"'"
          },
          {
            "type": "button",
            "text": { "type": "plain_text", "text": "배포" },
            "style": "danger",
            "action_id": "design_deploy",
            "value": "'"$BRANCH"'",
            "confirm": {
              "title": { "type": "plain_text", "text": "배포 확인" },
              "text": { "type": "mrkdwn", "text": "'"$BRANCH"' 브랜치를 main에 머지하고 npm 배포를 진행합니다." },
              "confirm": { "type": "plain_text", "text": "배포" },
              "deny": { "type": "plain_text", "text": "취소" }
            }
          }
        ]
      }
    ]
  }'
```

필요 환경변수 (로컬 `.env.local`에 설정):
- `SLACK_BOT_TOKEN` — Slack Bot Token (`xoxb-...`)
- `SLACK_CHANNEL_ID` — 메시지를 보낼 채널 ID

Slack까지 전송했으면 이후 에이전트 역할은 끝이다. 디자이너가 버튼을 클릭하면 배포까지 자동으로 진행된다. (전송을 생략한 경우 사용자가 URL을 직접 공유하면 된다.)

---

## 자동화 흐름 (버튼 클릭 이후)

1. **Slack → Cloudflare Worker** ([workers/slack-design-approved/](../../../workers/slack-design-approved/)): Slack 서명 검증 후 브랜치명 추출
2. **Worker → GitHub API**: `repository_dispatch` 이벤트 발송 (`event_type: design-approved`)
3. **GitHub Actions** ([.github/workflows/design-approved-deploy.yml](../../../.github/workflows/design-approved-deploy.yml)): feature 브랜치를 main에 머지·푸시
4. **changesets-workflow**: main 푸시 감지 → `version → npm publish` 자동 처리
5. **Slack 알림**: 머지 성공/실패 여부를 동일 채널에 자동 전송

---

## 최초 1회 설정 (인프라)

### Slack App 생성

1. [api.slack.com/apps](https://api.slack.com/apps) → Create New App
2. **OAuth & Permissions** → Bot Token Scopes: `chat:write` 추가 → 워크스페이스 설치
3. **Interactivity & Shortcuts** → ON, Request URL = Cloudflare Worker URL (Worker 배포 후 입력)
4. **Basic Information**에서 `Signing Secret` 복사, **OAuth & Permissions**에서 `Bot Token` 복사

### Cloudflare Worker 배포

```bash
# workers/slack-design-approved/ 디렉토리에서 실행
npx wrangler login
npx wrangler secret put SLACK_SIGNING_SECRET
npx wrangler secret put GH_PAT        # GitHub PAT (repo scope)
npx wrangler secret put GH_OWNER      # 저장소 소유자
npx wrangler secret put GH_REPO       # 저장소 이름
npx wrangler deploy
```

배포 후 출력된 Worker URL을 Slack App Interactivity Request URL에 입력한다.

### GitHub Secrets 등록

저장소 Settings → Secrets → Actions에 추가:
- `GH_PAT` — GitHub Personal Access Token (repo scope, Actions 머지용)
- `SLACK_WEBHOOK_URL` — Slack Incoming Webhook URL (배포 결과 알림용)

### 로컬 환경변수

```
CHROMATIC_PROJECT_TOKEN=...
SLACK_BOT_TOKEN=xoxb-...
SLACK_CHANNEL_ID=C0XXXXXXXXX
```

---

## 참고

- **Changeset 필수**: `.changeset/*.md`가 있어야 `changesets-workflow`가 올바르게 버전 업·배포를 처리한다.
- **main 직접 머지**: PR 없이 머지되므로 `build-test.yml` 등 PR 연동 CI가 실행되지 않는다. `design-approved-deploy.yml`에 `pnpm build` 검증 스텝이 포함되어 있다.
- 커밋 메시지는 항상 **한국어**로 작성한다.
