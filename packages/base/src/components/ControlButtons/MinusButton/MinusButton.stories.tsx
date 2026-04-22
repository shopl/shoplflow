import type { Meta, StoryObj } from '@storybook/react-vite';
import MinusButton from './MinusButton';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { colorTokens } from '../../../styles';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/ControlButtons/MinusButton',
  component: MinusButton,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'MinusButton 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      description: '버튼의 배경색을 설정합니다.',
    },
  },
} satisfies Meta<typeof MinusButton>;

export default meta;

type Story = StoryObj<typeof MinusButton>;

const WithStage = ({ children }: { children: React.ReactNode }) => (
  <Stack>
    <ComponentStage>{children}</ComponentStage>
  </Stack>
);

export const Playground: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-3714',
    },
  },
  render: (args) => (
    <WithStage>
      <MinusButton {...args} />
    </WithStage>
  ),
};

export const Default: Story = {
  render: (args) => (
    <WithStage>
      <MinusButton {...args} />
    </WithStage>
  ),
};
