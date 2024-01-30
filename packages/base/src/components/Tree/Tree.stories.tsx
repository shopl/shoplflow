import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Tree from './Tree';
import type { TreeProps } from './Tree.types';

export default {
  title: 'COMPONENTS/Tree',
  component: Tree,
};

export const Playground: StoryFn<TreeProps> = (args) => {
  return (
    <Stack>
      <Tree {...args} />
    </Stack>
  );
};
