import React from 'react';
import * as SC from './Skeleton.styled';
import type { SkeletonProps } from './Skeleton.types';

const Skeleton = ({ style }: SkeletonProps) => {
  return <SC.Container style={style} data-shoplflow={'Skeleton'}></SC.Container>;
};

export default Skeleton;
