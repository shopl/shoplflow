/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import type { Cell, Row } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { VirtualItem } from '@tanstack/react-virtual';
import React, { Fragment, useCallback, useEffect, useState } from 'react';

import { ScrollArea, Skeleton } from '@shoplflow/base';

import { useTable } from '../../../context';
import { getColumnActiveHoverDataAttribute, getCommonPinningStyles, getTableHeadSortModel } from '../../../utils';
import {
  BodyTableContainer,
  HeaderTableContainer,
  TableBody,
  TableCell,
  FooterTableContainer,
  TableFooter,
  TableFoot,
  BottomContainer,
  ScrollContainer,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table.styled';
import TableHeadCell from '../TableHeadCell';

import { SortableRow } from './SortableRow';

// 셀 스켈레톤 컴포넌트
const CellSkeleton = () => <Skeleton styleVar='rectangle' width='80%' height='20px' />;

// 스켈레톤 행 컴포넌트
interface SkeletonRowsProps {
  rowCount: number;
  columns: Array<{ id: string }>;
  enableDragDrop?: boolean;
}

const SkeletonRows = ({ rowCount, columns, enableDragDrop }: SkeletonRowsProps) => (
  <>
    {Array.from({ length: rowCount }).map((_, rowIndex) => (
      <TableRow key={`skeleton-row-${rowIndex}`}>
        {enableDragDrop && (
          <TableCell style={{ width: 40, minWidth: 40, height: '60px' }}>
            <CellSkeleton />
          </TableCell>
        )}
        {columns.map((column) => (
          <TableCell key={column.id} style={{ height: '60px' }}>
            <CellSkeleton />
          </TableCell>
        ))}
      </TableRow>
    ))}
  </>
);

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
  enableDragDrop?: boolean;
  dragColWidth?: 32 | 40;
  onRowReorder?: (newOrder: any[]) => void;
  shouldFixDragHandle?: boolean;
  footerRowProps?: {
    style?: React.CSSProperties;
  };
  headerRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
  bodyRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
};

