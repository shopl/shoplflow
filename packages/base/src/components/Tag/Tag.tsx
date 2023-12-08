import React from 'react';
import { getTypographyBySize, StyledTag } from './Tag.styled';
import type { TagProps } from './Tag.types';

const Tag = ({ sizeVar, children, rightSource, leftSource, ...rest }: TagProps) => {
  return (
    <StyledTag sizeVar={sizeVar} className={`${getTypographyBySize(sizeVar)}`} {...rest} data-shoplflow={'Tag'}>
      {leftSource && leftSource}
      {children}
      {rightSource && rightSource}
    </StyledTag>
  );
};

export default Tag;
