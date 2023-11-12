import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown.types';

export default {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
};

export const Playground: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack>
      <Dropdown {...args} />
    </Stack>
  );
};
