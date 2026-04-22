/**
 * Storybook Docs 탭에 표시할 컴포넌트 설명·버전·Changelog 마크다운을 만듭니다.
 * 최신 항목이 changelog 배열의 앞에 오도록 정렬합니다.
 */
export type ComponentChangelogEntry = {
  version: string;
  date: string;
  changes: string[];
};

export function getLatestComponentVersion(changelog: ComponentChangelogEntry[]): string | undefined {
  return changelog[0]?.version;
}

export function buildComponentDocsMarkdown(options: { summary: string; changelog: ComponentChangelogEntry[] }): string {
  const { summary, changelog } = options;
  const latest = getLatestComponentVersion(changelog);
  const versionLine = latest !== undefined ? `**Version:** \`${latest}\`` : '**Version:** —';

  return [
    versionLine,
    '',
    summary,
    '',
    '### Changelog',
    ...changelog.flatMap(({ version, date, changes }) => [
      `- **${version}** (${date})`,
      ...changes.map((c) => `  - ${c}`),
    ]),
  ].join('\n');
}
