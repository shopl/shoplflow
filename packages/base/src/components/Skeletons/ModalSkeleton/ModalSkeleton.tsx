import React from 'react';
import type { ModalSkeletonProps } from './ModalSkeleton.types';
import * as SC from './ModalSkeleton.styled';
import { Skeleton } from '../Skeleton';

const ModalSkeleton = ({ type }: ModalSkeletonProps) => {
  const isPush = type === 'push';
  const list = Array.from({ length: isPush ? 9 : 7 });
  return (
    <SC.ListWrapper data-shoplflow={'ModalSkeleton'}>
      {list.map((_, index) => (
        <SC.SkeletonWrapper isList key={`${index}`}>
          <Skeleton
            style={{
              width: '100%',
              height: '20px',
              borderRadius: '4px',
            }}
          />
        </SC.SkeletonWrapper>
      ))}
    </SC.ListWrapper>
  );
};

export default ModalSkeleton;
