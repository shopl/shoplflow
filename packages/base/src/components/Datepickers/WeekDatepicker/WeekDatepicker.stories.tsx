import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import WeekDatepicker from './WeekDatepicker';
import type { WeekDatepickerProps } from './WeekDatepicker.types';

export default {
  title: 'COMPONENTS/WeekDatepicker',
  component: WeekDatepicker,
};

export const Playground: StoryFn<WeekDatepickerProps> = (args) => {
  return (
    <Stack>
      <WeekDatepicker {...args} weekArray={[]} />
    </Stack>
  );
};
