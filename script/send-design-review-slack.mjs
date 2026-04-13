#!/usr/bin/env node
/**
 * Chromatic 스토리북 URL과 버튼 2개(디자인 검수 완료 / 배포)가 있는 메시지를 Slack에 전송한다.
 * - 디자인 검수 완료: 검수 완료 안내 메시지만 표시 (배포 없음)
 * - 배포: GitHub repository_dispatch → main 머지·배포 워크플로
 * 환경변수: SLACK_BOT_TOKEN, SLACK_CHANNEL_ID, CHROMATIC_URL(또는 첫 번째 인자)
 * 사용: pnpm send-design-review [chromatic_url]
 *      또는 dotenv -e .env.local -- node script/send-design-review-slack.mjs [chromatic_url]
 */

import { execSync } from "child_process";

const token = process.env.SLACK_BOT_TOKEN;
const channelId = process.env.SLACK_CHANNEL_ID;
const chromaticUrl = process.argv[2] || process.env.CHROMATIC_URL;

if (!token || !channelId) {
  console.error(
    "SLACK_BOT_TOKEN, SLACK_CHANNEL_ID가 필요합니다. .env.local에 설정 후 pnpm send-design-review 로 실행하세요.",
  );
  process.exit(1);
}

if (!chromaticUrl) {
  console.error(
    "Chromatic 스토리북 URL이 필요합니다. 인자로 넘기거나 CHROMATIC_URL 환경변수를 설정하세요.",
  );
  console.error("예: pnpm send-design-review https://xxx-xxxxx.chromatic.com/");
  process.exit(1);
}

let branch;
try {
  branch = execSync("git rev-parse --abbrev-ref HEAD", {
    encoding: "utf-8",
  }).trim();
} catch {
  console.error("현재 브랜치를 읽을 수 없습니다.");
  process.exit(1);
}

const body = {
  channel: channelId,
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: `*디자인 검수 요청*\n브랜치: \`${branch}\`\n\n<${chromaticUrl}|Chromatic 스토리북 열기>`,
      },
    },
    {
      type: "actions",
      elements: [
        {
          type: "button",
          text: { type: "plain_text", text: "디자인 검수 완료" },
          style: "primary",
          action_id: "design_review_complete",
          value: branch,
        },
        {
          type: "button",
          text: { type: "plain_text", text: "배포" },
          style: "danger",
          action_id: "design_deploy",
          value: branch,
        },
      ],
    },
  ],
};

const res = await fetch("https://slack.com/api/chat.postMessage", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

const data = await res.json().catch(() => ({}));

if (!res.ok || !data.ok) {
  console.error(
    "Slack 전송 실패:",
    res.status,
    data.error || (await res.text()),
  );
  process.exit(1);
}

console.log(
  "Slack에 디자인 검수 요청 메시지를 보냈습니다. 버튼을 클릭하면 Worker가 동작합니다.",
);
