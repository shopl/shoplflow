#!/usr/bin/env node
/**
 * pre-commit: version.ts 단일 소스 기준
 * - 컴포넌트 코드 변경 시: 해당 카테고리 version.ts 패치 bump → VERSIONING.md 동기화 후 스테이징
 * - version.ts만 변경 시: VERSIONING.md를 version.ts 기준으로 동기화 후 스테이징
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

const bumpCategories = new Set();
let hasVersionTsStaged = false;
for (const file of staged) {
  if (!file.startsWith(PREFIX)) continue;
  const rest = file.slice(PREFIX.length);
  if (rest.includes('/')) {
    const folder = rest.split('/')[0];
    if (!folder) continue;
    if (file.endsWith('version.ts')) {
      hasVersionTsStaged = true;
    } else {
      bumpCategories.add(folder);
    }
  }
}

if (bumpCategories.size > 0) {
  const list = [...bumpCategories].join(' ');
  execSync(`node scripts/component-version.mjs bump ${list}`, { cwd: BASE_PKG, stdio: 'inherit' });
  execSync('git add packages/base/VERSIONING.md', { cwd: ROOT, stdio: 'inherit' });
  for (const cat of bumpCategories) {
    execSync(`git add packages/base/src/components/${cat}/version.ts`, { cwd: ROOT, stdio: 'inherit' });
  }
} else if (hasVersionTsStaged) {
  execSync('node scripts/component-version.mjs sync', { cwd: BASE_PKG, stdio: 'inherit' });
  execSync('git add packages/base/VERSIONING.md', { cwd: ROOT, stdio: 'inherit' });
}
