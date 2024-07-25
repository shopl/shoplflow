import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import AnnualDatepicker from './AnnualDatepicker';
import type { AnnualDatepickerProps } from './AnnualDatepicker.types';

export default {
  title: 'COMPONENTS/AnnualDatepicker',
  component: AnnualDatepicker,
};

export const Playground: StoryFn<AnnualDatepickerProps> = (args) => {
  return (
    <Stack>
      <AnnualDatepicker {...args} />
    </Stack>
  );
};
