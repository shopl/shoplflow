import React from 'react';
import { StyledTree } from './Tree.styled';
import type { TreeProps } from './Tree.types';

const Tree = ({ ...rest }: TreeProps) => {
  return (
    <StyledTree {...rest} data-shoplflow={'Tree'}>
      Tree
    </StyledTree>
  );
};

export default Tree;