export const FixedTable = ({ tableState }: { tableState: TableStateProps }): React.ReactElement => {
  const {
    table,
    headerRef,
    bodyRef,
    tableScrollRef,
    footerRef,
    hasToolbar,
    hasPagination,
    onClickRow,
    hasFooter,
    hasFilterBar,
    isLoading,
  } = useTable();
  const {
    displayedRows: initialDisplayedRows,
    paddingTop,
    paddingBottom,
    isEmpty,
    emptyElement,
    children,
    isSticky,
    stickyHeaderTopPosition,
    maxHeight = '100%',
    emptyRowCount = 8,
    enableDragDrop = false,
    dragColWidth = 40,
    onRowReorder,
    shouldFixDragHandle = false,
    footerRowProps,
    headerRowStyle,
    bodyRowStyle,
  } = tableState;

  const [displayedRows, setDisplayedRows] = useState(initialDisplayedRows);

  // DnD 센서 설정 - drag handle만 드래그 가능하도록 설정
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // 스크롤 동기화 이벤트 핸들러
  const handleScroll = useCallback(() => {
    if (!bodyRef.current) return;

    const bodyScrollLeft = bodyRef.current.scrollLeft;

    if (headerRef.current) {
      headerRef.current.scrollLeft = bodyScrollLeft;
    }

    if (footerRef.current) {
      footerRef.current.scrollLeft = bodyScrollLeft;
    }

    if (tableScrollRef.current) {
      tableScrollRef.current.scrollLeft = bodyScrollLeft;
    }
  }, [bodyRef, headerRef, footerRef, tableScrollRef]);

  // 스크롤바 스크롤 동기화 이벤트 핸들러 (스크롤바를 드래그할 때 bodyRef로 전달하면 handleScroll이 처리)
  const handleScrollBarScroll = useCallback(() => {
    if (!tableScrollRef.current || !bodyRef.current) return;
    bodyRef.current.scrollLeft = tableScrollRef.current.scrollLeft;
  }, [bodyRef, tableScrollRef]);

  const dragColWidthPx = `${dragColWidth}px`;

  const TableColumns = ({ showDragHandle = false }: { showDragHandle?: boolean }) => {
    // ✅ Leaf columns만 사용 (group 제외)
    const leafColumns = table.getVisibleLeafColumns();

    return (
      <colgroup>
        {showDragHandle && (
          <col style={{ width: dragColWidthPx, minWidth: dragColWidthPx, maxWidth: dragColWidthPx }} />
        )}
        {leafColumns.map((column) => {
          const size = column.columnDef.size;
          const minSize = column.columnDef.minSize ?? size;
          const maxSize = column.columnDef.maxSize ?? size;

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

  const getFixedCellStyle = (column: any, isHeader = false, isFooter = false) => {
    const baseStyle = {
      ...getCommonPinningStyles(column),
      ...(isHeader
        ? column.columnDef.meta?.headerProps?.style
        : isFooter
          ? column.columnDef.meta?.footerProps?.style
          : column.columnDef.meta?.cellProps?.style),
    };

    const size = column.columnDef.size;
    const minSize = column.columnDef.minSize;
    const maxSize = column.columnDef.maxSize;

    // enableDragDrop이 true이고 dragHandle이 고정되어 있고 left로 고정된 경우 dragHandle 너비(40px)를 고려
    const isPinned = column.getIsPinned();
    const adjustedLeft =
      shouldFixDragHandle && isPinned === 'left' && baseStyle.left
        ? `${parseFloat(baseStyle.left.toString()) + dragColWidth}px`
        : baseStyle.left;

    return {
      ...baseStyle,
      left: adjustedLeft,
      ...(size === 0
        ? { width: '100%' }
        : {
            width: `${size}px`,
            minWidth: `${minSize}px`,
            maxWidth: `${maxSize}px`,
          }),
    };
  };

  // Drag 종료
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setDisplayedRows((rows) => {
        const oldIndex = rows.findIndex((r) => {
          const row = r.row;
          const id = typeof row.id !== 'undefined' ? row.id : rows.indexOf(r);
          return id === active.id;
        });
        const newIndex = rows.findIndex((r) => {
          const row = r.row;
          const id = typeof row.id !== 'undefined' ? row.id : rows.indexOf(r);
          return id === over.id;
        });

        const newOrder = arrayMove(rows as Array<{ row: Row<any>; virtualRow?: VirtualItem }>, oldIndex, newIndex);

        // 콜백 호출
        if (onRowReorder) {
          const reorderedData = newOrder
            .map((r) => {
              const row = r.row;
              if (typeof row.getVisibleCells === 'function') {
                return row.original;
              } else if (Array.isArray(row) && row.length > 0 && row[0].row?.original) {
                return row[0].row.original;
              }
              return null;
            })
            .filter(Boolean);
          onRowReorder(reorderedData);
        }

        return newOrder;
      });
    }
  };

  const rowIds = React.useMemo(
    () =>
      displayedRows.map((r) => r.row.id || `row-${r.row.original?.id || r.row.original?.userName?.name || 'fallback'}`),
    [displayedRows],
  );

  useEffect(() => {
    setDisplayedRows(initialDisplayedRows);
  }, [initialDisplayedRows]);

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
          <TableColumns showDragHandle={enableDragDrop} />
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup, i) => {
              const rowStyle = typeof headerRowStyle === 'function' ? headerRowStyle(i, headerGroup) : headerRowStyle;

              return (
                <TableRow key={headerGroup.id} style={rowStyle}>
                  {enableDragDrop && (
                    <TableHead
                      colSpan={1}
                      style={
                        shouldFixDragHandle
                          ? {
                              position: 'sticky',
                              left: 0,
                              zIndex: 11,
                              width: dragColWidthPx,
                              minWidth: dragColWidthPx,
                              maxWidth: dragColWidthPx,
                              backgroundColor: rowStyle?.backgroundColor || 'neutral400',
                            }
                          : rowStyle
                            ? {
                                backgroundColor: rowStyle?.backgroundColor || 'neutral400',
                                height: rowStyle?.height,
                                maxHeight: rowStyle?.maxHeight,
                                minHeight: rowStyle?.minHeight,
                              }
                            : undefined
                      }
                      data-pinned={shouldFixDragHandle ? 'left' : undefined}
                      data-last-left-pinned={shouldFixDragHandle ? false : undefined}
                    />
                  )}
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

                    // ✅ Group 헤더 처리
                    let headerStyle = {};
                    if (header.colSpan > 1) {
                      const leafHeaders = header.getLeafHeaders();
                      const groupId = header.column.id;
                      const totalWidth = leafHeaders
                        .filter((leaf) => leaf.column.id !== groupId)
                        .reduce((sum: number, leaf: any) => {
                          const size = leaf.column.columnDef.size || 0;
                          return sum + size;
                        }, 0);

                      // ✅ 첫 번째 leaf의 pinning 정보 사용
                      const firstLeaf = leafHeaders[0];
                      const firstLeafPinned = firstLeaf.column.getIsPinned();

                      headerStyle = {
                        ...header.column.columnDef.meta?.headerProps?.style,
                        width: `${totalWidth}px`,
                        minWidth: `${totalWidth}px`,
                        maxWidth: `${totalWidth}px`,
                        left: firstLeafPinned === 'left' ? `${firstLeaf.column.getStart('left')}px` : undefined,
                        right: firstLeafPinned === 'right' ? `${firstLeaf.column.getAfter('right')}px` : undefined,
                        position: firstLeafPinned ? 'sticky' : 'relative',
                        zIndex: firstLeafPinned ? 10 : 0,
                      };
                    } else {
                      headerStyle = getFixedCellStyle(header.column, true);
                    }

                    const hasNoBorderRight =
                      (headerStyle as React.CSSProperties).borderRight === 'none' ||
                      header.column.columnDef.meta?.headerProps?.style?.borderRight === 'none';

                    return (
                      <TableHead
                        data-last-left-pinned={isLastLeftPinned}
                        data-first-right-pinned={isFirstRightPinned}
                        data-pinned={isPinned}
                        data-no-border-right={hasNoBorderRight}
                        key={header.id}
                        style={{
                          ...headerStyle,
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
        <BodyTableContainer hasPagination={hasPagination} hasFooter={hasFooter} onScroll={handleScroll} ref={bodyRef}>
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={rowIds} strategy={verticalListSortingStrategy}>
              <table
                style={{
                  width: '100%',
                  overflow: 'auto',
                  tableLayout: 'fixed',
                }}
              >
                <TableColumns showDragHandle={enableDragDrop} />
                <TableBody>
                  {/* 가상화 시 상단 패딩 */}
                  {paddingTop > 0 && (
                    <TableRow>
                      <td style={{ height: `${paddingTop}px` }} />
                    </TableRow>
                  )}
                  {/* 로딩 중: 스켈레톤 행 표시 */}
                  {isLoading && (
                    <SkeletonRows
                      rowCount={emptyRowCount || 8}
                      columns={table.getVisibleLeafColumns()}
                      enableDragDrop={enableDragDrop}
                    />
                  )}
                  {/* 데이터 없음: Table.Empty 또는 emptyElement 표시 */}
                  {!isLoading && isEmpty && (
                    <TableRow>
                      <TableCell
                        colSpan={table.getAllColumns().length + (enableDragDrop ? 1 : 0)}
                        style={{ padding: 0, border: 'none' }}
                      >
                        {children || emptyElement}
                      </TableCell>
                    </TableRow>
                  )}
                  {/* 데이터 행 렌더링 */}
                  {!isLoading &&
                    !isEmpty &&
                    displayedRows.map((rowObj, i) => {
                      const isVirtual = 'virtualRow' in rowObj && rowObj.virtualRow;
                      const row = rowObj.row;
                      const cells = typeof row.getVisibleCells === 'function' ? row.getVisibleCells() : row;
                      const hasPinned = cells.some((cell: any) => cell.column.getIsPinned());
                      const rowId = row.id || `row-${row.original?.id || row.original?.userName?.name || i}`;

                      if (enableDragDrop) {
                        return (
                          <SortableRow
                            key={rowId}
                            row={row}
                            index={i}
                            cells={cells}
                            hasPinned={hasPinned}
                            onClickRow={onClickRow}
                            getFixedCellStyle={getFixedCellStyle}
                            showDragHandle={true}
                            shouldFixDragHandle={shouldFixDragHandle}
                            dragColWidth={dragColWidth}
                            bodyRowStyle={bodyRowStyle}
                          />
                        );
                      }

                      const rowStyle =
                        typeof bodyRowStyle === 'function' ? bodyRowStyle(i, row.original) : bodyRowStyle;
                      const cellBackgroundColor = rowStyle?.backgroundColor;
                      return (
                        <TableRow
                          data-index={isVirtual ? rowObj.virtualRow.index : i}
                          data-has-pinned={hasPinned}
                          key={rowId}
                          style={rowStyle}
                          onClick={() => {
                            if (typeof row.getVisibleCells === 'function') {
                              onClickRow?.(row.original);
                            } else if (Array.isArray(row) && row.length > 0 && row[0].row?.original) {
                              onClickRow?.(row[0].row.original);
                            }
                          }}
                          className={onClickRow !== undefined ? 'clickable' : `row-${i}`}
                        >
                          {cells.map((cell: any) => {
                            const isPinned = cell.column.getIsPinned();
                            const isLastLeftPinned = isPinned === 'left' && cell.column.getIsLastColumn('left');
                            const isFirstRightPinned = isPinned === 'right' && cell.column.getIsFirstColumn('right');
                            // 드래그 앤 드롭 후 인덱스 업데이트를 위해 cell context의 row.index를 오버라이드
                            const cellContext = cell.getContext();
                            const overriddenContext = {
                              ...cellContext,
                              row: {
                                ...cellContext.row,
                                index: i,
                              },
                            };
                            return (
                              <Fragment key={cell.id}>
                                <TableCell
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
                                    ...getFixedCellStyle(cell.column),
                                    ...(cellBackgroundColor && {
                                      backgroundColor: cellBackgroundColor,
                                    }),
                                  }}
                                >
                                  {isLoading ? (
                                    <CellSkeleton />
                                  ) : (
                                    (flexRender(cell.column.columnDef.cell, overriddenContext) as React.ReactNode)
                                  )}
                                </TableCell>
                              </Fragment>
                            );
                          })}
                        </TableRow>
                      );
                    })}
                  {/* 가상화 시 하단 패딩 */}
                  {paddingBottom > 0 && (
                    <TableRow>
                      <td style={{ height: `${paddingBottom}px` }} />
                    </TableRow>
                  )}
                  {/* 데이터 행이 emptyRowCount 미만일 때 빈 행으로 채움 */}
                  {emptyRowCount !== 0 &&
                    displayedRows.length < emptyRowCount &&
                    !isLoading &&
                    !isEmpty &&
                    Array.from({ length: emptyRowCount - displayedRows.length }).map((_, index) => (
                      <TableRow key={`empty-row-${index}`} data-empty={true}>
                        <TableCell
                          colSpan={table.getAllColumns().length + (enableDragDrop ? 1 : 0)}
                          style={{
                            height: `${60}px`,
                          }}
                        />
                      </TableRow>
                    ))}
                </TableBody>
              </table>
            </SortableContext>
          </DndContext>
        </BodyTableContainer>
      </ScrollArea>

      {/* TablePagination이 없을 때도 하단 스크롤바 노출 (테이블 "안쪽" 하단) */}
      {!hasPagination && (
        <BottomContainer
          ref={footerRef}
          isEndOfPage={true}
          hasFilterBar={hasFilterBar}
          hasToolbar={hasToolbar}
          hideBorder
        >
          <ScrollContainer ref={tableScrollRef} onScroll={handleScrollBarScroll} isPagination={false}>
            <table
              style={{
                width: enableDragDrop ? (table.getTotalSize() || 0) + dragColWidth : table.getTotalSize() || '100%',
                height: '6px',
                tableLayout: 'fixed',
              }}
            >
              <TableColumns showDragHandle={enableDragDrop} />
            </table>
          </ScrollContainer>
        </BottomContainer>
      )}

      {/* Footer */}
      {hasFooter && (
        <FooterTableContainer ref={footerRef} isSticky={isSticky} hasPagination={hasPagination} hasHeader={hasToolbar}>
          <table
            style={{
              width: '100%',
              overflow: 'auto',
              tableLayout: 'fixed',
            }}
          >
            <TableColumns showDragHandle={enableDragDrop} />
            <TableFooter>
              {table.getFooterGroups().map((footerGroup) => (
                <TableRow key={footerGroup.id} style={footerRowProps?.style}>
                  {enableDragDrop && (
                    <TableFoot
                      colSpan={1}
                      style={
                        shouldFixDragHandle
                          ? {
                              position: 'sticky',
                              left: 0,
                              zIndex: 11,
                              width: dragColWidthPx,
                              minWidth: dragColWidthPx,
                              maxWidth: dragColWidthPx,
                              backgroundColor: footerRowProps?.style?.backgroundColor || 'inherit',
                            }
                          : undefined
                      }
                      data-last-left-pinned={shouldFixDragHandle ? false : undefined}
                    />
                  )}
                  {footerGroup.headers.map((footer) => {
                    const isPinned = footer.column.getIsPinned();
                    const isLastLeftPinned = isPinned === 'left' && footer.column.getIsLastColumn('left');
                    const isFirstRightPinned = isPinned === 'right' && footer.column.getIsFirstColumn('right');

                    const columnRelativeDepth = footer.depth - footer.column.depth;

                    if (!footer.isPlaceholder && columnRelativeDepth > 1 && footer.id === footer.column.id) {
                      return null;
                    }

                    let rowSpan = 1;
                    if (footer.isPlaceholder) {
                      const leafs = footer.getLeafHeaders();
                      rowSpan = leafs[leafs.length - 1].depth - footer.depth;
                    }

                    return (
                      <TableFoot
                        data-last-left-pinned={isLastLeftPinned}
                        data-first-right-pinned={isFirstRightPinned}
                        data-pinned={isPinned}
                        key={footer.id}
                        style={getFixedCellStyle(footer.column, false, true)}
                        colSpan={footer.colSpan}
                        rowSpan={rowSpan}
                      >
                        {footer.isPlaceholder
                          ? null
                          : (flexRender(footer.column.columnDef.footer, footer.getContext()) as React.ReactNode)}
                      </TableFoot>
                    );
                  })}
                </TableRow>
              ))}
            </TableFooter>
          </table>
        </FooterTableContainer>
      )}
    </>
  );
};
