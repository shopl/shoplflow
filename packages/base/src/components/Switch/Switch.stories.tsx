import type { Meta, StoryObj } from '@storybook/react-vite';
import Switch from './Switch';
import { ComponentStage } from '../../styles/Box';
import { Stack } from '../Stack';
import { colorTokens } from '../../styles';

const meta = {
  title: 'COMPONENTS/Switch',
  component: Switch,
  argTypes: {
    sizeVar: {
      options: ['S', 'M'],
      control: { type: 'radio' },
      description: '스위치 크기를 설정합니다.',
      defaultValue: 'M',
    },
    activeColor: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      description: '활성 상태 색상을 설정합니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부를 설정합니다.',
      defaultValue: false,
    },
    onClick: {
      action: 'clicked',
      description: '스위치를 클릭했을 때 실행되는 동작을 설정합니다.',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

const WithStage = ({ children }: { children: React.ReactNode }) => (
  <Stack width='100px' align='center'>
    <ComponentStage>{children}</ComponentStage>
  </Stack>
);

export const Playground: Story = {
  args: {
    sizeVar: 'M',
    disabled: false,
  },
  render: (args) => (
    <WithStage>
      <Switch {...args} />
    </WithStage>
  ),
};

export const SmallSize: Story = {
  args: {
    sizeVar: 'S',
    activeColor: 'neutral600',
  },
  render: (args) => (
    <WithStage>
      <Switch {...args} />
    </WithStage>
  ),
};

export const Disabled: Story = {
  args: {
    sizeVar: 'M',
    disabled: true,
  },
  render: (args) => (
    <WithStage>
      <Switch {...args} />
    </WithStage>
  ),
};
