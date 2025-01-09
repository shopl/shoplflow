import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import TableSkeleton from './TableSkeleton';
import type { TableSkeletonProps } from './TableSkeleton.types';

export default {
  title: 'COMPONENTS/Skeletons/TableSkeleton',
  component: TableSkeleton,
};

export const Playground: StoryFn<TableSkeletonProps> = (args) => {
  return (
    <Stack width={'1000px'}>
      <TableSkeleton {...args} />
    </Stack>
  );
};
