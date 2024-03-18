import type { Meta, StoryFn } from '@storybook/react';

import { Box, ComponentStage } from '../../styles/Box';
import { MotionStackContainer, StackContainer } from './StackContainer';
import type { StackContainerProps } from './StackContainer.types';

const meta: Meta = {
  title: 'COMPONENTS/StackContainer',
  component: StackContainer,
};

export default meta;

const TEST_ID = 'stack';

export const Primary: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <StackContainer {...args} width={'fit-content'} data-testid={TEST_ID}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </StackContainer>
  </ComponentStage>
);

// Primary.play = async ({ canvasElement }) => {
//   await userEvent.setup({
//     applyAccept: true,
//   });
// };

export const Horizontal: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <StackContainer.Horizontal {...args} width={'fit-content'}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </StackContainer.Horizontal>
  </ComponentStage>
);

export const Vertical: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <StackContainer.Vertical {...args} width={'fit-content'}>
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
      <Box background={'primary100'} />
    </StackContainer.Vertical>
  </ComponentStage>
);

export const Motion: StoryFn<StackContainerProps> = (args) => (
  <ComponentStage>
    <MotionStackContainer {...args} width={'fit-content'}>
      <Box background={'primary100'} layoutId={'1'} />
      <Box background={'primary100'} layoutId={'2'} />
      <Box background={'primary100'} layoutId={'3'} />
      <Box background={'primary100'} layoutId={'4'} />
    </MotionStackContainer>
  </ComponentStage>
);
