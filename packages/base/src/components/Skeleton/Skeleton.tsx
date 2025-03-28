import React from 'react';
import * as SC from './Skeleton.styled';
import type { SkeletonProps } from './Skeleton.types';

const getSkeletonStyles = (styleVar: string | undefined, width: string, height: string) => {
  switch (styleVar) {
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

const Skeleton = ({ styleVar = 'rectangle', width = '100%', height = '20px' }: SkeletonProps) => {
  const skeletonStyle = getSkeletonStyles(styleVar, width, height);

  return <SC.Container style={skeletonStyle} data-shoplflow={'Skeleton'} />;
};

export default Skeleton;
