import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import FilterSkeleton from './FilterSkeleton';
import type { FilterSkeletonProps } from './FilterSkeleton.types';

export default {
  title: 'COMPONENTS/Skeletons/FilterSkeleton',
  component: FilterSkeleton,
};

export const Playground: StoryFn<FilterSkeletonProps> = (args) => {
  return (
    <Stack>
      <FilterSkeleton {...args} />
    </Stack>
  );
};
