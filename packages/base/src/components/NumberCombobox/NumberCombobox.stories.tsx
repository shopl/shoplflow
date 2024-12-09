import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import NumberCombobox from './NumberCombobox';
import type { NumberComboboxProps } from './NumberCombobox.types';

export default {
  title: 'COMPONENTS/NumberCombobox',
  component: NumberCombobox,
};

export const Playground: StoryFn<NumberComboboxProps> = (args) => {
  return (
    <Stack>
      <NumberCombobox {...args} />
    </Stack>
  );
};
