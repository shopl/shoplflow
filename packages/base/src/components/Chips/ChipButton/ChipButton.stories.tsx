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
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-5279&p=f&m=dev',
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
