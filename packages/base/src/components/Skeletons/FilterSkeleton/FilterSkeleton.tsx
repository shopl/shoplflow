import React from 'react';
import type { FilterSkeletonProps } from './FilterSkeleton.types';
import StackContainer from '../../StackContainer/StackContainer';
import { colorTokens } from '../../../styles';
import { Stack } from '../../Stack';
import { Skeleton } from '../Skeleton';

const FilterSkeleton = ({ rightSource }: FilterSkeletonProps) => {
  return (
    <StackContainer.Horizontal
      data-shoplflow={'FilterSkeleton'}
      width='100%'
      padding='16px 20px'
      radius='borderRadius08'
      style={{ border: `1px solid ${colorTokens.neutral200}` }}
      justify='space-between'
      align='center'
    >
      <Stack.Horizontal align='center' spacing='spacing08'>
        <Skeleton style={{ width: '20px', height: '20px' }} />
        <Skeleton style={{ width: '100px', height: '20px' }} />
        <Skeleton style={{ width: '50px', height: '20px' }} />
        <Skeleton style={{ width: '50px', height: '20px' }} />
      </Stack.Horizontal>
      {rightSource}
    </StackContainer.Horizontal>
  );
};

export default FilterSkeleton;
