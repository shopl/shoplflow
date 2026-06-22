import type { Meta, StoryObj } from '@storybook/react-vite';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

import { colorTokens } from '../../styles';
import { ComponentStage } from '../../styles/Box';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { Divider } from './Divider';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  {
    version: '1.1',
    date: '2026-06-22',
    changes: ['isFull prop 추가 (direction 방향으로 부모 영역 채움, align-self: stretch)'],
  },
  { version: '1.0', date: '2026-06-22', changes: ['Divider 컴포넌트 추가'] },
];

const meta: Meta<typeof Divider> = {
  title: 'COMPONENTS/Divider',
  component: Divider,
  args: {
    direction: 'row',
    color: colorTokens.neutral200,
    length: '100%',
    thickness: '1px',
    isFull: false,
  },
  argTypes: {
    direction: {
      control: 'inline-radio',
      options: ['row', 'column'],
      description: 'row: 가로 구분선, column: 세로 구분선',
    },
    color: {
      control: 'color',
      description: 'CSS color 값을 그대로 사용합니다.',
    },
    length: {
      control: 'text',
      description: '구분선이 뻗어나가는 길이 (row → width, column → height)',
    },
    thickness: {
      control: 'text',
      description: '구분선의 두께 (row → height, column → width)',
    },
    isFull: {
      control: 'boolean',
      description: 'true이면 direction 방향으로 부모 가용 영역을 가득 채웁니다 (align-self: stretch). length보다 우선.',
    },
  },
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary:
            'Divider 컴포넌트입니다. direction(row/column)에 따라 가로·세로 구분선을 그리며, color/length/thickness로 외형을 조절합니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const TEST_ID = 'divider';

export const Playground: Story = {
  render: (args) => (
    <ComponentStage>
      {args.direction === 'column' ? (
        <Stack.Horizontal height={'80px'} align={'stretch'} width={'fit-content'}>
          <Text>왼쪽</Text>
          <Divider {...args} data-testid={TEST_ID} />
          <Text>오른쪽</Text>
        </Stack.Horizontal>
      ) : (
        <Stack.Vertical width={'240px'} spacing={'spacing12'}>
          <Text>위쪽</Text>
          <Divider {...args} data-testid={TEST_ID} />
          <Text>아래쪽</Text>
        </Stack.Vertical>
      )}
    </ComponentStage>
  ),
};

/**
 * 가로 구분선입니다. length가 width, thickness가 height에 적용됩니다.
 */
export const Row: Story = {
  args: { direction: 'row' },
  render: (args) => (
    <ComponentStage>
      <Stack.Vertical width={'240px'} spacing={'spacing12'}>
        <Text>위쪽 콘텐츠</Text>
        <Divider {...args} />
        <Text>아래쪽 콘텐츠</Text>
      </Stack.Vertical>
    </ComponentStage>
  ),
};

/**
 * 세로 구분선입니다. length가 height, thickness가 width에 적용됩니다.
 */
export const Column: Story = {
  args: { direction: 'column', length: '14px' },
  render: (args) => (
    <ComponentStage>
      <Stack.Horizontal align={'center'} spacing={'spacing12'} width={'fit-content'}>
        <Text>왼쪽</Text>
        <Divider {...args} />
        <Text>가운데</Text>
        <Divider {...args} />
        <Text>오른쪽</Text>
      </Stack.Horizontal>
    </ComponentStage>
  ),
};

/**
 * isFull이 true이면 length를 지정하지 않아도 direction 방향으로 부모의 가용 영역을 가득 채웁니다 (align-self: stretch).
 * (왼쪽: 부모 너비를 채우는 가로 구분선 / 오른쪽: 부모 높이를 채우는 세로 구분선)
 */
export const IsFull: Story = {
  render: () => (
    <ComponentStage>
      <Stack.Horizontal width={'320px'} height={'120px'} spacing={'spacing24'} align={'stretch'}>
        <Stack.Vertical flex={'1'} spacing={'spacing12'} justify={'center'}>
          <Text>위쪽 콘텐츠</Text>
          <Divider direction={'row'} isFull />
          <Text>아래쪽 콘텐츠</Text>
        </Stack.Vertical>
        <Divider direction={'column'} isFull />
        <Stack.Vertical flex={'1'} justify={'center'}>
          <Text>세로 구분선이 부모 높이를 가득 채웁니다.</Text>
        </Stack.Vertical>
      </Stack.Horizontal>
    </ComponentStage>
  ),
};

/**
 * color 값을 바꿔 다양한 색상의 구분선을 표현할 수 있습니다.
 */
export const Colors: Story = {
  render: () => (
    <ComponentStage>
      <Stack.Vertical width={'240px'} spacing={'spacing16'}>
        <Divider color={colorTokens.neutral200} />
        <Divider color={colorTokens.neutral300} />
        <Divider color={colorTokens.primary300} thickness={'2px'} />
        <Divider color={colorTokens.red300} thickness={'2px'} />
      </Stack.Vertical>
    </ComponentStage>
  ),
};
