/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Cell, Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { VirtualItem } from '@tanstack/react-virtual';
import React, { useCallback } from 'react';

import { ScrollArea } from '@shoplflow/base';

import { useTable } from '../../../context';
import { getColumnActiveHoverDataAttribute, getCommonPinningStyles, getTableHeadSortModel } from '../../../utils';
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
  headerRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
  bodyRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
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
    headerRowStyle,
    bodyRowStyle,
  } = tableState;

  // 스크롤 동기화 이벤트 핸들러(테이블 바디와 테이블 헤더 스크롤 동기화)
  const handleScroll = useCallback(() => {
    if (!bodyRef.current) return;

    const bodyScrollLeft = bodyRef.current.scrollLeft;

    if (headerRef.current) {
      headerRef.current.scrollLeft = bodyScrollLeft;
    }

    if (tableScrollRef.current) {
      tableScrollRef.current.scrollLeft = bodyScrollLeft;
    }
  }, [bodyRef, headerRef, tableScrollRef]);

  // 동적 리사이징을 위한 컬럼 사이즈 변수 계산
  const columnSizeVars = React.useMemo(() => {
    const headers = table.getFlatHeaders();
    const colSizes: Record<string, number | string> = {};
    const visibleHeaders = headers.filter((header) => header.column.getIsVisible());

    // 마지막 컬럼 찾기
    // const lastLeafColumns = table.getLeafHeaders();
    // const lastColumnId = lastLeafColumns[lastLeafColumns.length - 1]?.id;

    visibleHeaders.forEach((header) => {
      const currentSize = header.column.getSize();
      const defaultSize = header.column.columnDef.size;
      const maxSize = header.column.columnDef.maxSize;
      // const isLastColumn = header.id === lastColumnId;
      const isPinned = header.column.getIsPinned();
      const canResize = header.column.getCanResize();

      let size;
      // 고정되지 않은 마지막 컬럼만 auto
      // if(isLastColumn && !isPinned)

      // 고정되지 않은 마지막 컬럼 + 리사이즈 가능한 경우만 auto
      if (!isPinned && canResize) {
        size = 'auto';
      } else if (currentSize !== undefined) {
        size = currentSize;
      } else if (typeof defaultSize === 'number') {
        size = defaultSize;
      } else {
        size = 200;
      }

      // maxSize 제한 적용 (마지막 컬럼 제외)
      // if(!isLastColumn && maxSize && typeof size === 'number' && size > maxSize)
      if (maxSize && typeof size === 'number' && size > maxSize) {
        size = maxSize;
      }

      colSizes[`--header-${header.id}-size`] = size;
      colSizes[`--col-${header.column.id}-size`] = size;
    });

    return colSizes;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- column sizing state drives derived layout vars
  }, [table.getState().columnSizingInfo, table.getState().columnSizing]);

  // 전체 테이블 너비 계산 (고정 컬럼 포함)
  const totalTableWidth = React.useMemo(() => {
    return table.getLeftTotalSize() + table.getCenterTotalSize() + table.getRightTotalSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- column sizing/pinning state drives derived width
  }, [table.getState().columnSizingInfo, table.getState().columnSizing, table.getState().columnPinning]);

  // 리사이징 가능한 셀 스타일 생성
  const getResizableCellStyle = (column, isHeader = false) => {
    // 컬럼의 기본 스타일 (고정, 크기 등)
    const baseStyle = {
      ...getCommonPinningStyles(column),
      ...(isHeader ? column.columnDef.meta?.headerProps?.style : column.columnDef.meta?.cellProps?.style),
    };

    const colId = column.id;
    const headerId = isHeader ? colId : null; // 헤더일 경우만 headerId 사용
    const minSize = column.columnDef.minSize || 100;
    const maxSize = column.columnDef.maxSize;
    const sizeKey = isHeader ? `--header-${headerId}-size` : `--col-${colId}-size`;
    const size = columnSizeVars[sizeKey];
    // const isLastColumn = column.columnDef.meta?.isLastColumn;
    const canResize = column.getCanResize();
    const isPinned = column.getIsPinned();

    // 리사이즈 불가능한 컬럼은 말줄임표 적용
    // 단, pinned 컬럼은 셀 shadow(::after)가 td 밖으로 나가야 해서 overflow hidden을 피한다.
    const ellipsisStyle =
      !canResize && !isPinned
        ? {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }
        : {};

    return {
      ...baseStyle,
      ...(size === 'auto' ? { width: 'auto', flex: '1 1 auto' } : { width: size ? `${size}px` : 'auto' }),
      minWidth: `${minSize}px`,
      // maxWidth: isLastColumn && canResize ? 'none' : `${maxSize || 'none'}`,
      maxWidth: canResize ? 'none' : `${maxSize || 'none'}`,
      ...ellipsisStyle,
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
            width: `${totalTableWidth}px`,
            minWidth: '100%',
            tableLayout: 'fixed',
          }}
        >
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, i) => {
              const rowStyle = typeof headerRowStyle === 'function' ? headerRowStyle(i, headerGroup) : headerRowStyle;
              return (
                <TableRow key={headerGroup.id} style={rowStyle}>
                  {headerGroup.headers.map((header) => {
                    const isPinned = header.column.getIsPinned();
                    /**
                     * 멀티 헤더(depth 0/1)에서는 header.column.getIsLastColumn('left')가 false로 떨어질 수 있어
                     * leaf 헤더 기준으로 마지막 pinned 경계를 계산한다.
                     */
                    const leafHeaders = header.getLeafHeaders();
                    const hasLastLeftPinnedLeaf = leafHeaders.some(
                      (leaf) => leaf.column.getIsPinned() === 'left' && leaf.column.getIsLastColumn('left'),
                    );
                    const hasFirstRightPinnedLeaf = leafHeaders.some(
                      (leaf) => leaf.column.getIsPinned() === 'right' && leaf.column.getIsFirstColumn('right'),
                    );

                    const isLastLeftPinned =
                      (isPinned === 'left' && header.column.getIsLastColumn('left')) || hasLastLeftPinnedLeaf;
                    const isFirstRightPinned =
                      (isPinned === 'right' && header.column.getIsFirstColumn('right')) || hasFirstRightPinnedLeaf;

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
                        style={{
                          ...getResizableCellStyle(header.column, true),
                          ...(rowStyle && {
                            backgroundColor: rowStyle.backgroundColor,
                            height: rowStyle.height,
                            maxHeight: rowStyle.maxHeight,
                            minHeight: rowStyle.minHeight,
                          }),
                        }}
                        colSpan={header.colSpan}
                        rowSpan={rowSpan}
                        sortable={getTableHeadSortModel(header).showSortMenu}
                        filterable={header.column.getCanFilter()}
                        data-sortable={getTableHeadSortModel(header).showSortMenu}
                        data-filterable={header.column.getCanFilter()}
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
              );
            })}
          </TableHeader>
        </table>
      </HeaderTableContainer>
      <ScrollArea autoHeightMax={maxHeight} autoHeight>
        <BodyTableContainer hasPagination={hasPagination} onScroll={handleScroll} ref={bodyRef}>
          <table
            style={{
              width: `${totalTableWidth}px`,
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
                    const rowStyle = typeof bodyRowStyle === 'function' ? bodyRowStyle(i, row.original) : bodyRowStyle;
                    const cellBackgroundColor = rowStyle?.backgroundColor;
                    return (
                      <TableRow
                        data-index={isVirtual ? rowObj.virtualRow.index : i}
                        key={typeof row.id !== 'undefined' ? row.id : i}
                        onClick={() => {
                          onClickRow?.(row.original);
                        }}
                        className={onClickRow !== undefined ? 'clickable' : ''}
                        style={rowStyle}
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
                              data-no-hover={getColumnActiveHoverDataAttribute(
                                cell.column.columnDef.meta?.activeHover,
                                cell.row.original,
                              )}
                              data-has-custom-style={
                                cell.column.columnDef.meta?.cellProps?.style?.backgroundColor ? 'true' : undefined
                              }
                              style={{
                                ...getResizableCellStyle(cell.column),
                                ...(cellBackgroundColor && {
                                  backgroundColor: cellBackgroundColor,
                                }),
                              }}
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
