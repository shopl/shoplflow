/**
 * Phase 5 builder: the setup & environment surface.
 *
 * Split by source of truth:
 *   - AUTO  (from code, never drifts): provider name/props, the global-style import specifiers,
 *           peer dependencies, the client-only signals.
 *   - CURATED (setup.curated.json, team-owned): setup steps, per-framework support/constraints,
 *           and the always-on server `instructions`.
 *
 * The two are merged into setup.generated.json. A ready-to-paste snippet is synthesized from the
 * auto facts so the example can never reference a wrong import or prop.
 */
const fs = require("fs");
const path = require("path");

const BASE = path.resolve(__dirname, "../../base");
const CURATED = path.resolve(__dirname, "../setup.curated.json");

const read = (p) => fs.readFileSync(p, "utf8");

function buildSetup() {
  const pkg = JSON.parse(read(path.join(BASE, "package.json")));
  const providerSrc = read(
    path.join(BASE, "src/providers/ShoplflowProvider.tsx"),
  );
  const domainSrc = read(path.join(BASE, "src/types/Domain.ts"));
  const curated = JSON.parse(read(CURATED));

  // Provider: name, the `domain` default, and the DomainType union values.
  const providerName =
    (providerSrc.match(/const\s+(\w+)\s*=/) || [])[1] || "ShoplflowProvider";
  const domainDefault =
    (providerSrc.match(/domain\s*=\s*['"]([A-Za-z]+)['"]/) || [])[1] || null;
  const domainValues = [...domainSrc.matchAll(/'([A-Za-z]+)'/g)].map(
    (m) => m[1],
  );

  // Global-style import specifiers from the package's CSS exports (e.g. `@shoplflow/base/styles`).
  const styles = [];
  for (const [key, target] of Object.entries(pkg.exports || {})) {
    const targetStr = typeof target === "string" ? target : "";
    if (!/\.css$/.test(targetStr)) continue;
    styles.push({
      specifier: `${pkg.name}${key.slice(1)}`,
      role:
        key === "./reset"
          ? "CSS reset (optional)"
          : "design-token CSS vars + typography classes (required)",
    });
  }

  // Why the provider/components are client-only (derived from the provider's own imports).
  const clientReasons = [];
  if (/framer-motion/.test(providerSrc))
    clientReasons.push("framer-motion (LazyMotion)");
  if (/Portal/.test(providerSrc)) clientReasons.push("Modal/Popper portals");
  if (/useDomain/.test(providerSrc))
    clientReasons.push("DOM theming hook (data-shoplflow)");
  clientReasons.push("Emotion CSS-in-JS");

  const provider = {
    name: providerName,
    importFrom: pkg.name,
    clientOnly: true,
    clientReasons,
    props: [
      {
        name: "domain",
        type: "DomainType",
        optional: true,
        default: domainDefault,
        values: domainValues,
      },
    ],
  };

  // Synthesize the canonical setup snippet from the auto facts (matches test-env/src/main.tsx).
  const requiredCss = styles.find((s) => /required/.test(s.role)) || styles[0];
  const snippet = [
    `import { ${providerName} } from '${pkg.name}';`,
    requiredCss ? `import '${requiredCss.specifier}';` : null,
    "",
    `<${providerName} domain="${domainDefault || "SHOPL"}">`,
    "  <App />",
    `</${providerName}>`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return {
    source: [
      "packages/base/package.json",
      "ShoplflowProvider.tsx",
      "Domain.ts",
      "setup.curated.json",
    ],
    provider,
    styles,
    peerDependencies: pkg.peerDependencies || {},
    setupSteps: curated.setupSteps,
    snippet,
    environments: curated.environments,
    instructions: curated.instructions,
  };
}

module.exports = { buildSetup };
