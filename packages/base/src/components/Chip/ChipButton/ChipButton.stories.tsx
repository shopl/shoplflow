import ChipButton from './ChipButton';
import { Stack } from '../../Stack';
import type { StoryFn } from '@storybook/react';
import type { ChipButtonProps } from './ChipButton.types';

export default {
  title: 'COMPONENTS/Chips/ChipButton',
  component: ChipButton,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Playground: StoryFn<ChipButtonProps> = (args) => {
  return (
    <Stack>
      <Stack>
        <ChipButton {...args} />
      </Stack>
    </Stack>
  );
};
