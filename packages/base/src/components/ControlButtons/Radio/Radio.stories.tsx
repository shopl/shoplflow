import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import Radio from './Radio';
import type { RadioProps } from './Radio.types';

export default {
  title: 'COMPONENTS/ControlButtons/Radio',
  component: Radio,
};

export const Playground: StoryFn<RadioProps> = (args) => {
  return (
    <Stack>
      <Radio {...args} />
    </Stack>
  );
};

Playground.args = {
  isSelected: false,
  defaultSelected: false,
};
