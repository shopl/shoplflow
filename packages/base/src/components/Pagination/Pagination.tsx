import React from 'react';
import { StyledPagination } from './Pagination.styled';
import type { PaginationProps } from './Pagination.types';

const Pagination = ({ ...rest }: PaginationProps) => {
  return (
    <StyledPagination data-shoplflow={'Pagination'} {...rest}>
      Pagination
    </StyledPagination>
  );
};

export default Pagination;
