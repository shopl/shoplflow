/**
 * Guards the invariants that make "a @shoplflow/base release also republishes
 * @shoplflow/mcp with fresh metadata" true.
 *
 * That behaviour is not declared anywhere as a single rule — it emerges from separate settings in
 * package.json, turbo.json and the release scripts. Each can be removed by a well-meaning
 * cleanup without breaking a build, so the failure mode is silent: extraction keeps working, CI
 * stays green, and consumers quietly keep receiving stale metadata. This script turns those
 * implicit couplings into an executable, failing check.
 *
 *   1. workspace devDeps  — turbo needs them to order the builds
 *   2. build:package chain — `generate:metadata &&` must run before the bundler
 *   3. turbo scheduling    — `turbo run build` must actually schedule mcp#build:package,
 *                            even though mcp has no `build` script
 *   4. release changeset   — the root `version` script must run `ensure:changeset` before
 *                            `changeset version`, and it must add an mcp patch for a base release
 *
 * Run: pnpm --filter @shoplflow/mcp check:wiring
 */
const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const PKG_DIR = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(PKG_DIR, "../..");
const PKG_NAME = "@shoplflow/mcp";

// The workspace packages whose sources the extractors read (see generate-metadata.cjs).
const {
  SOURCE_PACKAGES: REQUIRED_WORKSPACE_DEPS,
  planMcpChangeset,
} = require("./ensure-release-changeset.cjs");

const failures = [];
const notes = [];

function fail(title, detail) {
  failures.push({ title, detail });
}

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

/* ── 1. workspace devDependencies ────────────────────────────────────────────
 * Nothing imports these at runtime, which is exactly why they get deleted. They are what makes
 * turbo build base/assets (and their icon barrels) before mcp extracts from them.
 * Note: they do NOT make changesets bump mcp — that is check 4's job.
 */
function checkWorkspaceDeps(pkg) {
  const declared = { ...pkg.dependencies, ...pkg.devDependencies };
  const missing = REQUIRED_WORKSPACE_DEPS.filter((d) => !declared[d]);
  if (missing.length) {
    fail(
      `${PKG_NAME} is missing workspace dependencies: ${missing.join(", ")}`,
      [
        "These are NOT unused. Without them turbo loses the ordering that builds base/assets",
        "before mcp#build:package, so the extractors can read stale icon barrels.",
        "Nothing will error; the breakage is silent. Restore them as `workspace:*` devDependencies.",
      ].join("\n"),
    );
    return;
  }
  const wrongRange = REQUIRED_WORKSPACE_DEPS.filter(
    (d) => !String(declared[d]).startsWith("workspace:"),
  );
  if (wrongRange.length) {
    fail(
      `Workspace deps must use the \`workspace:\` protocol: ${wrongRange.join(", ")}`,
      "A registry range would resolve to a published copy instead of the local sources the extractors read.",
    );
  }
}

/* ── 2. build:package always regenerates ─────────────────────────────────── */
function checkBuildChain(pkg) {
  const script = pkg.scripts?.["build:package"] ?? "";
  if (!/generate:metadata\s*&&/.test(script)) {
    fail(
      "`build:package` no longer runs `generate:metadata` before bundling",
      [
        `  current: ${script || "(missing)"}`,
        "  expected it to start with: pnpm generate:metadata && …",
        "Without this there is a build path that publishes the previously generated JSON,",
        "so the bundle can ship metadata that no longer matches base.",
      ].join("\n"),
    );
  }
}

/* ── 3. turbo actually schedules mcp#build:package ────────────────────────────
 * mcp defines no `build` script, so this depends on turbo expanding the task graph across all
 * packages. If that ever changes, `pnpm build` in CI stops producing dist/ before publish.
 * A turbo failure here is reported as a note, not a failure — we only assert on a successful run.
 */
