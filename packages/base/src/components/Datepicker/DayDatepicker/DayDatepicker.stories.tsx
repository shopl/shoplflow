import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import DayDatepicker from './DayDatepicker';
import type { DayDatepickerProps } from './DayDatepicker.types';

export default {
  title: 'COMPONENTS/DayDatepicker',
  component: DayDatepicker,
};

export const Playground: StoryFn<DayDatepickerProps> = (args) => {
  return (
    <Stack>
      <DayDatepicker {...args} />
    </Stack>
  );
};
