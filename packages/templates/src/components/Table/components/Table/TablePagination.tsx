import React, { useCallback, useEffect, useState } from 'react';
import { Pagination } from '@shoplflow/base';
import { PAGE_SIZE } from '../../utils';
import { useTable } from '../../context';
import { BottomContainer, EmptySource, PaginationWrapper, ScrollContainer, PaginationLeftSlot } from './Table.styled';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import type { TablePaginationProps } from '../../types';

/**
 * 테이블의 페이지네이션을 처리하는 컴포넌트
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {number} props.total - 전체 데이터 수
 * @param {number} props.defaultPageSize - 기본 페이지 크기
 * @param {ReactNode} props.children - 페이지네이션 내부에 렌더링할 자식 컴포넌트
 * @param {number[]} [props.pageSizeList] - 페이지 크기 선택 옵션 리스트
 * @param {Function} [props.setCurrentPage] - 현재 페이지 변경 콜백 함수
 * @param {boolean} [props.notSizeOption] - 페이지 크기 선택 옵션 표시 여부
 * @param {number} [props.currentPage] - 현재 페이지 인덱스
 * @returns {JSX.Element} 렌더링된 페이지네이션 컴포넌트
 */

export const TablePagination = ({
  total,
  defaultPageSize,
  children,
  pageSizeList = PAGE_SIZE,
  setCurrentPage,
  notSizeOption = false,
  currentPage,
  sizeVar = 'S',
}: TablePaginationProps) => {
  const { table, headerRef, bodyRef, tableScrollRef, footerRef, hasFilterBar, hasToolbar } = useTable();
  const { pageSize, pageIndex } = table.getState().pagination;
  const [isEndOfPage, setIsEndOfPage] = useState<boolean>(false);

  // 테이블 스크롤 동기화
  const handleScroll = useCallback(() => {
    if (!headerRef.current || !bodyRef.current || !tableScrollRef.current) {
      return;
    }

    const scrollLeft = tableScrollRef.current.scrollLeft;
    headerRef.current.scrollLeft = scrollLeft;
    bodyRef.current.scrollLeft = scrollLeft;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      entry.isIntersecting ? setIsEndOfPage(true) : setIsEndOfPage(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const TableColumns = () => (
    <colgroup>
      {table.getAllColumns().map((column) => {
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

  // 초기 페이지 사이즈 설정
  useEffect(() => {
    table.setPageSize(defaultPageSize);
  }, [defaultPageSize, table]);

  useEffect(() => {
    // resetDependencies가 없으면 아무 동작도 하지 않음
    table.setPageIndex(currentPage ?? 0);
  }, [table, currentPage]);

  return (
    <BottomContainer ref={footerRef} isEndOfPage={isEndOfPage} hasFilterBar={hasFilterBar} hasToolbar={hasToolbar}>
      {/* 스크롤 바 */}
      <ScrollContainer ref={tableScrollRef} onScroll={handleScroll}>
        <table style={{ width: table.getTotalSize() || '100%', height: '6px', tableLayout: 'fixed' }}>
          <TableColumns />
        </table>
      </ScrollContainer>
      <PaginationWrapper>
        <PaginationLeftSlot>{children}</PaginationLeftSlot>

        <Pagination
          key={Math.ceil(total / Number(pageSize))}
          pageSize={`${pageSize}`}
          currentPage={pageIndex}
          itemsTotalCount={total}
          totalCount={Math.ceil(total / Number(pageSize))}
          previousPage={() => handlePageChange(pageIndex - 1)}
          nextPage={() => handlePageChange(pageIndex + 1)}
          sizeVar={sizeVar}
          style={{ paddingInline: '16px' }}
          gotoPage={handlePageChange}
          rightSource={
            notSizeOption ? (
              <EmptySource />
            ) : (
              <Pagination.SizeSelector
                data={pageSizeList.map((item) => ({ label: item.label, value: item.key }))}
                pageSize={`${pageSize}`}
                setPageSize={handlePageSizeChange}
              />
            )
          }
        />
      </PaginationWrapper>
    </BottomContainer>
  );
};
