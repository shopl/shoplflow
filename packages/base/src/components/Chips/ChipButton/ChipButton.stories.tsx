import type { Meta, StoryObj } from '@storybook/react-vite';
import ChipButton from './ChipButton';
import { Stack } from '../../Stack';
import { ChipButtonSizeVariants, ChipButtonStyleVariants } from './ChipButton.types';
import { ComponentStage } from '../../../styles/Box';

const meta = {
  title: 'COMPONENTS/Chips/ChipButton',
  component: ChipButton,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '칩 버튼에 표시할 텍스트를 설정합니다.',
      defaultValue: 'ChipButton',
    },
    onClick: {
      action: 'clicked',
      description: '칩 버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
    },
    styleVar: {
      options: Object.values(ChipButtonStyleVariants),
      control: { type: 'select' },
      description: '칩 버튼 스타일을 설정합니다. styleVar에 따라 기준 속성이 변경됩니다.',
      defaultValue: ChipButtonStyleVariants.LINE,
    },
    sizeVar: {
      options: Object.values(ChipButtonSizeVariants),
      control: { type: 'select' },
      description: '칩 버튼 사이즈를 설정합니다.',
      defaultValue: ChipButtonSizeVariants.S,
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부를 설정합니다.',
      defaultValue: false,
    },
    isSelected: {
      control: { type: 'boolean' },
      description: '선택(pressed) 상태 스타일을 적용합니다.',
      defaultValue: false,
    },
    selectedBackground: {
      control: { type: 'text' },
      description: '선택 상태 배경색 토큰(예: ocean100). 미설정 시 사이즈별 기본값.',
    },
    selectedBorderColor: {
      control: { type: 'text' },
      description: '선택 상태 테두리 색 토큰(예: ocean300). 미설정 시 neutral300.',
    },
  },
} satisfies Meta<typeof ChipButton>;

export default meta;

type Story = StoryObj<typeof ChipButton>;

const WithStage = ({ children }: { children: React.ReactNode }) => (
  <Stack width='200px'>
    <ComponentStage>{children}</ComponentStage>
  </Stack>
);

export const Playground: Story = {
  args: {
    text: '샤플플로우',
    disabled: false,
    styleVar: 'LINE',
    sizeVar: 'S',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=14505-5698&m=dev',
    },
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};

export const Line: Story = {
  args: {
    text: 'LINE',
    styleVar: 'LINE',
    sizeVar: 'S',
    disabled: false,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};

export const SizeXS: Story = {
  args: {
    text: 'Size XS',
    styleVar: 'LINE',
    sizeVar: 'XS',
    disabled: false,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    styleVar: 'LINE',
    sizeVar: 'S',
    disabled: true,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};

export const Selected: Story = {
  args: {
    text: '선택됨',
    styleVar: 'LINE',
    sizeVar: 'S',
    isSelected: true,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};

export const SelectedXS: Story = {
  args: {
    text: '선택 XS',
    styleVar: 'LINE',
    sizeVar: 'XS',
    isSelected: true,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};

export const SelectedCustomColors: Story = {
  args: {
    text: '커스텀 선택',
    styleVar: 'LINE',
    sizeVar: 'S',
    isSelected: true,
    selectedBackground: 'ocean100',
    selectedBorderColor: 'ocean300',
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...args} />
    </WithStage>
  ),
};
