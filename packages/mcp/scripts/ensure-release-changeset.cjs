/**
 * Makes "a @shoplflow/base (or assets) release also republishes @shoplflow/mcp" actually happen.
 *
 * changesets does NOT do this on its own. mcp lists base/assets only as devDependencies, and
 * @changesets/assemble-release-plan resolves a devDependency-only dependent to `none` — even with
 * `updateInternalDependents: "always"`. (Observed: the #861 and #863 version PRs bumped base but
 * left mcp unpublished.)
 *
 * So right before `changeset version` consumes the pending changesets, this script adds an
 * `@shoplflow/mcp: patch` changeset whenever one of the packages the extractors read is being
 * released and no pending changeset mentions mcp yet. The coupling is one-way on purpose: an
 * mcp-only change never forces a base release (which a changesets `fixed` group would).
 *
 * Escape hatch: list `"@shoplflow/mcp": none` in any pending changeset to skip the republish.
 *
 * Wired into the root `version` script, which both CI release paths run (`pnpm run version`).
 * Run: pnpm --filter @shoplflow/mcp ensure:changeset
 */
const fs = require("fs");
const path = require("path");

const PKG_DIR = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(PKG_DIR, "../..");
const PKG_NAME = "@shoplflow/mcp";
const CHANGESET_FILE = path.join(
  REPO_ROOT,
  ".changeset",
  "mcp-metadata-sync.md",
);

// The workspace packages whose sources the extractors read (see generate-metadata.cjs).
// check-release-wiring.cjs imports this list, so it is the single source of truth.
const SOURCE_PACKAGES = [
  "@shoplflow/base",
  "@shoplflow/shopl-assets",
  "@shoplflow/hada-assets",
];

/**
 * Decides whether mcp needs a changeset. Pure, so the decision is testable on its own.
 * Triggers on the pending changesets themselves, not on the computed release plan: a base bump
 * caused only by a utils change leaves base/src untouched, so the metadata would be identical.
 */
function planMcpChangeset({ changesets, releases }) {
  const released = (name) =>
    changesets.some((cs) =>
      cs.releases.some((r) => r.name === name && r.type !== "none"),
    );

  if (changesets.some((cs) => cs.releases.some((r) => r.name === PKG_NAME))) {
    return { skip: `a pending changeset already lists ${PKG_NAME}` };
  }
  const sources = SOURCE_PACKAGES.filter(released);
  if (!sources.length) {
    return {
      skip: `no pending changeset releases ${SOURCE_PACKAGES.join(", ")}`,
    };
  }

  const base = releases.find(
    (r) => r.name === "@shoplflow/base" && r.type !== "none",
  );
  const basis = base ? `\`@shoplflow/base@${base.newVersion}\` 기준으로 ` : "";
  const summary = [
    `${basis}디자인 시스템 메타데이터(토큰·컴포넌트·아이콘·사용 예제)를 재생성해 재배포합니다.`,
    "",
    `- 반영된 패키지: ${sources.map((s) => `\`${s}\``).join(", ")}`,
    "- base 릴리즈 시 자동 생성되는 changeset입니다 (`packages/mcp/scripts/ensure-release-changeset.cjs`).",
  ].join("\n");

  return { content: `---\n"${PKG_NAME}": patch\n---\n\n${summary}\n` };
}

async function main() {
  const getReleasePlan = require("@changesets/get-release-plan").default;
  const plan = planMcpChangeset(await getReleasePlan(REPO_ROOT));

  if (plan.skip) {
    console.log(`· ${PKG_NAME} changeset not added: ${plan.skip}`);
    return;
  }
  fs.writeFileSync(CHANGESET_FILE, plan.content);
  console.log(
    `✓ added ${path.relative(REPO_ROOT, CHANGESET_FILE)} — ${PKG_NAME} will be republished with fresh metadata`,
  );
}

module.exports = { SOURCE_PACKAGES, planMcpChangeset };

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
