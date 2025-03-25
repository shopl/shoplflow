import React from 'react';
import * as SC from './Skeleton.styled';
import type { SkeletonProps } from './Skeleton.types';

const getSkeletonStyles = (variant: string | undefined, width: string, height: string) => {
  switch (variant) {
    case 'circle':
      return {
        width,
        height: width,
        borderRadius: '50%',
      };
    case 'default':
      return {
        width,
        height,
      };
    default:
      return {};
  }
};

const Skeleton = ({ variant = 'default', width = '100%', height = '20px' }: SkeletonProps) => {
  const skeletonStyle = getSkeletonStyles(variant, width, height);

  return <SC.Container style={skeletonStyle} data-shoplflow={'Skeleton'} />;
};

export default Skeleton;
