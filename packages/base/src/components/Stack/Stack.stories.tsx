import type { Meta, StoryFn } from '@storybook/react';

import { Box } from '../../styles/Box';
import { MotionStack, Stack } from './Stack';
import type { StackProps } from './Stack.types';

export default {
  title: 'COMPONENTS/Stack',
  component: Stack,
} as Meta;

const TEST_ID = 'stack';

export const Primary: StoryFn<StackProps> = (args) => (
  <Stack {...args} width={'fit-content'} data-testid={TEST_ID}>
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
  </Stack>
);

// Primary.play = async ({ canvasElement }) => {
//   await userEvent.setup({
//     applyAccept: true,
//   });
// };

export const Horizontal: StoryFn<StackProps> = (args) => (
  <Stack.Horizontal {...args} width={'fit-content'}>
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
  </Stack.Horizontal>
);

export const Vertical: StoryFn<StackProps> = (args) => (
  <Stack.Vertical {...args} width={'fit-content'}>
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
  </Stack.Vertical>
);

export const Motion: StoryFn<StackProps> = (args) => (
  <>
    <MotionStack {...args} width={'fit-content'}>
      <Box background={'primary100'} layoutId={'1'} />
      <Box background={'primary100'} layoutId={'2'} />
      <Box background={'primary100'} layoutId={'3'} />
      <Box background={'primary100'} layoutId={'4'} />
    </MotionStack>
  </>
);
