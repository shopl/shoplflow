# slack-design-approved Worker

Slack 메시지의 인터랙션을 처리하는 Cloudflare Worker.

- **디자인 검수 완료**(초록): 검수 완료 안내 메시지만 채널에 표시 (배포 없음)
- **배포**(빨강): GitHub `repository_dispatch` → `design-approved-deploy` 워크플로(main 머지·배포)

## 배포 방법

`wrangler`는 전역 설치 없이 **`npx`**(또는 `pnpm dlx wrangler`)로 실행하는 것을 권장한다. (`zsh: command not found: wrangler` 는 PATH에 wrangler가 없을 때 난다.)

```bash
cd workers/slack-design-approved

# 1. Cloudflare 로그인 (최초 1회)
npx wrangler login

# 2. Worker Secrets 등록
npx wrangler secret put SLACK_SIGNING_SECRET   # Slack App Signing Secret
npx wrangler secret put GH_PAT                 # GitHub PAT (repo scope)
npx wrangler secret put GH_OWNER              # GitHub 저장소 소유자
npx wrangler secret put GH_REPO               # GitHub 저장소 이름

# 3. 배포
npx wrangler deploy
```

전역으로 쓰고 싶다면 `pnpm add -g wrangler` 또는 `npm i -g wrangler` 후 `wrangler` 단독 실행하면 된다.

배포 완료 후 출력된 Worker URL을 Slack App의 **Interactivity & Shortcuts > Request URL**에 입력한다.

## Slack App 설정

1. [api.slack.com/apps](https://api.slack.com/apps) → Create New App
2. **OAuth & Permissions** → Bot Token Scopes: `chat:write` 추가
3. **Interactivity & Shortcuts** → ON, Request URL = Worker URL
4. 앱을 워크스페이스에 설치 후 Bot Token(`xoxb-...`) 및 Signing Secret 복사

## 로컬 환경변수

에이전트가 Slack 메시지를 직접 전송하려면 로컬 `.env.local`에 아래를 설정한다:

```
SLACK_BOT_TOKEN=xoxb-...
SLACK_CHANNEL_ID=C0XXXXXXXXX
```

## 버튼이 붙은 메시지 보내기

Chromatic 빌드 후 스토리북 URL과 두 버튼이 있는 메시지를 Slack에 보내려면:

```bash
pnpm send-design-review https://xxx-xxxxx.chromatic.com/
```

위 URL은 Chromatic 실행 시 터미널에 나오는 "View your Storybook at ..." 주소를 사용한다.  
디자이너는 먼저 **디자인 검수 완료**로 검수를 기록한 뒤, 배포를 진행할 때만 **배포**를 누른다.
