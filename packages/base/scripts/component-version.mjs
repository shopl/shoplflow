#!/usr/bin/env node
/**
 * 컴포넌트 버전 자동 관리 (version.ts 단일 소스)
 * - sync: 각 컴포넌트 version.ts를 읽어 VERSIONING.md 테이블의 샤플플로우 버전을 갱신
 * - bump [Category...]: 지정 카테고리의 version.ts 패치만 올린 뒤, VERSIONING.md 동기화
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(__dirname, '..');
const VERSIONING_PATH = path.join(BASE, 'VERSIONING.md');
const COMPONENTS_DIR = path.join(BASE, 'src', 'components');

const VERSION_RE = /export\s+const\s+\w+\s+=\s+'(\d+\.\d+\.\d+)'/;

/** 카테고리(폴더명) → version.ts 상수명 */
const CATEGORY_TO_CONST = {
  Avatar: 'AVATAR_VERSION',
  BackDrop: 'BACK_DROP_VERSION',
  Buttons: 'BUTTONS_VERSION',
  Callout: 'CALLOUT_VERSION',
  Chips: 'CHIPS_VERSION',
  Comboboxs: 'COMBOBOXS_VERSION',
  ControlButtons: 'CONTROL_BUTTONS_VERSION',
  Datepickers: 'DATEPICKERS_VERSION',
  Dropdown: 'DROPDOWN_VERSION',
  Icon: 'ICON_VERSION',
  Inputs: 'INPUTS_VERSION',
  List: 'LIST_VERSION',
  Menu: 'MENU_VERSION',
  Modal: 'MODAL_VERSION',
  Pagination: 'PAGINATION_VERSION',
  Popper: 'POPPER_VERSION',
  ScrollArea: 'SCROLL_AREA_VERSION',
  SearchBar: 'SEARCH_BAR_VERSION',
  Skeleton: 'SKELETON_VERSION',
  Slider: 'SLIDER_VERSION',
  Stack: 'STACK_VERSION',
  StackContainer: 'STACK_CONTAINER_VERSION',
  Switch: 'SWITCH_VERSION',
  Tabs: 'TABS_VERSION',
  Tag: 'TAG_VERSION',
  Text: 'TEXT_VERSION',
  ToggleButton: 'TOGGLE_BUTTON_VERSION',
  Tooltip: 'TOOLTIP_VERSION',
  Tree: 'TREE_VERSION',
};

/** version.ts 파일에서 버전 문자열 추출 */
function getVersionFromVersionTs(category) {
  const versionPath = path.join(COMPONENTS_DIR, category, 'version.ts');
  if (!fs.existsSync(versionPath)) return null;
  const content = fs.readFileSync(versionPath, 'utf8');
  const m = content.match(VERSION_RE);
  return m ? m[1] : null;
}

/** 모든 카테고리의 version.ts에서 버전 수집 */
function getAllVersionsFromVersionTs() {
  const map = new Map();
  for (const category of Object.keys(CATEGORY_TO_CONST)) {
    const version = getVersionFromVersionTs(category);
    if (version) map.set(category, version);
  }
  return map;
}

function parseVersioningMd(content) {
  const lines = content.split('\n');
  const rows = [];
  let inTable = false;
  for (const line of lines) {
    if (line.startsWith('|') && line.includes('샤플플로우 버전')) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith('|')) {
      const cells = line.split('|').map((c) => c.trim());
      if (cells[1] === '---' || cells[1] === '카테고리') continue;
      const category = cells[1];
      const version = cells[3];
      if (category && version && /^\d+\.\d+\.\d+$/.test(version)) {
        rows.push({ category, component: cells[2], version, design: cells[4], status: cells[5] });
      }
    } else if (inTable && line.trim() === '') {
      break;
    }
  }
  return rows;
}

/** VERSIONING.md의 샤플플로우 버전 컬럼을 version.ts 값으로 치환 */
function updateVersioningMdFromVersionTs(content, versionByCategory) {
  const rows = parseVersioningMd(content);
  let out = content;
  for (const row of rows) {
    const newVersion = versionByCategory.get(row.category);
    if (newVersion == null || newVersion === row.version) continue;
    const oldRow = `| ${row.category} | ${row.component} | ${row.version} | ${row.design} | ${row.status} |`;
    const newRow = `| ${row.category} | ${row.component} | ${newVersion} | ${row.design} | ${row.status} |`;
    out = out.replace(oldRow, newRow);
  }
  return out;
}

/** version.ts 기준으로 VERSIONING.md 테이블 갱신 */
function syncDoc() {
  const versionByCategory = getAllVersionsFromVersionTs();
  const raw = fs.readFileSync(VERSIONING_PATH, 'utf8');
  const newContent = updateVersioningMdFromVersionTs(raw, versionByCategory);
  if (newContent !== raw) {
    fs.writeFileSync(VERSIONING_PATH, newContent, 'utf8');
    console.log('Synced VERSIONING.md from version.ts');
  } else {
    console.log('VERSIONING.md is already up to date');
  }
}

function bumpPatch(version) {
  const [major, minor, patch] = version.split('.').map(Number);
  return `${major}.${minor}.${patch + 1}`;
}

function writeVersionTs(category, version) {
  const constName = CATEGORY_TO_CONST[category];
  if (!constName) return;
  const versionPath = path.join(COMPONENTS_DIR, category, 'version.ts');
  if (!fs.existsSync(path.dirname(versionPath))) return;
  const content = `/** @internal 컴포넌트 메타데이터: 버전 */\nexport const ${constName} = '${version}';\n`;
  fs.writeFileSync(versionPath, content, 'utf8');
}

function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (cmd === 'sync') {
    syncDoc();
    return;
  }

  if (cmd === 'bump') {
    const categories = args.slice(1).filter(Boolean);
    if (categories.length === 0) {
      console.log('Usage: node component-version.mjs bump Avatar Buttons ...');
      process.exit(1);
    }
    const set = new Set(categories);
    let updated = false;
    for (const category of set) {
      const current = getVersionFromVersionTs(category);
      if (!current) continue;
      const next = bumpPatch(current);
      writeVersionTs(category, next);
      updated = true;
    }
    if (updated) {
      syncDoc();
      console.log('Bumped patch for:', [...set].join(', '));
    }
    return;
  }

  console.log('Usage: node component-version.mjs sync | bump Category1 Category2 ...');
  process.exit(1);
}

main();
