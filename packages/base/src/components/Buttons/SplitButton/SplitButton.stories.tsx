import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import SplitButton from './SplitButton';
import type { SplitButtonProps } from './SplitButton.types';

export default {
  title: 'COMPONENTS/Buttons/SplitButton',
  component: SplitButton,
};

export const Playground: StoryFn<SplitButtonProps> = (args) => {
  return (
    <Stack>
      <SplitButton {...args}>SplitButton</SplitButton>
    </Stack>
  );
};
