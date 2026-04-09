#!/usr/bin/env node
/**
 * 컴포넌트 버전 자동 관리 (version.ts 단일 소스)
 * - sync: 각 컴포넌트 version.ts를 읽어 VERSIONING.md 테이블의 샤플플로우 버전을 갱신
 * - bump [Category...]: 지정 카테고리의 version.ts 패치만 올린 뒤, VERSIONING.md 동기화
 * - validate [Category...]: 수동 변경된 version.ts의 버전이 올바른지 검증 후 CLI 확인
 */
import fs from "fs";
import path from "path";
import readline from "readline";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = path.resolve(__dirname, "..");
const VERSIONING_PATH = path.join(BASE, "VERSIONING.md");
const COMPONENTS_DIR = path.join(BASE, "src", "components");

const VERSION_RE = /export\s+const\s+\w+\s+=\s+'(\d+\.\d+\.\d+)'/;

const CATEGORY_TO_CONST = {
  Avatar: "AVATAR_VERSION",
  BackDrop: "BACK_DROP_VERSION",
  Buttons: "BUTTONS_VERSION",
  Callout: "CALLOUT_VERSION",
  Chips: "CHIPS_VERSION",
  Comboboxs: "COMBOBOXS_VERSION",
  ControlButtons: "CONTROL_BUTTONS_VERSION",
  Datepickers: "DATEPICKERS_VERSION",
  Dropdown: "DROPDOWN_VERSION",
  HelperText: "HELPER_TEXT_VERSION",
  Icon: "ICON_VERSION",
  Inputs: "INPUTS_VERSION",
  List: "LIST_VERSION",
  Menu: "MENU_VERSION",
  Modal: "MODAL_VERSION",
  Pagination: "PAGINATION_VERSION",
  Popper: "POPPER_VERSION",
  ScrollArea: "SCROLL_AREA_VERSION",
  SearchBar: "SEARCH_BAR_VERSION",
  Skeleton: "SKELETON_VERSION",
  Slider: "SLIDER_VERSION",
  Stack: "STACK_VERSION",
  StackContainer: "STACK_CONTAINER_VERSION",
  Switch: "SWITCH_VERSION",
  Tabs: "TABS_VERSION",
  Tag: "TAG_VERSION",
  Text: "TEXT_VERSION",
  ToggleButton: "TOGGLE_BUTTON_VERSION",
  Tooltip: "TOOLTIP_VERSION",
  Tree: "TREE_VERSION",
};

// ─── 유틸 ───

function getVersionFromVersionTs(category) {
  const versionPath = path.join(COMPONENTS_DIR, category, "version.ts");
  if (!fs.existsSync(versionPath)) return null;
  const content = fs.readFileSync(versionPath, "utf8");
  const m = content.match(VERSION_RE);
  return m ? m[1] : null;
}

