import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import List from './List';
import type { ListProps } from './List.types';

export default {
  title: 'COMPONENTS/List',
  component: List,
};

export const Playground: StoryFn<ListProps> = (args) => {
  return (
    <Stack>
      <List {...args} />
    </Stack>
  );
};
