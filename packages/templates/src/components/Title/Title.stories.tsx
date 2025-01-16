import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '@shoplflow/base';
import Title from './Title';
import type { TitleProps } from './Title.types';

export default {
  title: 'COMPONENTS/Title',
  component: Title,
};

export const Playground: StoryFn<TitleProps> = (args) => {
  return (
    <Stack>
      <Title {...args} />
    </Stack>
  );
};

Playground.args = {
  title: 'Hello, Shoplflow!',
};
