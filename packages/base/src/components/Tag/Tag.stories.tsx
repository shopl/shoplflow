import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Tag from './Tag';
import { TagSizeVariants, TagStyleVariants } from './Tag.types';
import type { TagProps } from './Tag.types';

export default {
  title: 'COMPONENTS/Tag',
  component: Tag,
  argTypes: {
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(TagSizeVariants),
      description: '태그의 크기를 설정합니다.',
    },
    styleVar: {
      control: { type: 'select' },
      options: Object.values(TagStyleVariants),
      description: '태그의 스타일을 설정합니다.',
    },
  },
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
  styleVar: 'SOLID',
  children: '태그에요',
};
