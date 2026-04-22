import { Table } from './components';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

export default {
  title: 'Components/Table/SubComponents/TableToolbar',
  component: Table.Toolbar,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'TableToolbar 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    filterAccessor: {
      control: 'text',
      description: '필터링 기준 accessor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      description: '렌더 함수 (props: { totalCount, filterAccessor, onSearch, filterValue })',
      table: {
        type: { summary: '(props) => ReactNode' },
      },
      control: false,
    },
  },
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.Toolbar {...args} />
  </Table>
);
