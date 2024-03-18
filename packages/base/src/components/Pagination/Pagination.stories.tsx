import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Pagination from './Pagination';
import type { PaginationProps } from './Pagination.types';

export default {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
};

export const Playground: StoryFn<PaginationProps> = (args) => {
  return (
    <Stack>
      <Pagination {...args} />
    </Stack>
  );
};
