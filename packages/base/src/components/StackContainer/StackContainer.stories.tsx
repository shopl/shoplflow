import type { Meta, StoryObj } from '@storybook/react-vite';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

import { Box, ComponentStage } from '../../styles/Box';
import { MotionStackContainer, StackContainer } from './StackContainer';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta: Meta<typeof StackContainer> = {
  title: 'COMPONENTS/StackContainer',
  component: StackContainer,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'StackContainer 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const TEST_ID = 'stack';

export const Primary: Story = {
  render: (args) => (
    <ComponentStage>
      <StackContainer {...args} width={'fit-content'} data-testid={TEST_ID}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </StackContainer>
    </ComponentStage>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <ComponentStage>
      <StackContainer.Horizontal {...args} width={'fit-content'}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </StackContainer.Horizontal>
    </ComponentStage>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <ComponentStage>
      <StackContainer.Vertical {...args} width={'fit-content'}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </StackContainer.Vertical>
    </ComponentStage>
  ),
};

export const Motion: Story = {
  render: (args) => (
    <ComponentStage>
      <MotionStackContainer {...args} width={'fit-content'}>
        <Box background={'primary100'} layoutId={'1'} />
        <Box background={'primary100'} layoutId={'2'} />
        <Box background={'primary100'} layoutId={'3'} />
        <Box background={'primary100'} layoutId={'4'} />
      </MotionStackContainer>
    </ComponentStage>
  ),
};
