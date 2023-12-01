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

const Content2Columns = () => {
  return <StyledList data-shoplflow={'List'}>List</StyledList>;
};

const Text2Rows = () => {
  return <StyledList data-shoplflow={'List'}>List</StyledList>;
};

List.Text2Rows = Text2Rows;
List.Content2Columns = Content2Columns;

export default List;
