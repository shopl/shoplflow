import { TableBadge } from './components/TableElement';
import type { Meta, StoryObj } from '@storybook/react';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta: Meta<typeof TableBadge> = {
  title: 'Components/Table/TableElement/TableBadge',
  component: TableBadge,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: '테이블 내에서 사용되는 배지 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: '배지에 표시할 내용',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TableBadge>;

export const 기본_배지: Story = {
  args: {
    children: '새로운',
  },
};

export const 상태_배지: Story = {
  args: {
    children: '완료',
  },
};

export const 숫자_배지: Story = {
  args: {
    children: '99+',
  },
};
