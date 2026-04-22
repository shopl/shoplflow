/**
 * *.stories.tsx에 COMPONENT_CHANGELOG + Docs parameters 삽입 (buildComponentDocsMarkdown 없을 때만).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const CHANGELOG = `/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

`;

const IMPORT =
  "import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';\n";

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name === 'dist') continue;
      walk(p, acc);
    } else if (e.name.endsWith('.stories.tsx')) acc.push(p);
  }
  return acc;
}

function lastImportInsertIndex(content) {
  const lines = content.split('\n');
  let lastImport = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('import ')) lastImport = i;
  }
  if (lastImport < 0) return 0;
  let end = lines.slice(0, lastImport + 1).join('\n').length;
  if (content[end] === '\n') end++;
  return end;
}

function summaryFromContent(content) {
  const m = content.match(/title:\s*['"]([^'"]+)['"]/);
  if (!m) return '컴포넌트입니다.';
  const parts = m[1].split('/').filter(Boolean);
  return `${parts[parts.length - 1]} 컴포넌트입니다.`;
}

function paramsBlock(summary) {
  return `  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: ${JSON.stringify(summary)},
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
`;
}

function inject(content, summary) {
  if (!content.includes("from '@shoplflow/utils'")) {
    const pos = lastImportInsertIndex(content);
    content = content.slice(0, pos) + IMPORT + content.slice(pos);
  } else if (!content.includes('buildComponentDocsMarkdown')) {
    content = content.replace(
      /import\s*\{([^}]*)\}\s*from\s*['"]@shoplflow\/utils['"]/,
      (full, inner) => {
        const names = inner
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
        const merged = [...names, 'buildComponentDocsMarkdown', 'getLatestComponentVersion', 'type ComponentChangelogEntry'];
        return `import { ${merged.join(', ')} } from '@shoplflow/utils'`;
      },
    );
  }

  if (!content.includes('COMPONENT_CHANGELOG')) {
    const metaIdx = content.search(/\n(?:const meta\b|export default \{)/);
    if (metaIdx === -1) return null;
    content = content.slice(0, metaIdx + 1) + '\n' + CHANGELOG + content.slice(metaIdx + 1);
  }

  const pb = paramsBlock(summary);

  const tryReplace = (re, replacement) => {
    if (!re.test(content)) return false;
    content = content.replace(re, replacement);
    return true;
  };

  if (/\n  component:\s*[^,\n]+,\n\s*parameters:/.test(content)) {
    return null;
  }

  if (
    tryReplace(
      /(\n  component:\s*[^,\n]+,)\n(\s*argTypes:)/,
      (_, c, rest) => `${c}\n${pb}${rest}`,
    )
  ) {
    return content;
  }
  if (
    tryReplace(
      /(\n  component:\s*[^,\n]+,)\n(\s*args:)/,
      (_, c, rest) => `${c}\n${pb}${rest}`,
    )
  ) {
    return content;
  }
  if (
    tryReplace(
      /(\n  component:\s*[^,\n]+,)\n(\}\s*satisfies)/,
      (_, c, rest) => `${c}\n${pb}${rest}`,
    )
  ) {
    return content;
  }

  return null;
}

function processFile(fp) {
  let content = fs.readFileSync(fp, 'utf8');
  if (content.includes('buildComponentDocsMarkdown(')) {
    return { fp, ok: true, note: 'skip' };
  }

  const summary = summaryFromContent(content);
  const next = inject(content, summary);
  if (!next) {
    return { fp, ok: false, note: 'no pattern' };
  }
  fs.writeFileSync(fp, next, 'utf8');
  return { fp, ok: true, note: 'written' };
}

const files = walk(path.join(root, 'packages/base/src')).concat(walk(path.join(root, 'packages/templates/src')));
const out = files.map(processFile);
const failed = out.filter((x) => !x.ok);
console.log(
  'written',
  out.filter((x) => x.note === 'written').length,
  'skipped',
  out.filter((x) => x.note === 'skip').length,
  'failed',
  failed.length,
);
failed.forEach((x) => console.error('FAIL', x.fp));
