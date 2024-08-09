import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import MonthDatepicker from './MonthDatepicker';
import type { MonthDatepickerProps } from './MonthDatepicker.types';

export default {
  title: 'COMPONENTS/MonthDatepicker',
  component: MonthDatepicker,
};

export const Playground: StoryFn<MonthDatepickerProps> = (args) => {
  return (
    <Stack>
      <MonthDatepicker {...args} />
    </Stack>
  );
};
