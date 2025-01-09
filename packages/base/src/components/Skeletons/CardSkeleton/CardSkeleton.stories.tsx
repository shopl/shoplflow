import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import CardSkeleton from './CardSkeleton';

export default {
  title: 'COMPONENTS/Skeletons/CardSkeleton',
  component: CardSkeleton,
};

export const Playground: StoryFn = (args) => {
  return (
    <Stack width={'1000px'}>
      <CardSkeleton {...args} />
    </Stack>
  );
};
