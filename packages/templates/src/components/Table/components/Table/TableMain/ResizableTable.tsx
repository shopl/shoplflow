import React, { useCallback } from 'react';
import {
  BodyTableContainer,
  HeaderTableContainer,
  TableBody,
  TableCell,
  TableResizer,
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

export const ResizableTable = ({ tableState }: { tableState: TableStateProps }) => {
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

  // 동적 리사이징을 위한 컬럼 사이즈 변수 계산
  const columnSizeVars = React.useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes: { [key: string]: number | string } = {}; // string 타입도 허용
    const visibleHeaders = headers.filter((header) => header.column.getIsVisible());

    // 마지막 컬럼 찾기 (최상위 레벨에서의 마지막 컬럼)
    const lastLeafColumns = table.getLeafHeaders();
    const lastColumnId = lastLeafColumns[lastLeafColumns.length - 1]?.id;

    visibleHeaders.forEach((header) => {
      const currentSize = header.column.getSize();
      const defaultSize = header.column.columnDef.size;
      const maxSize = header.column.columnDef.maxSize;
      const isLastColumn = header.id === lastColumnId;

      let size;
      if (isLastColumn) {
        // 마지막 컬럼은 남은 공간을 모두 차지하도록 설정
        size = 'auto'; // 또는 "1fr"
      } else if (currentSize !== undefined) {
        // 리사이징된 크기 사용
        size = currentSize;
      } else if (typeof defaultSize === 'number') {
        // 기본 크기가 숫자인 경우
        size = defaultSize;
      } else {
        // 자동 너비인 경우 기본값 200px
        size = 200;
      }

      // maxSize 제한 적용 (마지막 컬럼 제외)
      if (!isLastColumn && maxSize && typeof size === 'number' && size > maxSize) {
        size = maxSize;
      }

      colSizes[`--header-${header.id}-size`] = size;
      colSizes[`--col-${header.column.id}-size`] = size;
    });

    return colSizes;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  // 리사이징 가능한 셀 스타일 생성
  const getResizableCellStyle = (column, isHeader = false) => {
    // 컬럼의 기본 스타일 (고정, 크기 등)
    const baseStyle = {
      ...getCommonPinningStyles(column),
      ...(isHeader ? column.columnDef.meta?.headerProps?.style : column.columnDef.meta?.cellProps?.style),
    } as React.CSSProperties;

    const colId = column.id;
    const headerId = isHeader ? colId : null; // 헤더일 경우만 headerId 사용
    const minSize = column.columnDef.minSize || 100;
    const maxSize = column.columnDef.maxSize;
    const sizeKey = isHeader ? `--header-${headerId}-size` : `--col-${colId}-size`;
    const size = columnSizeVars[sizeKey];
    const isLastColumn = column.columnDef.meta?.isLastColumn;

    return {
      ...baseStyle,
      ...(size === 'auto' ? { width: 'auto', flex: '1 1 auto' } : { width: size ? `${size}px` : 'auto' }),
      minWidth: `${minSize}px`,
      maxWidth: isLastColumn ? 'none' : `${maxSize || 'none'}`,
    };
  };

  return (
    <>
      <HeaderTableContainer
        hasHeader={hasToolbar}
        isSticky={isSticky}
        stickyHeaderMarginTop={stickyHeaderTopPosition}
        ref={headerRef}
      >
        <table
          style={{
            width: `${table.getCenterTotalSize()}px`,
            minWidth: '100%',
            tableLayout: 'fixed',
          }}
        >
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
                      style={getResizableCellStyle(header.column, true)}
                      colSpan={header.colSpan}
                      rowSpan={rowSpan}
                    >
                      <TableHeadCell header={header} />

                      {/* 리사이징 핸들러 */}
                      {header.column.getCanResize() && (
                        <TableResizer
                          {...{
                            onDoubleClick: () => header.column.resetSize(),
                            onMouseDown: header.getResizeHandler(),
                            onTouchStart: header.getResizeHandler(),
                            className: `resizer ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                          }}
                        />
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
        </table>
      </HeaderTableContainer>
      <ScrollArea autoHeightMax={maxHeight} autoHeight>
        <BodyTableContainer hasPagination={hasPagination} onScroll={handleScroll} ref={bodyRef}>
          <table
            style={{
              width: `${table.getCenterTotalSize()}px`,
              minWidth: '100%',
              tableLayout: 'fixed',
            }}
          >
            <TableBody>
              {isEmpty ? (
                <TableRow>
                  <TableCell
                    colSpan={table.getAllColumns().length}
                    style={{
                      height: '200px',
                      textAlign: 'center',
                      verticalAlign: 'middle',
                    }}
                  >
                    {children || emptyElement}
                  </TableCell>
                </TableRow>
              ) : (
                <>
                  {paddingTop > 0 && (
                    <TableRow>
                      <td style={{ height: `${paddingTop}px` }} />
                    </TableRow>
                  )}
                  {displayedRows.map((rowObj, i) => {
                    const isVirtual = 'virtualRow' in rowObj && rowObj.virtualRow;
                    const row = rowObj.row;
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
                            <TableCell
                              key={cell.id}
                              data-last-left-pinned={isLastLeftPinned}
                              data-first-right-pinned={isFirstRightPinned}
                              data-no-hover={cell.column.columnDef.meta?.activeHover ? 'true' : undefined}
                              style={getResizableCellStyle(cell.column)}
                            >
                              {flexRender(cell.column.columnDef.cell, cell.getContext()) as React.ReactNode}
                            </TableCell>
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
                </>
              )}
            </TableBody>
          </table>
        </BodyTableContainer>
      </ScrollArea>
    </>
  );
};