/** git HEAD의 version.ts에서 이전 버전 추출 */
function getOldVersionFromGit(category) {
  const relPath = `packages/base/src/components/${category}/version.ts`;
  try {
    const content = execSync(`git show HEAD:${relPath}`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    });
    const m = content.match(VERSION_RE);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

function parseSemver(v) {
  const [major, minor, patch] = v.split(".").map(Number);
  return { major, minor, patch };
}

function _semverGt(a, b) {
  const pa = parseSemver(a);
  const pb = parseSemver(b);
  if (pa.major !== pb.major) return pa.major > pb.major;
  if (pa.minor !== pb.minor) return pa.minor > pb.minor;
  return pa.patch > pb.patch;
}

function describeChange(oldV, newV) {
  const o = parseSemver(oldV);
  const n = parseSemver(newV);
  if (n.major !== o.major) return "메이저 변경";
  if (n.minor !== o.minor) return "마이너 변경";
  if (n.patch !== o.patch) return "패치 변경";
  return "변경 없음";
}

function getAllVersionsFromVersionTs() {
  const map = new Map();
  for (const category of Object.keys(CATEGORY_TO_CONST)) {
    const version = getVersionFromVersionTs(category);
    if (version) map.set(category, version);
  }
  return map;
}

function parseVersioningMd(content) {
  const lines = content.split("\n");
  const rows = [];
  let inTable = false;
  for (const line of lines) {
    if (line.startsWith("|") && line.includes("샤플플로우 버전")) {
      inTable = true;
      continue;
    }
    if (inTable && line.startsWith("|")) {
      const cells = line.split("|").map((c) => c.trim());
      if (cells[1] === "---" || cells[1] === "카테고리") continue;
      const category = cells[1];
      const version = cells[3];
      if (category && version && /^\d+\.\d+\.\d+$/.test(version)) {
        rows.push({
          category,
          component: cells[2],
          version,
          design: cells[4],
          status: cells[5],
        });
      }
    } else if (inTable && line.trim() === "") {
      break;
    }
  }
  return rows;
}

/** 샤플플로우 메이저.마이너 vs 디자인 메이저.마이너 비교하여 현황 반환 */
function computeStatus(shoplflowVersion, designVersion) {
  const [sMajor, sMinor] = shoplflowVersion.split(".").map(Number);
  const [dMajor, dMinor] = designVersion.split(".").map(Number);
  if (sMajor === dMajor && sMinor === dMinor) return "🟢";
  if (sMajor > dMajor || (sMajor === dMajor && sMinor > dMinor)) return "🔵";
  return "🔴";
}

function updateVersioningMdFromVersionTs(content, versionByCategory) {
  const rows = parseVersioningMd(content);
  let out = content;
  for (const row of rows) {
    const newVersion = versionByCategory.get(row.category) ?? row.version;
    const newStatus = computeStatus(newVersion, row.design);
    if (newVersion === row.version && newStatus === row.status) continue;
    const oldRow = `| ${row.category} | ${row.component} | ${row.version} | ${row.design} | ${row.status} |`;
    const newRow = `| ${row.category} | ${row.component} | ${newVersion} | ${row.design} | ${newStatus} |`;
    out = out.replace(oldRow, newRow);
  }
  return out;
}

function syncDoc() {
  const versionByCategory = getAllVersionsFromVersionTs();
  const raw = fs.readFileSync(VERSIONING_PATH, "utf8");
  const newContent = updateVersioningMdFromVersionTs(raw, versionByCategory);
  if (newContent !== raw) {
    fs.writeFileSync(VERSIONING_PATH, newContent, "utf8");
    console.log("Synced VERSIONING.md from version.ts");
  } else {
    console.log("VERSIONING.md is already up to date");
  }
  // 위 두 경우 모두 성공 — pre-commit은 계속 진행되어 커밋 가능
}

function bumpPatch(version) {
  const [major, minor, patch] = version.split(".").map(Number);
  return `${major}.${minor}.${patch + 1}`;
}

function writeVersionTs(category, version) {
  const constName = CATEGORY_TO_CONST[category];
  if (!constName) return;
  const versionPath = path.join(COMPONENTS_DIR, category, "version.ts");
  if (!fs.existsSync(path.dirname(versionPath))) return;
  const content = `/** @internal 컴포넌트 메타데이터: 버전 */\nexport const ${constName} = '${version}';\n`;
  fs.writeFileSync(versionPath, content, "utf8");
}

// ─── validate ───

function openTtyInput() {
  try {
    const fd = fs.openSync("/dev/tty", "r");
    return fs.createReadStream(null, { fd });
  } catch {
    return process.stdin;
  }
}

function promptYesNo(question) {
  return new Promise((resolve) => {
    const input = openTtyInput();
    const rl = readline.createInterface({ input, output: process.stdout });
    rl.question(question, (answer) => {
      rl.close();
      // /dev/tty 스트림은 닫아서 이후 입력 대기를 막음 (process.stdin은 destroy 안 함)
      if (input !== process.stdin && typeof input.destroy === "function")
        input.destroy();
      resolve(answer.trim().toLowerCase() === "y");
    });
  });
}

async function validateCategories(categories) {
  const errors = [];
  const changes = [];

  for (const category of categories) {
    const newVersion = getVersionFromVersionTs(category);
    const oldVersion = getOldVersionFromGit(category);

    if (!newVersion) {
      errors.push(`  ❌ ${category}: version.ts에서 버전을 읽을 수 없습니다.`);
      continue;
    }

    if (!oldVersion) {
      changes.push({
        category,
        oldVersion: "(신규)",
        newVersion,
        type: "신규 추가",
      });
      continue;
    }

    if (newVersion === oldVersion) continue;

    changes.push({
      category,
      oldVersion,
      newVersion,
      type: describeChange(oldVersion, newVersion),
    });
  }

  if (errors.length > 0) {
    console.log("\n🚫 버전 검증 실패:\n");
    errors.forEach((e) => console.log(e));
    console.log("\n버전을 수정한 뒤 다시 커밋해주세요.");
    process.exit(1);
  }

  if (changes.length === 0) return;

  console.log("\n📦 수동 버전 변경 감지:\n");
  for (const c of changes) {
    console.log(
      `  ${c.category}: ${c.oldVersion} → ${c.newVersion} (${c.type})`,
    );
  }
  console.log();

  const confirmed = await promptYesNo("이 변경을 적용하시겠습니까? (y/n) ");
  if (!confirmed) {
    console.log("\n커밋이 취소되었습니다.");
    process.exit(1);
  }

  console.log();
}

// ─── main ───

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0];

  if (cmd === "sync") {
    syncDoc();
    return;
  }

  if (cmd === "bump") {
    const categories = args.slice(1).filter(Boolean);
    if (categories.length === 0) {
      console.log("Usage: node component-version.mjs bump Avatar Buttons ...");
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
      console.log("Bumped patch for:", [...set].join(", "));
    }
    return;
  }

  if (cmd === "validate") {
    const categories = args.slice(1).filter(Boolean);
    if (categories.length === 0) {
      console.log(
        "Usage: node component-version.mjs validate Avatar Buttons ...",
      );
      process.exit(1);
    }
    await validateCategories(categories);
    syncDoc();
    process.exit(0);
  }

  console.log(
    "Usage: node component-version.mjs sync | bump Category1 ... | validate Category1 ...",
  );
  process.exit(1);
}

main();
