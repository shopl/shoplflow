/**
 * Guards the three invariants that make "a @shoplflow/base release also republishes
 * @shoplflow/mcp with fresh metadata" true.
 *
 * That behaviour is not declared anywhere as a single rule — it emerges from separate settings in
 * package.json, turbo.json and .changeset/config.json. Each can be removed by a well-meaning
 * cleanup without breaking a build, so the failure mode is silent: extraction keeps working, CI
 * stays green, and consumers quietly keep receiving stale metadata. This script turns those
 * implicit couplings into an executable, failing check.
 *
 *   1. workspace devDeps  — changesets needs them to bump mcp as a dependent of base,
 *                           and turbo needs them to order the builds
 *   2. build:package chain — `generate:metadata &&` must run before the bundler
 *   3. turbo scheduling    — `turbo run build` must actually schedule mcp#build:package,
 *                            even though mcp has no `build` script
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
const REQUIRED_WORKSPACE_DEPS = [
  "@shoplflow/base",
  "@shoplflow/shopl-assets",
  "@shoplflow/hada-assets",
];

const failures = [];
const notes = [];

function fail(title, detail) {
  failures.push({ title, detail });
}

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

/* ── 1. workspace devDependencies ────────────────────────────────────────────
 * Nothing imports these at runtime, which is exactly why they get deleted. They are the only
 * signal changesets has that mcp must be version-bumped when base is.
 */
function checkWorkspaceDeps(pkg) {
  const declared = { ...pkg.dependencies, ...pkg.devDependencies };
  const missing = REQUIRED_WORKSPACE_DEPS.filter((d) => !declared[d]);
  if (missing.length) {
    fail(
      `${PKG_NAME} is missing workspace dependencies: ${missing.join(", ")}`,
      [
        "These are NOT unused. Without them:",
        "  · changesets stops treating mcp as a dependent of base, so a base release no longer",
        "    patch-bumps mcp — mcp is never republished and consumers keep stale metadata.",
        "  · turbo loses the ordering that builds base/assets before mcp#build:package.",
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

/* ── run ─────────────────────────────────────────────────────────────────── */
const pkg = readJson(path.join(PKG_DIR, "package.json"));

checkWorkspaceDeps(pkg);
checkBuildChain(pkg);
checkTurboSchedule();

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
  `✓ ${PKG_NAME} release wiring intact (workspace deps · build:package chain · turbo scheduling)`,
);
