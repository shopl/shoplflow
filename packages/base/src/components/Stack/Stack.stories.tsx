import type { Meta, StoryFn } from '@storybook/react';

import { Stack, MotionStack } from './Stack';
import type { StackProps } from './Stack.types';
import { Box } from '../../styles/Box';

export default {
  title: 'COMPONENTS/Stack',
  component: Stack,
} as Meta;

export const Primary: StoryFn<StackProps> = (args) => (
  <Stack {...args} width={'fit-content'}>
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
  </Stack>
);

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
  <MotionStack {...args} width={'fit-content'}>
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
    <Box background={'primary100'} />
  </MotionStack>
);
