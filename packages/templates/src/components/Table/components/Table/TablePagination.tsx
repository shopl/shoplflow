/* eslint-disable react-hooks/exhaustive-deps, @typescript-eslint/require-await, @typescript-eslint/no-misused-promises */
import { useCallback, useEffect, useState } from 'react';

import { flip, Pagination, shift } from '@shoplflow/base';

import { useTable } from '../../context';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { TablePaginationProps } from '../../types';
import { PAGE_SIZE } from '../../utils';

import {
  BottomContainer,
  PaginationLeftSlot,
  PaginationSizeSelectorSlot,
  PaginationWrapper,
  ScrollContainer,
} from './Table.styled';

/**
 * 테이블의 페이지네이션을 처리하는 컴포넌트
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {number} props.total - 전체 데이터 수
 * @param {number} props.defaultPageSize - 기본 페이지 크기
 * @param {ReactNode} [props.leftSource] - 페이지네이션 좌측 슬롯
 * @param {ReactNode} [props.children] - (deprecated) 페이지네이션 내부 자식 슬롯
 * @param {number[]} [props.pageSizeList] - 페이지 크기 선택 옵션 리스트
 * @param {Function} [props.setCurrentPage] - 현재 페이지 변경 콜백 함수
 * @param {boolean} [props.notSizeOption] - 페이지 크기 선택 옵션 표시 여부
 * @param {number} [props.currentPage] - 현재 페이지 인덱스
 * @returns {JSX.Element} 렌더링된 페이지네이션 컴포넌트
 */

export const TablePagination = ({
  total,
  defaultPageSize,
  leftSource,
  children,
  pageSizeList = PAGE_SIZE,
  setCurrentPage,
  notSizeOption = false,
  currentPage,
  showPagination = true,
  sizeVar = 'S',
  hasPaddingInline = true,
}: TablePaginationProps): JSX.Element => {
  const { table, headerRef, bodyRef, tableScrollRef, footerRef, hasFilterBar, hasToolbar, isVirtualTableLayout } =
    useTable();
  const { pageSize, pageIndex } = table.getState().pagination;
  const [isEndOfPage, setIsEndOfPage] = useState<boolean>(false);

  // 테이블 스크롤 동기화
  const handleScroll = useCallback(() => {
    if (!headerRef.current || !bodyRef.current || !tableScrollRef.current) {
      return;
    }

    const scrollLeft = tableScrollRef.current.scrollLeft;
    // !empty 상황에서 스크롤이 안되는 상황 처리를 위헤 헤더와도 동기화 처리
    headerRef.current.scrollLeft = scrollLeft;
    bodyRef.current.scrollLeft = scrollLeft;
  }, []);

  const onIntersect = useCallback(
    async (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      entry.isIntersecting ? setIsEndOfPage(true) : setIsEndOfPage(false);
    },

    [isEndOfPage],
  );

  useIntersectionObserver(footerRef, onIntersect, {
    threshold: 1,
    rootMargin: '0px 0px -1px',
  });

  // 페이지 변경 핸들러
  const handlePageChange = useCallback(
    (updater: number | ((pageIndex: number) => number)) => {
      const newPage = typeof updater === 'function' ? updater(pageIndex) : updater;
      table.setPageIndex(newPage);
      setCurrentPage?.({ pageIndex: newPage, pageSize });
    },
    [pageIndex, pageSize, table, setCurrentPage],
  );

  // 페이지 사이즈 변경 핸들러
  const handlePageSizeChange = useCallback(
    (value: string) => {
      const newSize = Number(value);
      table.setPageSize(newSize);
      table.setPageIndex(0);
      setCurrentPage?.({ pageIndex: 0, pageSize: newSize });
    },
    [table, setCurrentPage],
  );

  const TableColumns = () => {
    // group을 사용하는 경우 leaf columns만 사용해야 스크롤바가 올바르게 표시됨
    const leafColumns = table.getVisibleLeafColumns();

    return (
      <colgroup>
        {leafColumns.map((column) => {
          const size = column.columnDef.size;
          const minSize = column.columnDef.minSize;
          const maxSize = column.columnDef.maxSize;

          // size가 0인 경우와 아닌 경우를 나눠 처리
          const style =
            size === 0
              ? { width: '100%' }
              : {
                  width: `${size}px`,
                  minWidth: `${minSize}px`,
                  maxWidth: `${maxSize}px`,
                };

          return <col key={column.id} style={style} />;
        })}
      </colgroup>
    );
  };

  const renderRightSource = () => {
    if (sizeVar === 'XS') {
      return null;
    }

    if (notSizeOption) {
      return;
    }

    return (
      <PaginationSizeSelectorSlot>
        <Pagination.SizeSelector
          data={pageSizeList.map((item) => ({ label: item.label, value: item.key }))}
          pageSize={`${pageSize}`}
          setPageSize={handlePageSizeChange}
          middlewares={[
            flip({ padding: 8, rootBoundary: 'viewport' }),
            shift({ padding: 8, rootBoundary: 'viewport' }),
          ]}
        />
      </PaginationSizeSelectorSlot>
    );
  };

  // 초기 페이지 사이즈 설정
  useEffect(() => {
    table.setPageSize(defaultPageSize);
  }, [defaultPageSize, table]);

  useEffect(() => {
    // resetDependencies가 없으면 아무 동작도 하지 않음
    table.setPageIndex(currentPage ?? 0);
  }, [table, currentPage]);

  // autoResetPageIndex=false 등으로 현재 페이지가 전체 페이지 수를 초과하면 마지막 페이지로 보정
  // (클라이언트 페이지네이션 한정 — 서버 페이지네이션은 외부에서 제어)
  useEffect(() => {
    if (table.options.manualPagination) {
      return;
    }
    const pageCount = Math.max(1, Math.ceil(total / Number(pageSize)));
    if (pageIndex > pageCount - 1) {
      table.setPageIndex(pageCount - 1);
    }
  }, [total, pageSize, pageIndex, table]);

  const scrollbarTableWidth = table.getTotalSize() || '100%';

  const leftSlotContent = leftSource ?? children;

  return (
    <BottomContainer
      ref={footerRef}
      isEndOfPage={isEndOfPage}
      hasFilterBar={hasFilterBar}
      hasToolbar={hasToolbar}
      disableStickyFooter={Boolean(isVirtualTableLayout)}
    >
      {/* 스크롤 바 */}
      <ScrollContainer ref={tableScrollRef} onScroll={handleScroll} isPagination={showPagination}>
        <table
          style={{
            width: scrollbarTableWidth,
            height: '6px',
            tableLayout: 'fixed',
          }}
        >
          <TableColumns />
        </table>
      </ScrollContainer>
      <PaginationWrapper sizeVar={sizeVar} isEndOfPage={isEndOfPage}>
        {!showPagination && <PaginationLeftSlot>{leftSlotContent}</PaginationLeftSlot>}
        {showPagination && (
          <Pagination
            key={Math.ceil(total / Number(pageSize))}
            sizeVar={sizeVar}
            pageSize={`${pageSize}`}
            currentPage={pageIndex}
            itemsTotalCount={total}
            totalCount={Math.ceil(total / Number(pageSize))}
            previousPage={() => handlePageChange(pageIndex - 1)}
            nextPage={() => handlePageChange(pageIndex + 1)}
            style={{ paddingInline: hasPaddingInline ? '16px' : '0px' }}
            gotoPage={handlePageChange}
            rightSource={renderRightSource()}
            leftSource={leftSlotContent}
          />
        )}
      </PaginationWrapper>
    </BottomContainer>
  );
};
