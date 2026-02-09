import React from 'react';

import type { StoryFn } from '@storybook/react-vite';
import Skeleton from '../Skeleton/Skeleton';
import type { SkeletonProps } from '../Skeleton/Skeleton.types';
import { Stack } from '../Stack';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
  argTypes: {
    styleVar: {
      control: {
        type: 'select',
        options: ['circle', 'rectangle'],
      },
    },
    width: {
      control: {
        type: 'text',
      },
      defaultValue: '40px',
    },
    height: {
      control: {
        type: 'text',
      },
      defaultValue: '40px',
    },
  },
};

export const Playground: StoryFn<SkeletonProps> = (args) => {
  return (
    <Stack minWidth={'100px'} minHeight={'100px'}>
      <Skeleton {...args} />
    </Stack>
  );
};
