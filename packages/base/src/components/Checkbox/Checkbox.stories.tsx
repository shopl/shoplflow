import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Checkbox from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';

export default {
  title: 'COMPONENTS/Checkbox',
  component: Checkbox,
};

export const Playground: StoryFn<CheckboxProps> = (args) => {
  return (
    <Stack>
      <Checkbox {...args} />
    </Stack>
  );
};
