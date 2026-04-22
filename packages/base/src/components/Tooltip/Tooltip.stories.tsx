import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from './Tooltip';
import { Stack } from '../Stack';
import { ComponentStage } from '../../styles/Box';
import { Text } from '../Text';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Tooltip',
  component: Tooltip,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Tooltip 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    trigger: <Text typography='body1_400'>호버 해보세요</Text>,
    popper: (
      <Tooltip.Content content='안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~' />
    ),
    placement: 'bottom-start',
  },
  render: ({ trigger, popper, ...args }) => (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage justify={'start'}>
        <Tooltip trigger={trigger} popper={popper} {...args} />
      </ComponentStage>
    </Stack.Horizontal>
  ),
};
