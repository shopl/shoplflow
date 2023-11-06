import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Icon from './Icon';
import type { IconProps } from './Icon.types';

export default {
  title: 'COMPONENTS/Icon',
  component: Icon,
} as Meta;

export const Playground: StoryFn<IconProps> = (args) => {
  return (
    <Stack>
      <Icon {...args} />
    </Stack>
  );
};
