/**
 * Generates the design-system metadata that the MCP server serves.
 *
 * Single source of truth: the same `tokens.json` (Tokens Studio export) that drives
 * `tokens.ts` + `global.css`. This generator mirrors the interpretation in
 * `packages/base/scripts/seperate-tokens.cjs` so the served metadata never drifts from
 * what actually ships:
 *
 *   - `shoplflow` root .... shared tokens (palette, spacing, radius, fontWeight, shadow)
 *   - `shopl` / `hada` ..... per-brand tokens (typography classes + primary/semantic colors,
 *                            whose color values may alias the shared palette via `{group.name}`)
 *   - `$themes` / `$metadata` .... Tokens Studio bookkeeping, ignored
 *
 * Run as a build step (see `build:package`). Phase 2 (icons) and Phase 3 (component APIs)
 * add sibling `*.generated.json` files following the same read -> normalize -> write pattern.
 */
const fs = require('fs');
const path = require('path');

const TOKENS_JSON = path.resolve(__dirname, '../../base/src/styles/tokens.json');
const OUT_DIR = path.resolve(__dirname, '../src/data');
const OUT_FILE = path.join(OUT_DIR, 'tokens.generated.json');

const BRANDS = ['shopl', 'hada'];

/** A node is a token leaf when it carries both a `value` and a string `type`. */
function isLeaf(node) {
  return node && typeof node === 'object' && 'value' in node && typeof node.type === 'string';
}

function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

/** Build a `{ tokenName -> hex }` lookup of literal shared colors, for resolving brand aliases. */
function collectLiteralColors(node, out) {
  for (const [key, child] of Object.entries(node)) {
    if (isLeaf(child)) {
      if (child.type === 'color' && typeof child.value === 'string' && !child.value.startsWith('{')) {
        out[key] = child.value;
      }
    } else if (child && typeof child === 'object') {
      collectLiteralColors(child, out);
    }
  }
  return out;
}

/** Resolve a Tokens Studio alias like `{coolgray.coolgray300}` to its literal hex, if known. */
function resolveColor(value, literalColors) {
  if (typeof value === 'string' && value.startsWith('{')) {
    const ref = value.replace(/^\{|\}$/g, '');
    const leaf = ref.split('.').pop();
    return literalColors[leaf] ?? value;
  }
  return value;
}

/** Normalize one leaf into the served token record, adding type-specific usage hints. */
function toRecord(name, leaf, domain, pathStr, literalColors) {
  const base = { name, type: leaf.type, domain, path: pathStr, cssVar: null, className: null };
  switch (leaf.type) {
    case 'color':
      return { ...base, value: resolveColor(leaf.value, literalColors), cssVar: `--${name}` };
    case 'spacing':
      return { ...base, value: `${leaf.value}px`, cssVar: `--${name}` };
    case 'borderRadius':
      return { ...base, value: `${leaf.value}px`, cssVar: `--${toKebabCase(name)}` };
    case 'fontWeights':
      return { ...base, value: String(leaf.value), cssVar: `--font-weight-${name}` };
    case 'typography':
      // Applied as a CSS class / the `typography` prop (e.g. <Text typography="body1_700" />).
      return { ...base, value: leaf.value, className: `.${name}` };
    case 'boxShadow':
    case 'dropShadow': {
      const v = leaf.value;
      const display =
        v && typeof v === 'object'
          ? `${v.x}px ${v.y}px ${v.blur}px ${v.spread}px ${v.color}`.trim()
          : String(v);
      return { ...base, value: display };
    }
    default:
      return { ...base, value: leaf.value };
  }
}

/** Walk a root, emitting records. `skip` excludes nested keys (the brand subtrees under shoplflow). */
function walk(node, domain, literalColors, acc, pathParts = [], skip = new Set()) {
  for (const [key, child] of Object.entries(node)) {
    if (pathParts.length === 0 && skip.has(key)) continue;
    const nextPath = [...pathParts, key];
    if (isLeaf(child)) {
      acc.push(toRecord(key, child, domain, nextPath.join('.'), literalColors));
    } else if (child && typeof child === 'object') {
      walk(child, domain, literalColors, acc, nextPath, skip);
    }
  }
}

const raw = JSON.parse(fs.readFileSync(TOKENS_JSON, 'utf8'));
const literalColors = collectLiteralColors(raw.shoplflow ?? {}, {});

const tokens = [];
// Shared tokens: walk shoplflow, but skip the nested brand subtrees (the top-level roots are canonical).
walk(raw.shoplflow ?? {}, 'shared', literalColors, tokens, [], new Set(BRANDS));
// Brand tokens: typography + primary/semantic colors.
for (const brand of BRANDS) {
  if (raw[brand]) walk(raw[brand], brand, literalColors, tokens, [], new Set());
}

const countByType = {};
const countByDomain = {};
for (const t of tokens) {
  countByType[t.type] = (countByType[t.type] ?? 0) + 1;
  countByDomain[t.domain] = (countByDomain[t.domain] ?? 0) + 1;
}

const catalog = {
  source: 'packages/base/src/styles/tokens.json',
  domains: ['shared', ...BRANDS],
  count: tokens.length,
  countByType,
  countByDomain,
  tokens,
};

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(catalog, null, 2) + '\n');

console.log(
  `✓ tokens: ${tokens.length} | by type: ${Object.entries(countByType)
    .map(([t, n]) => `${t} ${n}`)
    .join(', ')} | by domain: ${Object.entries(countByDomain)
    .map(([d, n]) => `${d} ${n}`)
    .join(', ')} -> ${path.relative(process.cwd(), OUT_FILE)}`,
);
