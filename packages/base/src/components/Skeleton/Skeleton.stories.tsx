import type React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import Skeleton from '../Skeleton/Skeleton';
import { Stack } from '../Stack';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Skeleton',
  component: Skeleton,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Skeleton 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    styleVar: {
      options: ['circle', 'rectangle'],
      control: { type: 'select' },
      description: '스켈레톤 형태(원/사각형)를 설정합니다.',
      defaultValue: 'rectangle',
    },
    width: {
      control: { type: 'text' },
      description: '스켈레톤 너비를 설정합니다.',
      defaultValue: '40px',
    },
    height: {
      control: { type: 'text' },
      description: '스켈레톤 높이를 설정합니다.',
      defaultValue: '40px',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

const WithStack = ({ children }: { children: React.ReactNode }) => (
  <Stack minWidth='100px' minHeight='100px'>
    {children}
  </Stack>
);

export const Playground: Story = {
  args: {
    styleVar: 'rectangle',
    width: '40px',
    height: '40px',
  },
  render: (args) => (
    <WithStack>
      <Skeleton {...args} />
    </WithStack>
  ),
};

export const Circle: Story = {
  args: {
    styleVar: 'circle',
    width: '48px',
    height: '48px',
  },
  render: (args) => (
    <WithStack>
      <Skeleton {...args} />
    </WithStack>
  ),
};

export const Rectangle: Story = {
  args: {
    styleVar: 'rectangle',
    width: '200px',
    height: '24px',
  },
  render: (args) => (
    <WithStack>
      <Skeleton {...args} />
    </WithStack>
  ),
};
