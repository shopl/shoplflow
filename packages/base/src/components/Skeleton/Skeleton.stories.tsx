import React from 'react';

import type { StoryFn } from '@storybook/react';
import Skeleton from '../Skeleton/Skeleton';
import type { SkeletonProps } from '../Skeleton/Skeleton.types';
import { Stack } from '../Stack';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['circle', 'default'],
      },
    },
    width: {
      control: {
        type: 'text',
      },
      defaultValue: '100%',
    },
    height: {
      control: {
        type: 'text',
      },
      defaultValue: '20px',
    },
  },
};

export const Playground: StoryFn<SkeletonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <Skeleton {...args} />
    </Stack>
  );
};
