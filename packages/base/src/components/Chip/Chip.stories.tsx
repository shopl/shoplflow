import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Chip from './Chip';
import type { ChipProps } from './Chip.types';

export default {
  title: 'COMPONENTS/Chip',
  component: Chip,
};

export const Playground: StoryFn<ChipProps> = (args) => {
  return (
    <Stack>
      <Stack>
        <Chip {...args} />
      </Stack>
    </Stack>
  );
};
