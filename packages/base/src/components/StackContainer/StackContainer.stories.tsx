import type { Meta, StoryObj } from '@storybook/react-vite';

import { Box, ComponentStage } from '../../styles/Box';
import { MotionStackContainer, StackContainer } from './StackContainer';

const meta: Meta<typeof StackContainer> = {
  title: 'COMPONENTS/StackContainer',
  component: StackContainer,
};

export default meta;

type Story = StoryObj<typeof meta>;

const TEST_ID = 'stack';

export const Primary: Story = {
  render: (args) => (
    <ComponentStage>
      <StackContainer {...args} width={'fit-content'} data-testid={TEST_ID}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </StackContainer>
    </ComponentStage>
  ),
};

export const Horizontal: Story = {
  render: (args) => (
    <ComponentStage>
      <StackContainer.Horizontal {...args} width={'fit-content'}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </StackContainer.Horizontal>
    </ComponentStage>
  ),
};

export const Vertical: Story = {
  render: (args) => (
    <ComponentStage>
      <StackContainer.Vertical {...args} width={'fit-content'}>
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
        <Box background={'primary100'} />
      </StackContainer.Vertical>
    </ComponentStage>
  ),
};

export const Motion: Story = {
  render: (args) => (
    <ComponentStage>
      <MotionStackContainer {...args} width={'fit-content'}>
        <Box background={'primary100'} layoutId={'1'} />
        <Box background={'primary100'} layoutId={'2'} />
        <Box background={'primary100'} layoutId={'3'} />
        <Box background={'primary100'} layoutId={'4'} />
      </MotionStackContainer>
    </ComponentStage>
  ),
};
