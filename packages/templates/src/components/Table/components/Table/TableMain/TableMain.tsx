import React, { useEffect } from 'react';

import { useTable } from '../../../context';
import type { TableMainProps } from '../../../types';
import { TableRootContainer } from '../Table.styled';
import { TableEmpty } from '../TableEmpty';

import { FixedTable } from './FixedTable';
import { ResizableTable } from './ResizableTable';
import { VirtualTable } from './VirtualTable';

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
export const TableMain = (props: TableMainProps) => {
  const {
    fixedColumns = [],
    useVirtualization = false,
    isSticky = true,
    stickyHeaderTopPosition = 120,
    children,
    maxHeight,
    emptyRowCount = 8,
    enableDragDrop = false,
    dragColWidth = 40,
    onRowReorder,
    footerRowProps,
    headerRowStyle,
    bodyRowStyle,
    containerStyle,
  } = props;
  const { table, hasToolbar, hasFilterBar, columnResizing } = useTable();
  const { rows } = table.getRowModel();

  const shouldFixDragHandle = enableDragDrop && fixedColumns.some((fc) => fc.index === 0 && fc.position === 'left');

  useEffect(() => {
    const pinningState: {
      left: string[];
      right: string[];
    } = {
      left: [],
      right: [],
    };
    fixedColumns.forEach(({ index, position }) => {
      // enableDragDrop이 true이고 index: 0이면 dragHandle을 의미하므로 실제 컬럼은 고정하지 않음
      if (enableDragDrop && index === 0) {
        return;
      }
      // enableDragDrop이 true일 때는 index: 1이 첫 번째 실제 컬럼(인덱스 0)을 의미하므로 -1
      const actualIndex = enableDragDrop ? index - 1 : index;
      const column = table.getAllLeafColumns()[actualIndex];
      if (column?.id) {
        pinningState[position].push(column.id);
      }
    });
    table.setColumnPinning(pinningState);
    // !의존성을 집어넣으면 계속 계산을 이어나가기 때문에 테이블이 리렌더링이 무한으로 일어남
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmpty = rows.length === 0;

  let emptyElement;
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === TableEmpty) {
      emptyElement = child;
    }
  });

  const nonVirtualizedRows = rows.map((row) => ({ row, ...row }));
  const tableState = {
    displayedRows: nonVirtualizedRows,
    paddingTop: 0,
    paddingBottom: 0,
    isEmpty,
    emptyElement,
    children,
    maxHeight,
    hasToolbar,
    isSticky,
    stickyHeaderTopPosition,
    emptyRowCount,
    enableDragDrop,
    dragColWidth,
    shouldFixDragHandle,
    onRowReorder,
    footerRowProps,
    headerRowStyle,
    bodyRowStyle,
  };

  return (
    <TableRootContainer hasFilterBar={hasFilterBar} hasToolbar={hasToolbar} style={containerStyle}>
      {useVirtualization ? (
        <VirtualTable maxHeight={maxHeight} bodyRowStyle={bodyRowStyle} />
      ) : // <VirtualizedContent
      //   {...props}
      //   rows={rows}
      //   emptyElement={emptyElement}
      //   isEmpty={isEmpty}
      //   enableDragDrop={enableDragDrop}
      // />
      columnResizing ? (
        <ResizableTable tableState={tableState} />
      ) : (
        <FixedTable tableState={tableState} />
      )}
    </TableRootContainer>
  );
};
