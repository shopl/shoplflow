import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';

import type { ChipProps } from '../Chip.types';
import ChipToggle from './ChipToggle';

export default {
  title: 'COMPONENTS/Chips/ChipToggle',
  component: ChipToggle,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Playground: StoryFn<ChipProps> = (args) => {
  return (
    <Stack>
      <Stack>
        <ChipToggle {...args} />
      </Stack>
    </Stack>
  );
};

Playground.args = {
  text: '샤플플로우',
  defaultSelected: false,
  radius: false,
};

export const List: StoryFn<ChipProps> = (args) => {
  return (
    <Stack>
      <Stack.Horizontal>
        <ChipToggle {...args} />
        <ChipToggle {...args} />
        <ChipToggle {...args} />
        <ChipToggle {...args} />
        <ChipToggle {...args} />
        <ChipToggle {...args} />
      </Stack.Horizontal>
    </Stack>
  );
};

List.args = {
  text: '샤플플로우',
  defaultSelected: false,
  radius: false,
};
