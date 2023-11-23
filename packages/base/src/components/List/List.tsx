import React from 'react';
import { StyledList } from './List.styled';
import type { ListProps } from './List.types';

const List = ({ ...rest }: ListProps) => {
  return (
    <StyledList data-shoplflow={'List'} {...rest}>
      List
    </StyledList>
  );
};

export default List;
