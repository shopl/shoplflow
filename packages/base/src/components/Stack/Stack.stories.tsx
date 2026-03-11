import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box, ComponentStage } from '../../styles/Box';
import { MotionStack, Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'COMPONENTS/Stack',
  component: Stack,
};

export default meta;

type Story = StoryObj<typeof meta>;

const TEST_ID = 'stack';

export const Primary: Story = {
  render: (args) => (
    <ComponentStage>
      <Stack {...args} width={'fit-content'} data-testid={TEST_ID}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </Stack>
    </ComponentStage>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <ComponentStage>
      <Stack.Horizontal {...args} width={'fit-content'}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </Stack.Horizontal>
    </ComponentStage>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <ComponentStage>
      <Stack.Vertical {...args} width={'fit-content'}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </Stack.Vertical>
    </ComponentStage>
  ),
};

export const Motion: Story = {
  render: (args) => (
    <ComponentStage>
      <MotionStack {...args} width={'fit-content'}>
        <Box background={'primary100'} layoutId={'1'} />
        <Box background={'primary100'} layoutId={'2'} />
        <Box background={'primary100'} layoutId={'3'} />
        <Box background={'primary100'} layoutId={'4'} />
      </MotionStack>
    </ComponentStage>
  ),
};
