import type { Meta, StoryObj } from '@storybook/react-vite';
import MinusButton from './MinusButton';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { colorTokens } from '../../../styles';

const meta = {
  title: 'COMPONENTS/ControlButtons/MinusButton',
  component: MinusButton,
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
