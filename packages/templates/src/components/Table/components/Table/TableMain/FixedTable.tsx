import React, { Fragment, useCallback } from 'react';
import {
  BodyTableContainer,
  HeaderTableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table.styled';
import TableHeadCell from '../TableHeadCell';
import { getCommonPinningStyles } from '../../../utils';
import type { Cell, Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { useTable } from '../../../context';
import type { VirtualItem } from '@tanstack/react-virtual';
import { ScrollArea } from '@shoplflow/base';

type TableStateProps = {
  displayedRows: Array<{ row: Row<any>; virtualRow?: VirtualItem }> | Array<{ row: Array<Cell<any, unknown>> }>;
  paddingTop: number;
  paddingBottom: number;
  isEmpty: boolean;
  emptyElement: React.ReactNode;
  children: React.ReactNode;
  isSticky: boolean;
  stickyHeaderTopPosition: number;
  maxHeight?: string;
  emptyRowCount?: number;
};

export const FixedTable = ({ tableState }: { tableState: TableStateProps }) => {
  const { table, headerRef, bodyRef, tableScrollRef, hasToolbar, hasPagination, onClickRow } = useTable();
  const {
    displayedRows,
    paddingTop,
    paddingBottom,
    isEmpty,
    emptyElement,
    children,
    isSticky,
    stickyHeaderTopPosition,
    maxHeight = '100%',
    emptyRowCount = 8,
  } = tableState;

  // 스크롤 동기화 이벤트 핸들러(테이블 바디와 테이블 헤더 스크롤 동기화)
  const handleScroll = useCallback(() => {
    if (headerRef.current && bodyRef.current && tableScrollRef.current) {
      const scrollLeft = bodyRef.current.scrollLeft;
      headerRef.current.scrollLeft = scrollLeft;
      tableScrollRef.current.scrollLeft = scrollLeft;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const TableColumns = () => (
    <colgroup>
      {table.getAllColumns().map((column) => {
        // 컬럼의 크기 관련 속성
        const size = column.columnDef.size; // 기본 너비
        const minSize = column.columnDef.minSize; // 최소 너비
        const maxSize = column.columnDef.maxSize; // 최대 너비

        // 컬럼 너비 스타일 정의
        // size가 0인 경우: 남은 공간을 모두 차지 (width: '100%')
        // size가 0이 아닌 경우: 지정된 크기로 고정
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

  // 고정 너비 셀 스타일 생성
  const getFixedCellStyle = (column, isHeader = false): React.CSSProperties => {
    // 컬럼의 기본 스타일 (고정, 크기 등)
    const baseStyle = {
      ...getCommonPinningStyles(column),
      ...(isHeader ? column.columnDef.meta?.headerProps?.style : column.columnDef.meta?.cellProps?.style),
    } as React.CSSProperties;

    // 너비 관련 스타일
    const size = column.columnDef.size;
    const minSize = column.columnDef.minSize;
    const maxSize = column.columnDef.maxSize;

    // 고정 너비 스타일 추가
    return {
      ...baseStyle,
      ...(size === 0
        ? { width: '100%' }
        : {
            width: `${size}px`,
            minWidth: `${minSize}px`,
            maxWidth: `${maxSize}px`,
          }),
    };
  };

  return (
    <>
      <HeaderTableContainer
        ref={headerRef}
        hasHeader={hasToolbar}
        isSticky={isSticky}
        stickyHeaderMarginTop={stickyHeaderTopPosition}
      >
        <table
          style={{
            width: '100%',
            overflow: 'auto',
            tableLayout: 'fixed',
          }}
        >
          <TableColumns />
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isPinned = header.column.getIsPinned();
                  const isLastLeftPinned = isPinned === 'left' && header.column.getIsLastColumn('left');
                  const isFirstRightPinned = isPinned === 'right' && header.column.getIsFirstColumn('right');

                  const columnRelativeDepth = header.depth - header.column.depth;

                  if (!header.isPlaceholder && columnRelativeDepth > 1 && header.id === header.column.id) {
                    return null;
                  }

                  let rowSpan = 1;
                  if (header.isPlaceholder) {
                    const leafs = header.getLeafHeaders();
                    rowSpan = leafs[leafs.length - 1].depth - header.depth;
                  }

                  return (
                    <TableHead
                      data-last-left-pinned={isLastLeftPinned}
                      data-first-right-pinned={isFirstRightPinned}
                      data-pinned={isPinned}
                      key={header.id}
                      style={getFixedCellStyle(header.column, true)}
                      colSpan={header.colSpan}
                      rowSpan={rowSpan}
                    >
                      <TableHeadCell header={header} />
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
        </table>
      </HeaderTableContainer>

      {/* 테이블 바디 */}
      <ScrollArea autoHeightMax={maxHeight} autoHeight>
        <BodyTableContainer hasPagination={hasPagination} onScroll={handleScroll} ref={bodyRef}>
          {isEmpty ? (
            children || emptyElement
          ) : (
            <table
              style={{
                width: '100%',
                overflow: 'auto',
                tableLayout: 'fixed',
              }}
            >
              <TableColumns />
              <TableBody>
                {paddingTop > 0 && (
                  <TableRow>
                    <td style={{ height: `${paddingTop}px` }} />
                  </TableRow>
                )}
                {displayedRows.map((rowObj, i) => {
                  // virtualRow가 있으면 virtualization 스타일 적용
                  const isVirtual = 'virtualRow' in rowObj && rowObj.virtualRow;
                  const row = rowObj.row;
                  // row가 getVisibleCells가 있으면 Row 타입, 아니면 Cell[]
                  const cells = typeof row.getVisibleCells === 'function' ? row.getVisibleCells() : row;
                  return (
                    <TableRow
                      data-index={isVirtual ? rowObj.virtualRow.index : i}
                      key={typeof row.id !== 'undefined' ? row.id : i}
                      onClick={() => {
                        if (typeof row.getVisibleCells === 'function') {
                          onClickRow?.(row.original);
                        } else if (Array.isArray(row) && row.length > 0 && row[0].row?.original) {
                          onClickRow?.(row[0].row.original);
                        }
                      }}
                      className={onClickRow !== undefined ? 'clickable' : ''}
                    >
                      {cells.map((cell) => {
                        const isPinned = cell.column.getIsPinned();
                        const isLastLeftPinned = isPinned === 'left' && cell.column.getIsLastColumn('left');
                        const isFirstRightPinned = isPinned === 'right' && cell.column.getIsFirstColumn('right');
                        return (
                          <Fragment key={cell.id}>
                            <TableCell
                              data-last-left-pinned={isLastLeftPinned}
                              data-first-right-pinned={isFirstRightPinned}
                              data-no-hover={cell.column.columnDef.meta?.activeHover ? 'true' : undefined}
                              style={getFixedCellStyle(cell.column)}
                            >
                              {flexRender(cell.column.columnDef.cell, cell.getContext()) as React.ReactNode}
                            </TableCell>
                          </Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
                {paddingBottom > 0 && (
                  <TableRow>
                    <td style={{ height: `${paddingBottom}px` }} />
                  </TableRow>
                )}
                {emptyRowCount !== 0 &&
                  displayedRows.length < emptyRowCount &&
                  Array.from({ length: emptyRowCount - displayedRows.length }).map((_, index) => (
                    <TableRow key={`empty-row-${index}`} data-empty={true}>
                      <TableCell
                        colSpan={table.getAllColumns().length}
                        style={{
                          height: `${60}px`,
                        }}
                      />
                    </TableRow>
                  ))}
              </TableBody>
            </table>
          )}
        </BodyTableContainer>
      </ScrollArea>
    </>
  );
};
