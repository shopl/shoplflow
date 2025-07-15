/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 📌 루트 경로를 절대 경로로 지정 (현재 파일 기준 두 단계 위)
const rootDir = path.resolve(__dirname, '../../../'); // shoplflow
const changesetDir = path.join(rootDir, '.changeset');

if (!fs.existsSync(changesetDir)) {
  fs.mkdirSync(changesetDir);
}

// Git diff를 통해 변경된 패키지 확인
function getChangedPackages() {
  try {
    const diff = execSync('git diff --name-only --cached', {
      cwd: rootDir,
      encoding: 'utf8',
    });

    const changedFiles = diff.split('\n').filter(Boolean);
    const packages = new Set();

    changedFiles.forEach((file) => {
      if (file.includes('packages/shopl-assets/src/icons/assets/')) {
        packages.add('@shoplflow/shopl-assets');
      }
      if (file.includes('packages/hada-assets/src/icons/assets/')) {
        packages.add('@shoplflow/hada-assets');
      }
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return Array.from(packages);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Git diff 확인 중 오류:', error.message);
    // 기본값으로 shopl-assets 반환
    return ['@shoplflow/shopl-assets'];
  }
}

const changedPackages = getChangedPackages();

if (changedPackages.length === 0) {
  // eslint-disable-next-line no-console
  console.log('변경된 아이콘 패키지가 없습니다.');
  process.exit(0);
}

const content = `---
${changedPackages.map((pkg) => `"${pkg}": patch`).join('\n')}
---
icon 추가
`;

const fileName = `${Math.random().toString(36).slice(2)}.md`;
fs.writeFileSync(path.join(changesetDir, fileName), content);

// eslint-disable-next-line no-console
console.log(`Changeset 생성 완료: ${changedPackages.join(', ')}`);
