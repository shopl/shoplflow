import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Popper from './Popper';
import type { PopperProps } from './Popper.types';

export default {
  title: 'COMPONENTS/Popper',
  component: Popper,
} as Meta;

export const Playground: StoryFn<PopperProps> = (args) => {
  return (
    <Stack>
      <Popper {...args} />
    </Stack>
  );
};
