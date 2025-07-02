import React, { useCallback, useEffect } from 'react';
import { useTable } from '../../../context';
import type { TableMainProps } from '../../../types';
import type { VirtualItem, VirtualizerOptions } from '@tanstack/react-virtual';
import { observeWindowOffset, useWindowVirtualizer } from '@tanstack/react-virtual';
import { TableRootContainer } from '../Table.styled';
import { TableEmpty } from '../TableEmpty';
import { FixedTable } from './FixedTable';
import { ResizableTable } from './ResizableTable';
import type { Row } from '@tanstack/react-table';

type DisplayedRowType<T = any> =
  | { row: Row<T>; virtualRow: VirtualItem } // 가상화 사용시
  | { row: Row<T> };

/**
 * 테이블의 메인 렌더링을 처리하는 컴포넌트
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Array<string>} [props.fixedColumns=[]] - 고정/핀 처리할 컬럼 ID 배열
 * @param {boolean} [props.useVirtualization=true] - 대용량 데이터 처리를 위한 가상화 사용 여부
 * @param {boolean} [props.isSticky=true] - 스크롤 시 헤더 고정 여부
 * @param {number} [props.stickyHeaderTopPosition=120] - 고정 헤더의 상단 위치(픽셀)
 * @param {ReactNode} props.children - 테이블 내부에 렌더링할 자식 컴포넌트
 * @param {number} [props.emptyRowCount=8] - 빈 행 수
 * @returns {JSX.Element} 렌더링된 테이블 컴포넌트
 */
export const TableMain = ({
  fixedColumns = [],
  useVirtualization = false,
  isSticky = true,
  stickyHeaderTopPosition = 120,
  children,
  maxHeight,
  emptyRowCount = 8,
}: TableMainProps) => {
  const { table, hasToolbar, hasFilterBar, columnResizing } = useTable();
  const { rows } = table.getRowModel();

  const scrollToFn: VirtualizerOptions<any, any>['scrollToFn'] = useCallback((offset) => {
    window.scrollTo({
      top: offset - 120,
      behavior: 'smooth',
    });
  }, []);

  // useWindowVirtualizer
  // 윈도우 스크롤을 기준으로 가상화 처리
  const rowVirtualizer = useWindowVirtualizer({
    estimateSize: () => 60, // 각 행의 높이를 60px로 예측
    count: rows.length,
    overscan: 10, // 실제 보이는 영역 외에 추가로 렌더링할 아이템 수
    isScrollingResetDelay: 100, // 스크롤이 멈추고 100ms 후에 스크롤 상태 초기화
    observeElementOffset: (instance, cb) =>
      observeWindowOffset(instance, (offset, isScrolling) => cb(offset - 120, isScrolling)),
    scrollToFn,
  });

  const { getVirtualItems: virtualRows } = rowVirtualizer;

  const displayedRows = useVirtualization
    ? virtualRows().map((virtualRow) => ({ row: rows[virtualRow.index], virtualRow }))
    : rows.map((row) => ({ row }));

  const hasVirtualRow = (item: DisplayedRowType): item is { row: Row<any>; virtualRow: VirtualItem } => {
    return 'virtualRow' in item;
  };

  const paddingTop =
    displayedRows.length > 0 && hasVirtualRow(displayedRows[0]) ? displayedRows[0].virtualRow.start : 0;

  const lastRow = displayedRows[displayedRows.length - 1];
  const paddingBottom =
    displayedRows.length > 0 && lastRow && hasVirtualRow(lastRow)
      ? rowVirtualizer.getTotalSize() - lastRow.virtualRow.end
      : 0;

  useEffect(() => {
    const pinningState: {
      left: string[];
      right: string[];
    } = {
      left: [],
      right: [],
    };
    fixedColumns.forEach(({ index, position }) => {
      const column = table.getAllColumns()[index];
      if (column?.id) {
        pinningState[position].push(column.id);
      }
    });
    table.setColumnPinning(pinningState);
    // !의존성을 집어넣으면 계속 계산을 이어나가기 때문에 테이블이 리렌더링이 무한으로 일어남
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmpty = rows.length === 0;

  // Empty 설정
  let emptyElement;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === TableEmpty) {
      emptyElement = child;
    }
  });

  // 공통 테이블 상태와 속성을 모아서 전달
  const tableState = {
    displayedRows,
    paddingTop,
    paddingBottom,
    isEmpty,
    emptyElement,
    children,
    maxHeight,
    hasToolbar,
    isSticky,
    stickyHeaderTopPosition,
    emptyRowCount,
  };

  return (
    <TableRootContainer hasFilterBar={hasFilterBar} hasToolbar={hasToolbar}>
      {columnResizing ? <ResizableTable tableState={tableState} /> : <FixedTable tableState={tableState} />}
    </TableRootContainer>
  );
};
