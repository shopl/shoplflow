/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const path = require('path');

// 📌 루트 경로를 절대 경로로 지정 (현재 파일 기준 두 단계 위)
const rootDir = path.resolve(__dirname, '../../../'); // shoplflow
const changesetDir = path.join(rootDir, '.changeset');

if (!fs.existsSync(changesetDir)) {
  fs.mkdirSync(changesetDir);
}

const content = `---
"@shoplflow/shopl-assets": patch
---
icon 추가
`;

const fileName = `${Math.random().toString(36).slice(2)}.md`;
fs.writeFileSync(path.join(changesetDir, fileName), content);
