#!/usr/bin/env node
/**
 * pre-commit: version.ts 단일 소스 기준
 * - version.ts 수동 변경: validate(검증 + CLI 확인) 후 VERSIONING.md 동기화
 * - 컴포넌트 코드만 변경: 해당 카테고리 version.ts 패치 auto-bump → VERSIONING.md 동기화
 * - 수동 변경 카테고리는 auto-bump에서 제외
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PREFIX = 'packages/base/src/components/';
const BASE_PKG = path.join(ROOT, 'packages/base');

const staged = execSync('git diff --cached --name-only', { encoding: 'utf8', cwd: ROOT })
  .trim()
  .split('\n')
  .filter(Boolean);

const manualCategories = new Set();
const codeCategories = new Set();

for (const file of staged) {
  if (!file.startsWith(PREFIX)) continue;
  const rest = file.slice(PREFIX.length);
  if (!rest.includes('/')) continue;
  const folder = rest.split('/')[0];
  if (!folder) continue;
  if (file.endsWith('version.ts')) {
    manualCategories.add(folder);
  } else {
    codeCategories.add(folder);
  }
}

const bumpCategories = new Set([...codeCategories].filter((c) => !manualCategories.has(c)));

if (manualCategories.size > 0) {
  const list = [...manualCategories].join(' ');
  execSync(`node scripts/component-version.mjs validate ${list}`, {
    cwd: BASE_PKG,
    stdio: 'inherit',
  });
  execSync('git add packages/base/VERSIONING.md', { cwd: ROOT, stdio: 'inherit' });
}

if (bumpCategories.size > 0) {
  const list = [...bumpCategories].join(' ');
  execSync(`node scripts/component-version.mjs bump ${list}`, { cwd: BASE_PKG, stdio: 'inherit' });
  execSync('git add packages/base/VERSIONING.md', { cwd: ROOT, stdio: 'inherit' });
  for (const cat of bumpCategories) {
    execSync(`git add packages/base/src/components/${cat}/version.ts`, { cwd: ROOT, stdio: 'inherit' });
  }
}
