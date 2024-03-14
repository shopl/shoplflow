import type { Meta, StoryFn } from '@storybook/react';

import { Box, ComponentStage } from '../../styles/Box';
import { MotionStack, Stack } from './Stack';
import type { StackContainerProps } from './Stack.types';

const meta: Meta = {
  title: 'COMPONENTS/StackContainer',
  component: Stack,
};

export default meta;

const TEST_ID = 'stack';

export const Primary: StoryFn<StackContainerProps> = (args) => (
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

export const Horizontal: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <Stack.Horizontal {...args} width={'fit-content'}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </Stack.Horizontal>
  </ComponentStage>
);

export const Vertical: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <Stack.Vertical {...args} width={'fit-content'}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </Stack.Vertical>
  </ComponentStage>
);

export const Motion: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <MotionStack {...args} width={'fit-content'}>
      <Box background={'primary100'} layoutId={'1'} />
      <Box background={'primary100'} layoutId={'2'} />
      <Box background={'primary100'} layoutId={'3'} />
      <Box background={'primary100'} layoutId={'4'} />
    </MotionStack>
  </ComponentStage>
);
