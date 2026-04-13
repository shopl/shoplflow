/**
 * Slack Interactivity Webhook → GitHub workflow_dispatch
 *
 * 디자이너가 Slack에서 버튼을 누르면 이 Worker가:
 * - "디자인 검수 완료": 채널에 검수 완료 안내 메시지 (배포 없음)
 * - "배포": GitHub workflow_dispatch(ref=브랜치) → design-approved-deploy 워크플로(브랜치 직접 빌드·배포)
 *
 * 필요 Worker Secrets:
 *   SLACK_SIGNING_SECRET  - Slack App의 Signing Secret
 *   GH_PAT                - GitHub Personal Access Token (repo scope)
 *   GH_OWNER              - GitHub 저장소 소유자 (예: shoplflow)
 *   GH_REPO               - GitHub 저장소 이름 (예: shoplflow)
 *
 */

const GITHUB_API = 'https://api.github.com';

/**
 * GitHub workflow_dispatch 이벤트 발송
 */
async function triggerGitHubWorkflowDispatch(branch, env) {
  const url = `${GITHUB_API}/repos/${env.GH_OWNER}/${env.GH_REPO}/actions/workflows/design-approved-deploy.yml/dispatches`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GH_PAT}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'Content-Type': 'application/json',
      'User-Agent': 'Shoplflow-Design-Approved-Worker/1.0',
    },
    body: JSON.stringify({
      ref: branch,
      inputs: { branch },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    const err = new Error(`GitHub workflow_dispatch failed: ${response.status} ${text}`);
    err.status = response.status;
    err.body = text;
    throw err;
  }
}

/**
 * Slack 요청 서명 검증
 * https://api.slack.com/authentication/verifying-requests-from-slack
 */
async function verifySlackSignature(request, body, signingSecret) {
  const timestamp = request.headers.get('x-slack-request-timestamp');
  const slackSignature = request.headers.get('x-slack-signature');

  if (!timestamp || !slackSignature) {
    return false;
  }

  const fiveMinutesAgo = Math.floor(Date.now() / 1000) - 60 * 5;
  if (Number(timestamp) < fiveMinutesAgo) {
    return false;
  }

  const sigBaseString = `v0:${timestamp}:${body}`;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(signingSecret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(sigBaseString));
  const hexSignature = `v0=${Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')}`;

  return hexSignature === slackSignature;
}

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const body = await request.text();

    const isValid = await verifySlackSignature(request, body, env.SLACK_SIGNING_SECRET);
    if (!isValid) {
      return new Response('Unauthorized', { status: 401 });
    }

    const params = new URLSearchParams(body);
    const payloadRaw = params.get('payload');
    if (!payloadRaw) {
      return new Response('Bad Request', { status: 400 });
    }

    let payload;
    try {
      payload = JSON.parse(payloadRaw);
    } catch {
      return new Response('Bad Request', { status: 400 });
    }

    const action = payload?.actions?.[0];
    if (!action) {
      return new Response('OK', { status: 200 });
    }

    const branch = action.value;
    if (!branch) {
      return new Response('Bad Request: branch value missing', { status: 400 });
    }

    const userId = payload.user?.id;
    const mention = userId ? `<@${userId}>` : '';

    const actionId = action.action_id;

    // 검수 완료만 표시 — GitHub 호출 없음
    if (actionId === 'design_review_complete') {
      const text = `✅ ${mention ? `${mention} ` : ''}*디자인 검수 완료*로 표시했습니다. 이 브랜치를 바로 빌드·배포하려면 아래 *배포* 버튼을 눌러주세요. (\`${branch}\`)`;
      const messagePayload = {
        replace_original: false,
        response_type: 'in_channel',
        text,
      };
      return new Response(JSON.stringify(messagePayload), {
        status: 200,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      });
    }

    if (actionId !== 'design_deploy') {
      return new Response('OK', { status: 200 });
    }

    let messageText;
    try {
      await triggerGitHubWorkflowDispatch(branch, env);
      messageText = `🚀 *배포 시작* — \`${branch}\` 브랜치 기준 빌드·배포 워크플로가 실행됩니다.`;
    } catch (e) {
      console.error('triggerGitHubWorkflowDispatch failed', e?.message || e, e?.body);
      const status = e?.status;
      let hint = 'GitHub 시크릿(GH_PAT, GH_OWNER, GH_REPO) 확인';
      if (status === 401 || status === 403) {
        hint = 'GH_PAT 권한 확인 (repo + workflow scope 필요)';
      } else if (status === 404) {
        hint = '브랜치명 또는 워크플로 파일 경로 확인';
      }
      messageText = `❌ *배포 요청 실패* — \`${branch}\` (${status || '오류'}) ${hint}`;
    }

    const messagePayload = {
      replace_original: false,
      response_type: 'in_channel',
      text: messageText,
    };

    const responseUrl = payload.response_url;
    if (responseUrl) {
      try {
        const res = await fetch(responseUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(messagePayload),
        });
        if (!res.ok) {
          const errText = await res.text();
          console.error('response_url POST failed', res.status, errText);
        }
      } catch (e) {
        console.error('response_url fetch error', e);
      }
    }

    return new Response(JSON.stringify(messagePayload), {
      status: 200,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  },
};
