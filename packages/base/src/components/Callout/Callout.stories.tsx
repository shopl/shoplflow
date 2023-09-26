import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Callout from './Callout';
import type { CalloutProps } from './Callout.types';

export default {
  title: 'COMPONENTS/Callout',
  component: Callout,
} as Meta;

export const Playground: StoryFn<CalloutProps> = (args) => {
  return (
    <Stack>
      <Callout {...args} />
    </Stack>
  );
};
