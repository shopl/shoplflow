import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Menu from './Menu';
import type { MenuProps } from './Menu.types';

export default {
  title: 'COMPONENTS/Menu',
  component: Menu,
};

export const Playground: StoryFn<MenuProps> = (args) => {
  return (
    <Stack>
      <Menu {...args} />
    </Stack>
  );
};
