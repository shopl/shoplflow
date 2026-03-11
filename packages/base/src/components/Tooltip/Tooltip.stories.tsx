import type { Meta, StoryObj } from '@storybook/react-vite';
import Tooltip from './Tooltip';
import { Stack } from '../Stack';
import { ComponentStage } from '../../styles/Box';
import { Text } from '../Text';

const meta = {
  title: 'COMPONENTS/Tooltip',
  component: Tooltip,
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
