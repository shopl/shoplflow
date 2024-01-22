import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Tag from './Tag';
import type { TagProps } from './Tag.types';

export default {
  title: 'COMPONENTS/Tag',
  component: Tag,
};

export const Playground: StoryFn<TagProps> = (args) => {
  return (
    <Stack>
      <Tag {...args} />
    </Stack>
  );
};

Playground.args = {
  sizeVar: 'M',
  children: '태그에요',
};
