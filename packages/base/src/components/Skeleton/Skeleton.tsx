import React from 'react';
import * as SC from './Skeleton.styled';
import type { SkeletonProps } from './Skeleton.types';

const Skeleton = ({ styleVar = 'rectangle', width = '50px', height = '20px' }: SkeletonProps) => {
  return <SC.Container styleVar={styleVar} width={width} height={height} data-shoplflow={'Skeleton'} />;
};

export default Skeleton;
