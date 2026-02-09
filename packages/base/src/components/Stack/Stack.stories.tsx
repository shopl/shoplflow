import type { Meta, StoryFn } from '@storybook/react-vite';

import { Box, ComponentStage } from '../../styles/Box';
import { MotionStack, Stack } from './Stack';
import type { StackProps } from './Stack.types';

const meta: Meta = {
  title: 'COMPONENTS/Stack',
  component: Stack,
};

export default meta;

const TEST_ID = 'stack';

export const Primary: StoryFn<StackProps> = (args) => (
  <ComponentStage>
    <Stack {...args} width={'fit-content'} data-testid={TEST_ID}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </Stack>
  </ComponentStage>
);

// Primary.play = async ({ canvasElement }) => {
//   await userEvent.setup({
//     applyAccept: true,
//   });
// };

export const Horizontal: StoryFn<StackProps> = (args) => (
  <ComponentStage>
    <Stack.Horizontal {...args} width={'fit-content'}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </Stack.Horizontal>
  </ComponentStage>
);

export const Vertical: StoryFn<StackProps> = (args) => (
  <ComponentStage>
    <Stack.Vertical {...args} width={'fit-content'}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </Stack.Vertical>
  </ComponentStage>
);

export const Motion: StoryFn<StackProps> = (args) => (
  <ComponentStage>
    <MotionStack {...args} width={'fit-content'}>
      <Box background={'primary100'} layoutId={'1'} />
      <Box background={'primary100'} layoutId={'2'} />
      <Box background={'primary100'} layoutId={'3'} />
      <Box background={'primary100'} layoutId={'4'} />
    </MotionStack>
  </ComponentStage>
);
