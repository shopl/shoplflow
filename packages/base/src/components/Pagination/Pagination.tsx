import React from 'react';
import { StyledPagination, PageItem, PaginationWrapper, Ellipsis } from './Pagination.styled';
import type { PaginationProps } from './Pagination.types';
import { Icon } from '../Icon';
import { IconButton } from '../Buttons';
import { EndPageIcon, FirstPageIcon, LeftArrowIcon, RightArrowIcon } from '@shoplflow/shopl-assets';
import { Text } from '../Text';
import PaginationSizeSelector from './PaginationSizeSelector';

const Pagination = ({
  currentPage,
  pageCount = 5,
  itemsTotalCount,
  pageSize,
  previousPage,
  nextPage,
  gotoPage,
  leftSource,
  rightSource,
  totalCount,
  ...rest
}: PaginationProps) => {
  const pageTotalCount = totalCount ?? Math.ceil(itemsTotalCount / Number(pageSize));
  const showLeftEllipsis = currentPage > pageCount - 1;
  const showRightEllipsis =
    currentPage < pageTotalCount && Math.ceil((currentPage + 1) / pageCount) < Math.ceil(pageTotalCount / pageCount);

  const canPreviousPage = currentPage > 0;
  const canNextPage = currentPage < pageTotalCount - 1;

  return (
    <PaginationWrapper {...rest}>
      {leftSource ? leftSource : <div />}
      <StyledPagination data-shoplflow={'Pagination'}>
        <IconButton sizeVar='S' styleVar='GHOST' disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
          <Icon iconSource={FirstPageIcon} color='neutral400' sizeVar='S' />
        </IconButton>
        <IconButton sizeVar='S' styleVar='GHOST' onClick={previousPage} disabled={!canPreviousPage}>
          <Icon iconSource={LeftArrowIcon} color='neutral400' sizeVar='S' />
        </IconButton>

        {showLeftEllipsis && (
          <Ellipsis>
            <Text>...</Text>
          </Ellipsis>
        )}

        {[...Array(pageTotalCount)].splice(0, pageCount).map(
          (_, idx) =>
            idx + Math.floor(currentPage / pageCount) * pageCount < pageTotalCount && (
              <PageItem
                key={idx}
                isActive={currentPage === idx + Math.floor(currentPage / pageCount) * pageCount}
                onClick={() => gotoPage(idx + Math.floor(currentPage / pageCount) * pageCount)}
              >
                {idx + 1 + Math.floor(currentPage / pageCount) * pageCount}
              </PageItem>
            ),
        )}

        {showRightEllipsis && (
          <Ellipsis>
            <Text>...</Text>
          </Ellipsis>
        )}

        <IconButton sizeVar='S' styleVar='GHOST' onClick={nextPage} disabled={!canNextPage}>
          <Icon iconSource={RightArrowIcon} color='neutral400' sizeVar='S' />
        </IconButton>

        <IconButton sizeVar='S' styleVar='GHOST' disabled={!canNextPage} onClick={() => gotoPage(pageTotalCount - 1)}>
          <Icon iconSource={EndPageIcon} color='neutral400' sizeVar='S' />
        </IconButton>
      </StyledPagination>

      {rightSource ? rightSource : <div />}
    </PaginationWrapper>
  );
};

Pagination.SizeSelector = PaginationSizeSelector;

export default Pagination;
