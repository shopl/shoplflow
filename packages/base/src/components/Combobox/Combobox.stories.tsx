import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Combobox from './Combobox';
import type { ComboboxProps } from './Combobox.types';

export default {
  title: 'COMPONENTS/Combobox',
  component: Combobox,
};

export const Playground: StoryFn<ComboboxProps> = (args) => {
  return (
    <Stack>
      <Combobox {...args} />
    </Stack>
  );
};