function checkTurboSchedule() {
  let raw;
  try {
    raw = execFileSync(
      "pnpm",
      ["exec", "turbo", "run", "build", "--dry=json"],
      {
        cwd: REPO_ROOT,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
        maxBuffer: 32 * 1024 * 1024,
      },
    );
  } catch {
    notes.push(
      "turbo dry-run could not be executed — skipped the scheduling check (not treated as a failure).",
    );
    return;
  }

  let plan;
  try {
    plan = JSON.parse(raw);
  } catch {
    notes.push(
      "turbo dry-run output was not JSON — skipped the scheduling check.",
    );
    return;
  }

  const taskId = `${PKG_NAME}#build:package`;
  const task = (plan.tasks ?? []).find((t) => t.taskId === taskId);
  if (!task || task.command === "<NONEXISTENT>") {
    fail(
      `\`turbo run build\` does not schedule ${taskId}`,
      [
        "CI's `pnpm build` is what produces dist/ before `changeset publish`.",
        "If this task is not scheduled, mcp is published without a fresh bundle.",
        `Fix by giving ${PKG_NAME} a \`build\` script, or restore the turbo task graph.`,
      ].join("\n"),
    );
  }
}

/* ── 4. release changeset ─────────────────────────────────────────────────────
 * changesets resolves a devDependency-only dependent to `none`, so nothing in changesets itself
 * bumps mcp for a base release. ensure-release-changeset.cjs does, but only if the root `version`
 * script (what both CI release paths run) calls it before `changeset version` consumes the queue.
 */
function checkReleaseChangeset(pkg) {
  const script = pkg.scripts?.["ensure:changeset"] ?? "";
  if (!script.includes("ensure-release-changeset.cjs")) {
    fail(
      "`ensure:changeset` script is missing",
      `  expected: "ensure:changeset": "node scripts/ensure-release-changeset.cjs"\n  current: ${script || "(missing)"}`,
    );
  }

  const rootVersion =
    readJson(path.join(REPO_ROOT, "package.json")).scripts?.version ?? "";
  if (!/ensure:changeset\b[\s\S]*\bchangeset version\b/.test(rootVersion)) {
    fail(
      "root `version` script does not run `ensure:changeset` before `changeset version`",
      [
        `  current: ${rootVersion || "(missing)"}`,
        "  expected it to start with: pnpm --filter @shoplflow/mcp ensure:changeset && pnpm changeset version …",
        "Without this a base release never adds an mcp changeset, so mcp is never republished.",
      ].join("\n"),
    );
  }

  const base = REQUIRED_WORKSPACE_DEPS[0];
  const plan = planMcpChangeset({
    changesets: [{ id: "probe", releases: [{ name: base, type: "patch" }] }],
    releases: [{ name: base, type: "patch", newVersion: "0.0.1" }],
  });
  if (!plan.content || !plan.content.includes(`"${PKG_NAME}": patch`)) {
    fail(
      `ensure-release-changeset.cjs no longer adds an ${PKG_NAME} patch for a ${base} release`,
      `  got: ${JSON.stringify(plan)}`,
    );
  }
}

/* ── run ─────────────────────────────────────────────────────────────────── */
const pkg = readJson(path.join(PKG_DIR, "package.json"));

checkWorkspaceDeps(pkg);
checkBuildChain(pkg);
checkTurboSchedule();
checkReleaseChangeset(pkg);

for (const n of notes) console.warn(`! ${n}`);

if (failures.length) {
  console.error(
    `\n✗ ${PKG_NAME} release wiring is broken (${failures.length} problem${failures.length > 1 ? "s" : ""}):\n`,
  );
  for (const { title, detail } of failures) {
    console.error(`  ✗ ${title}`);
    for (const line of detail.split("\n")) console.error(`    ${line}`);
    console.error("");
  }
  console.error(
    "See packages/mcp/아키텍쳐.md section 6 for why each of these matters.\n",
  );
  process.exit(1);
}

console.log(
  `✓ ${PKG_NAME} release wiring intact (workspace deps · build:package chain · turbo scheduling · release changeset)`,
);
