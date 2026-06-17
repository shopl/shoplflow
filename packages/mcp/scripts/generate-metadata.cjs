/**
 * Generates the design-system metadata that the MCP server serves.
 *
 * Single source of truth: the same files that build the shipped library. Each builder reads a
 * source, normalizes it, and writes a sibling `src/data/*.generated.json`. Running this as a build
 * step (see `build:package`) makes drift between the served metadata and the code impossible.
 *
 *   buildTokens()  <- packages/base/src/styles/tokens.json        -> tokens.generated.json
 *   buildIcons()   <- packages/{shopl,hada}-assets .../generated  -> icons.generated.json
 *
 * Phase 3 (component APIs from *.types.ts) adds another builder here following the same shape.
 */
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.resolve(__dirname, '../src/data');

function writeJson(file, data) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, file), JSON.stringify(data, null, 2) + '\n');
}

/* ── Tokens ─────────────────────────────────────────────────────────────────
 * tokens.json is a Tokens Studio export. We mirror packages/base/scripts/seperate-tokens.cjs:
 *   - `shoplflow` root .... shared palette, spacing, radius, fontWeight, shadow
 *   - `shopl` / `hada` ..... per-brand typography classes + primary/semantic colors
 *                            (color values may alias the shared palette via `{group.name}`)
 *   - `$themes` / `$metadata` .... ignored
 */
const TOKENS_JSON = path.resolve(__dirname, '../../base/src/styles/tokens.json');
const BRANDS = ['shopl', 'hada'];

function isLeaf(node) {
  return node && typeof node === 'object' && 'value' in node && typeof node.type === 'string';
}

function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

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

function resolveColor(value, literalColors) {
  if (typeof value === 'string' && value.startsWith('{')) {
    const ref = value.replace(/^\{|\}$/g, '');
    const leaf = ref.split('.').pop();
    return literalColors[leaf] ?? value;
  }
  return value;
}

function toTokenRecord(name, leaf, domain, pathStr, literalColors) {
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
      // Applied via the `typography` prop / a CSS class (e.g. <Text typography="body1_700" />).
      return { ...base, value: leaf.value, className: `.${name}` };
    case 'boxShadow':
    case 'dropShadow': {
      const v = leaf.value;
      const display =
        v && typeof v === 'object' ? `${v.x}px ${v.y}px ${v.blur}px ${v.spread}px ${v.color}`.trim() : String(v);
      return { ...base, value: display };
    }
    default:
      return { ...base, value: leaf.value };
  }
}

function walkTokens(node, domain, literalColors, acc, pathParts = [], skip = new Set()) {
  for (const [key, child] of Object.entries(node)) {
    if (pathParts.length === 0 && skip.has(key)) continue;
    const nextPath = [...pathParts, key];
    if (isLeaf(child)) {
      acc.push(toTokenRecord(key, child, domain, nextPath.join('.'), literalColors));
    } else if (child && typeof child === 'object') {
      walkTokens(child, domain, literalColors, acc, nextPath, skip);
    }
  }
}

function buildTokens() {
  const raw = JSON.parse(fs.readFileSync(TOKENS_JSON, 'utf8'));
  const literalColors = collectLiteralColors(raw.shoplflow ?? {}, {});

  const tokens = [];
  walkTokens(raw.shoplflow ?? {}, 'shared', literalColors, tokens, [], new Set(BRANDS));
  for (const brand of BRANDS) {
    if (raw[brand]) walkTokens(raw[brand], brand, literalColors, tokens, [], new Set());
  }

  const countByType = {};
  const countByDomain = {};
  for (const t of tokens) {
    countByType[t.type] = (countByType[t.type] ?? 0) + 1;
    countByDomain[t.domain] = (countByDomain[t.domain] ?? 0) + 1;
  }

  writeJson('tokens.generated.json', {
    source: 'packages/base/src/styles/tokens.json',
    domains: ['shared', ...BRANDS],
    count: tokens.length,
    countByType,
    countByDomain,
    tokens,
  });
  return { count: tokens.length, countByType, countByDomain };
}

/* ── Icons ──────────────────────────────────────────────────────────────────
 * Each brand's `icons/generated/index.ts` barrel is the source of truth for public icon names.
 * Its `export { IcFoo as FooIcon, ... }` block gives both the raw name and the public alias;
 * both are importable, so we serve both and derive search keywords from the name.
 */
const ICON_SOURCES = [
  { domain: 'shopl', barrel: '../../shopl-assets/src/icons/generated/index.ts', importFrom: '@shoplflow/shopl-assets' },
  { domain: 'hada', barrel: '../../hada-assets/src/icons/generated/index.ts', importFrom: '@shoplflow/hada-assets' },
];

/** "IcAiChatBot" -> ["ai","chat","bot"]; "Subtract" -> ["subtract"]. Powers fuzzy icon search. */
function keywordsFromName(name) {
  const stripped = name.replace(/^Ic(?=[A-Z])/, '');
  const spaced = stripped.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2');
  return [...new Set(spaced.toLowerCase().split(/\s+/).filter(Boolean))];
}

function buildIcons() {
  const icons = [];
  for (const { domain, barrel, importFrom } of ICON_SOURCES) {
    const src = fs.readFileSync(path.resolve(__dirname, barrel), 'utf8');
    const start = src.indexOf('export {');
    const block = start >= 0 ? src.slice(start, src.indexOf('};', start)) : '';
    const re = /(\w+)\s+as\s+(\w+)/g;
    let m;
    while ((m = re.exec(block))) {
      const [, name, alias] = m;
      icons.push({ name, alias, domain, importFrom, keywords: keywordsFromName(name) });
    }
  }

  const countByDomain = {};
  for (const i of icons) countByDomain[i.domain] = (countByDomain[i.domain] ?? 0) + 1;

  writeJson('icons.generated.json', {
    source: ICON_SOURCES.map((s) => s.importFrom),
    domains: ICON_SOURCES.map((s) => s.domain),
    count: icons.length,
    countByDomain,
    icons,
  });
  return { count: icons.length, countByDomain };
}

const t = buildTokens();
console.log(
  `✓ tokens: ${t.count} | type: ${Object.entries(t.countByType)
    .map(([k, n]) => `${k} ${n}`)
    .join(', ')} | domain: ${Object.entries(t.countByDomain)
    .map(([k, n]) => `${k} ${n}`)
    .join(', ')}`,
);
const i = buildIcons();
console.log(
  `✓ icons: ${i.count} | domain: ${Object.entries(i.countByDomain)
    .map(([k, n]) => `${k} ${n}`)
    .join(', ')}`,
);
