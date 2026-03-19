const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 📌 루트 경로를 절대 경로로 지정 (현재 파일 기준 두 단계 위)
const rootDir = path.resolve(__dirname, '../../../'); // shoplflow
const changesetDir = path.join(rootDir, '.changeset');

if (!fs.existsSync(changesetDir)) {
  fs.mkdirSync(changesetDir);
}

const getChangesetFiles = () => {
  if (!fs.existsSync(changesetDir)) {
    return [];
  }
  return fs
    .readdirSync(changesetDir)
    .filter((file) => file.endsWith('.md') && file !== 'README.md')
    .map((file) => path.join(changesetDir, file));
};

function updateOrCreateChangeset(changedPackages) {
  const files = getChangesetFiles();
  if (files.length === 0) {
    // changeset 파일이 없으면 새로 생성
    const content = `---\n${changedPackages.map((pkg) => `"${pkg}": patch`).join('\n')}\n---\nicon 추가\n`;
    const fileName = `${Math.random().toString(36).slice(2)}.md`;
    fs.writeFileSync(path.join(changesetDir, fileName), content);
    // eslint-disable-next-line no-console
    console.log(`Changeset 생성 완료: ${changedPackages.join(', ')}`);
    return;
  }

  // 가장 최근 파일(정렬상 마지막) 기준
  const targetFile = files[files.length - 1];
  let fileContent = fs.readFileSync(targetFile, 'utf8');
  let updated = false;

  changedPackages.forEach((pkg) => {
    const patchLine = `"${pkg}": patch`;
    if (!fileContent.includes(patchLine)) {
      // --- 아래에 patchLine 추가
      fileContent = fileContent.replace(/---\n/, `---\n${patchLine}\n`);
      updated = true;
    }
  });

  if (updated) {
    fs.writeFileSync(targetFile, fileContent);
    // eslint-disable-next-line no-console
    console.log(`Changeset 업데이트 완료: ${changedPackages.join(', ')}`);
  } else {
    // eslint-disable-next-line no-console
    console.log('추가할 패키지 patch가 없습니다.');
  }
}

// Git diff를 통해 변경된 패키지 확인
function getChangedPackages() {
  try {
    const diff = execSync('git diff --name-only origin/main...HEAD', {
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

    return Array.from(packages);
  } catch (error) {
    console.error('Git diff 확인 중 오류:', error.message);
    return ['@shoplflow/shopl-assets'];
  }
}

const changedPackages = getChangedPackages();

if (changedPackages.length === 0) {
  // eslint-disable-next-line no-console
  console.log('변경된 아이콘 패키지가 없습니다.');
  process.exit(0);
}

updateOrCreateChangeset(changedPackages);
