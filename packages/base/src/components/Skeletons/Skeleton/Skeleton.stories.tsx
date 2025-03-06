import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import Skeleton from './Skeleton';
import type { SkeletonProps } from './Skeleton.types';

export default {
  title: 'COMPONENTS/Skeletons/Skeleton',
  component: Skeleton,
};

export const Playground: StoryFn<SkeletonProps> = (args) => {
  return (
    <Stack>
      <Skeleton {...args} style={{ width: '100px', height: '20px' }} />
    </Stack>
  );
};
