import React from 'react';
import { StyledPagination, PageItem, PaginationWrapper, Ellipsis, RightSourceWrapper } from './Pagination.styled';
import type { PaginationProps } from './Pagination.types';
import { Icon } from '../Icon';
import { IconButton } from '../Buttons';
import { EndPageIcon, FirstPageIcon, LeftArrowIcon, RightArrowIcon } from '@shoplflow/shopl-assets';
import { Text } from '../Text';
import PaginationSizeSelector from './PaginationSizeSelector';
import { getDomain } from '../../../src/hooks';

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
  sizeVar = 'S',
  ...rest
}: PaginationProps) => {
  const domain = getDomain();
  const isHadaDomain = domain === 'hada';
  const responsiveClassName = isHadaDomain ? 'hada-responsive' : '';
  const isXSSize = sizeVar === 'XS';

  // XS 사이즈일 때 Icon 스타일 정의
  const iconStyle = isXSSize ? { width: '12px', height: '12px' } : undefined;

  const pageTotalCount = totalCount ?? Math.ceil(itemsTotalCount / Number(pageSize));
  const showLeftEllipsis = currentPage > pageCount - 1;
  const showRightEllipsis =
    currentPage < pageTotalCount && Math.ceil((currentPage + 1) / pageCount) < Math.ceil(pageTotalCount / pageCount);

  const canPreviousPage = currentPage > 0;
  const canNextPage = currentPage < pageTotalCount - 1;

  return (
    <PaginationWrapper className={responsiveClassName} {...rest}>
      {leftSource ? leftSource : <div />}
      <StyledPagination className={responsiveClassName} data-shoplflow={'Pagination'}>
        {!isXSSize && (
          <IconButton sizeVar='S' styleVar='GHOST' disabled={!canPreviousPage} onClick={() => gotoPage(0)}>
            <Icon iconSource={FirstPageIcon} color='neutral400' sizeVar='S' />
          </IconButton>
        )}
        <IconButton sizeVar={sizeVar} styleVar='GHOST' onClick={previousPage} disabled={!canPreviousPage}>
          <Icon iconSource={LeftArrowIcon} color='neutral400' sizeVar={sizeVar} style={iconStyle} />
        </IconButton>

        {showLeftEllipsis && (
          <Ellipsis className={responsiveClassName}>
            <Text typography='body2_700'>...</Text>
          </Ellipsis>
        )}

        {[...Array(pageTotalCount)].splice(0, pageCount).map(
          (_, idx) =>
            idx + Math.floor(currentPage / pageCount) * pageCount < pageTotalCount && (
              <PageItem
                sizeVar={sizeVar}
                key={idx}
                className={responsiveClassName}
                isActive={currentPage === idx + Math.floor(currentPage / pageCount) * pageCount}
                onClick={() => gotoPage(idx + Math.floor(currentPage / pageCount) * pageCount)}
              >
                <Text typography={sizeVar === 'XS' ? 'caption_700' : 'body2_700'}>
                  {idx + 1 + Math.floor(currentPage / pageCount) * pageCount}
                </Text>
              </PageItem>
            ),
        )}

        {showRightEllipsis && (
          <Ellipsis className={responsiveClassName}>
            <Text typography='body2_700'>...</Text>
          </Ellipsis>
        )}

        <IconButton sizeVar={sizeVar} styleVar='GHOST' onClick={nextPage} disabled={!canNextPage}>
          <Icon iconSource={RightArrowIcon} color='neutral400' sizeVar={sizeVar} style={iconStyle} />
        </IconButton>

        {!isXSSize && (
          <IconButton sizeVar='S' styleVar='GHOST' disabled={!canNextPage} onClick={() => gotoPage(pageTotalCount - 1)}>
            <Icon iconSource={EndPageIcon} color='neutral400' sizeVar='S' />
          </IconButton>
        )}
      </StyledPagination>

      {rightSource ? <RightSourceWrapper className={responsiveClassName}>{rightSource}</RightSourceWrapper> : <div />}
    </PaginationWrapper>
  );
};

Pagination.SizeSelector = PaginationSizeSelector;

export default Pagination;
