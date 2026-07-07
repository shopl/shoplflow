/* eslint-disable @typescript-eslint/no-unsafe-return, react-hooks/exhaustive-deps */
import type { Row, Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { useVirtualizer } from '@tanstack/react-virtual';
import React, { useCallback, useMemo, useRef } from 'react';
import { useTable } from '../../../context';

import type { ScrollbarRefType } from '@shoplflow/base';
import { Skeleton } from '@shoplflow/base';

import { useResponsiveColumnLayout, useResponsiveViewportWidth } from '../../../hooks/useVirtualTableResponsiveLayout';
import type { TableBodyRowStyle } from '../../../types/TableTypes';
import { getColumnActiveHoverDataAttribute, getCommonPinningStyles, resolveBodyRowStyle } from '../../../utils';
import TableHeadCell from '../TableHeadCell';

import {
  PinnedColumnEdgeShadow,
  VirtualTableBodyGrid,
  VirtualTableBodyPinnedCell,
  VirtualTableBodyRow,
  VirtualTableBodyUnpinnedCell,
  VirtualTableBodyUnpinnedSlice,
  VirtualTableGroupHeaderCell,
  VirtualTableHeaderInner,
  VirtualTableHeaderRoot,
  VirtualTableHeaderRow,
  VirtualTableHorizontalVirtualTrack,
  VirtualTableLeafHeaderPinnedLeft,
  VirtualTableLeafHeaderPinnedRight,
  VirtualTableLeafHeaderUnpinnedCell,
  VirtualTableRoot,
  VirtualTableScrollAreaInner,
  VirtualTableVerticalVirtualTrack,
  VirtualTableVirtualizedColumnsOuter,
} from './VirtualTable.styled';

// 셀 스켈레톤 컴포넌트
const CellSkeleton = () => <Skeleton styleVar='rectangle' width='80%' height='20px' />;

// Forward declarations
interface VirtualTableHeaderProps<T> {
  table: Table<T>;
  headerRef: React.RefObject<HTMLDivElement>;
  getFixedCellStyle: (column: any, isHeader?: boolean) => React.CSSProperties;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  scrollViewportRef?: React.RefObject<HTMLElement | null>;
  onVirtualItemsChange?: (virtualItems: VirtualItem[]) => void;
  onHeaderScroll?: () => void;
  viewportWidth: number;
}

interface VirtualTableBodyProps<T> {
  table: Table<T>;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  getFixedCellStyle: (column: any, isHeader?: boolean) => React.CSSProperties;
  headerRef: React.RefObject<HTMLDivElement>;
  headerVirtualItems?: VirtualItem[];
  bodyRef: React.RefObject<HTMLDivElement>;
  scrollViewportRef?: React.RefObject<HTMLElement | null>;
  onBodyScroll?: () => void;
  viewportWidth: number;
  bodyRowStyle?: TableBodyRowStyle;
}

interface TableBodyRowProps<T> {
  row: Row<T>;
  isRowSelected: boolean;
  virtualRow: VirtualItem;
  rowVirtualizer: Virtualizer<HTMLDivElement, Element>;
  getFixedCellStyle: (column: any, isHeader?: boolean) => React.CSSProperties;
  tableContainerRef: React.RefObject<HTMLDivElement>;
  columnVirtualizer: Virtualizer<HTMLDivElement, HTMLDivElement>;
  unpinnedColumns: any[];
  scrollMargin?: number;
  totalUnpinnedWidth: number;
  totalTableWidth: number;
  getUnpinnedColumnWidth: (index: number) => number;
  headerVirtualItems?: VirtualItem[];
  isLoading?: boolean;
  bodyRowStyle?: TableBodyRowStyle;
}

interface GroupHeaderRowProps {
  headerGroup: any;
  getActualColumnSize: (column: any) => number;
}

interface LeafHeaderRowProps {
  leftPinnedColumns: any[];
  rightPinnedColumns: any[];
  unpinnedColumns: any[];
  virtualItems: VirtualItem[];
  totalUnpinnedWidth: number;
  getActualColumnSize: (column: any) => number;
  getUnpinnedColumnWidth: (index: number) => number;
}

// 그룹 헤더 행 컴포넌트 (0depth - FixedTable과 동일하게 모든 헤더를 순서대로 렌더링)
const GroupHeaderRow = React.memo(({ headerGroup, getActualColumnSize }: GroupHeaderRowProps): React.ReactElement => {
  return (
    <>
      {headerGroup.headers.map((header: any) => {
        const leafHeaders = header.getLeafHeaders ? header.getLeafHeaders() : [];
        const groupId = header.column.id;

        // groupId와 같은 id를 가진 리프는 제외 (FixedTable과 동일)
        const filteredLeafHeaders = leafHeaders.filter((leaf: any) => leaf.column.id !== groupId);

        // 첫 번째 리프의 pinning 정보 사용 (FixedTable과 동일)
        const firstLeaf = filteredLeafHeaders[0];
        const firstLeafPinned = firstLeaf?.column.getIsPinned();

        // 그룹 헤더 너비: groupId 제외한 리프 컬럼의 너비 합
        const totalWidth = filteredLeafHeaders.reduce((sum: number, leaf: any) => {
          return sum + getActualColumnSize(leaf.column);
        }, 0);

        // isLastLeftPinned / isFirstRightPinned 계산
        const hasLastLeftPinnedLeaf = filteredLeafHeaders.some(
          (leaf: any) => leaf.column.getIsPinned() === 'left' && leaf.column.getIsLastColumn('left'),
        );
        const hasFirstRightPinnedLeaf = filteredLeafHeaders.some(
          (leaf: any) => leaf.column.getIsPinned() === 'right' && leaf.column.getIsFirstColumn('right'),
        );

        const positionStyle: React.CSSProperties = {
          width: `${totalWidth}px`,
          minWidth: `${totalWidth}px`,
          maxWidth: `${totalWidth}px`,
          left: firstLeafPinned === 'left' ? `${firstLeaf?.column.getStart('left')}px` : undefined,
          right: firstLeafPinned === 'right' ? `${firstLeaf?.column.getAfter('right')}px` : undefined,
        };

        return (
          <VirtualTableGroupHeaderCell
            data-last-left-pinned={hasLastLeftPinnedLeaf}
            data-first-right-pinned={hasFirstRightPinnedLeaf}
            data-pinned={firstLeafPinned || undefined}
            key={header.id}
            style={positionStyle}
          >
            {header.isPlaceholder ? null : <TableHeadCell header={header} />}
            {hasLastLeftPinnedLeaf && <PinnedColumnEdgeShadow />}
          </VirtualTableGroupHeaderCell>
        );
      })}
    </>
  );
});

GroupHeaderRow.displayName = 'GroupHeaderRow';

// 리프 헤더 행 컴포넌트 (1depth - 가상화 적용)
const LeafHeaderRow = React.memo(
  ({
    leftPinnedColumns,
    rightPinnedColumns,
    unpinnedColumns,
    virtualItems,
    totalUnpinnedWidth,
    getActualColumnSize,
    getUnpinnedColumnWidth,
  }: LeafHeaderRowProps): React.ReactElement => {
    const leftPinnedPrepared = useMemo(
      () =>
        leftPinnedColumns.map((header: any) => {
          const isPinned = header.column.getIsPinned();
          const isLastLeftPinned = isPinned === 'left' && header.column.getIsLastColumn('left');
          const headerWidth = getActualColumnSize(header.column);
          const leftPosition = header.column.getStart('left');
          return {
            header,
            isPinned,
            isLastLeftPinned,
            style: {
              width: `${headerWidth}px`,
              minWidth: `${headerWidth}px`,
              left: `${leftPosition}px`,
            } satisfies React.CSSProperties,
          };
        }),
      [leftPinnedColumns, getActualColumnSize],
    );

    const rightPinnedPrepared = useMemo(
      () =>
        rightPinnedColumns.map((header: any) => {
          const isPinned = header.column.getIsPinned();
          const isFirstRightPinned = isPinned === 'right' && header.column.getIsFirstColumn('right');
          const headerWidth = getActualColumnSize(header.column);
          const rightPosition = header.column.getAfter('right');
          return {
            header,
            isPinned,
            isFirstRightPinned,
            style: {
              width: `${headerWidth}px`,
              minWidth: `${headerWidth}px`,
              right: `${rightPosition}px`,
            } satisfies React.CSSProperties,
          };
        }),
      [rightPinnedColumns, getActualColumnSize],
    );

    const virtualItemsLayoutKey = useMemo(
      () => virtualItems.map((v) => `${v.index}:${v.start}`).join('|'),
      [virtualItems],
    );

    const unpinnedPrepared = useMemo(() => {
      return virtualItems.map((virtualColumn) => {
        const header = unpinnedColumns[virtualColumn.index];
        if (!header) return null;
        const columnWidth = getUnpinnedColumnWidth(virtualColumn.index);
        return {
          header,
          style: {
            width: `${columnWidth}px`,
            minWidth: `${columnWidth}px`,
            maxWidth: `${columnWidth}px`,
          } satisfies React.CSSProperties,
        };
      });
      // virtualItems 배열 참조는 자주 바뀌므로 가시 구간을 virtualItemsLayoutKey로 안정화
    }, [virtualItemsLayoutKey, unpinnedColumns, getUnpinnedColumnWidth]);

    return (
      <>
        {/* Left pinned columns */}
        {leftPinnedPrepared.map(({ header, isPinned, isLastLeftPinned, style }) => (
          <VirtualTableLeafHeaderPinnedLeft
            key={header.id}
            data-last-left-pinned={isLastLeftPinned}
            data-pinned={isPinned}
            style={style}
          >
            {header.isPlaceholder ? null : <TableHeadCell header={header} />}
            {isLastLeftPinned && <PinnedColumnEdgeShadow />}
          </VirtualTableLeafHeaderPinnedLeft>
        ))}

        {/* Virtualized unpinned columns (Slice Pattern) */}
        <VirtualTableVirtualizedColumnsOuter $unpinnedWidthPx={totalUnpinnedWidth}>
          <VirtualTableHorizontalVirtualTrack $translateX={virtualItems[0]?.start ?? 0}>
            {unpinnedPrepared.map((item) => {
              if (!item) return null;
              const { header, style } = item;
              return (
                <VirtualTableLeafHeaderUnpinnedCell key={header.id} style={style}>
                  <TableHeadCell header={header} />
                </VirtualTableLeafHeaderUnpinnedCell>
              );
            })}
          </VirtualTableHorizontalVirtualTrack>
        </VirtualTableVirtualizedColumnsOuter>

        {/* Right pinned columns */}
        {rightPinnedPrepared.map(({ header, isPinned, isFirstRightPinned, style }) => (
          <VirtualTableLeafHeaderPinnedRight
            key={header.id}
            data-first-right-pinned={isFirstRightPinned}
            data-pinned={isPinned}
            style={style}
          >
            {header.isPlaceholder ? null : <TableHeadCell header={header} />}
          </VirtualTableLeafHeaderPinnedRight>
        ))}
      </>
    );
  },
);

LeafHeaderRow.displayName = 'LeafHeaderRow';

const VirtualTableHeader = <T,>({
  table,
  headerRef,
  getFixedCellStyle: _getFixedCellStyle,
  tableContainerRef: _tableContainerRef,
  scrollViewportRef: _scrollViewportRef,
  onVirtualItemsChange,
  onHeaderScroll,
  viewportWidth,
}: VirtualTableHeaderProps<T>): React.ReactElement => {
  const headerGroups = table.getHeaderGroups();
  // 마지막 headerGroup이 리프 컬럼 (실제 데이터 컬럼)
  const leafHeaderGroup = headerGroups[headerGroups.length - 1];

  // 그룹 컬럼은 제외 (columnDef.columns가 있는 컬럼은 그룹 컬럼이므로 리프 헤더에서 제외)
  const allHeaders = useMemo(() => {
    const headers = leafHeaderGroup?.headers || [];
    return headers.filter((h: any) => {
      const columns = h.column.columnDef.columns;
      return !columns || columns.length === 0;
    });
  }, [leafHeaderGroup]);

  // 고정된 컬럼과 일반 컬럼 분리 - 메모이제이션 (리프 컬럼 기준)
  const { leftPinnedColumns, rightPinnedColumns, unpinnedColumns } = useMemo(() => {
    const left = allHeaders.filter((h) => h.column.getIsPinned() === 'left');
    const right = allHeaders.filter((h) => h.column.getIsPinned() === 'right');
    const unpinned = allHeaders.filter((h) => !h.column.getIsPinned());
    return {
      leftPinnedColumns: left,
      rightPinnedColumns: right,
      unpinnedColumns: unpinned,
    };
  }, [allHeaders]);

  const { getActualColumnSize, getUnpinnedColumnWidth, totalUnpinnedWidth, totalTableWidth } =
    useResponsiveColumnLayout({
      unpinnedColumns,
      leftPinnedColumns,
      rightPinnedColumns,
      viewportWidth,
    });

  // estimateSize 함수 메모이제이션 - virtualizer에서 사용
  const estimateSize = useCallback((index: number) => getUnpinnedColumnWidth(index), [getUnpinnedColumnWidth]);

  // 컬럼 가상화를 위한 virtualizer
  // 헤더의 가로 스크롤은 headerRef에서 발생하므로 headerRef를 사용
  const columnVirtualizer = useVirtualizer<HTMLDivElement, HTMLDivElement>({
    // flushSync는 중첩 렌더/레이아웃 효과와 충돌 시 경고를 유발하므로 비활성화
    // useFlushSync: false,
    count: unpinnedColumns.length,
    getScrollElement: () => headerRef.current,
    estimateSize,
    horizontal: true,
    overscan: 5,
  });

  const virtualItems = columnVirtualizer.getVirtualItems();

  // 헤더의 virtualItems를 바디에 전달
  React.useEffect(() => {
    if (onVirtualItemsChange) {
      onVirtualItemsChange(virtualItems);
    }
  }, [virtualItems, onVirtualItemsChange]);

  // 초기 렌더링 시 가상화 강제 업데이트
  React.useEffect(() => {
    if (headerRef.current) {
      // 약간의 지연 후 가상화를 강제로 업데이트
      const timeoutId = setTimeout(() => {
        columnVirtualizer.measure();
      }, 0);
      return () => clearTimeout(timeoutId);
    }
  }, [columnVirtualizer, headerRef]);

  const handleHeaderScroll = useCallback(() => {
    if (!headerRef.current || !onHeaderScroll) return;
    onHeaderScroll();
  }, [headerRef, onHeaderScroll]);

  return (
    <VirtualTableHeaderRoot ref={headerRef} onScroll={handleHeaderScroll}>
      <VirtualTableHeaderInner>
        {headerGroups.map((headerGroup, groupIndex) => {
          const isLeafRow = groupIndex === headerGroups.length - 1;

          return (
            <VirtualTableHeaderRow key={headerGroup.id} $tableWidthPx={totalTableWidth}>
              {isLeafRow ? (
                <LeafHeaderRow
                  leftPinnedColumns={leftPinnedColumns}
                  rightPinnedColumns={rightPinnedColumns}
                  unpinnedColumns={unpinnedColumns}
                  virtualItems={virtualItems}
                  totalUnpinnedWidth={totalUnpinnedWidth}
                  getActualColumnSize={getActualColumnSize}
                  getUnpinnedColumnWidth={getUnpinnedColumnWidth}
                />
              ) : (
                <GroupHeaderRow headerGroup={headerGroup} getActualColumnSize={getActualColumnSize} />
              )}
            </VirtualTableHeaderRow>
          );
        })}
      </VirtualTableHeaderInner>
    </VirtualTableHeaderRoot>
  );
};

if (typeof VirtualTableHeader === 'object' && VirtualTableHeader !== null) {
  (VirtualTableHeader as any).displayName = 'VirtualTableHeader';
}

const TableBodyRow = React.memo(
  <T,>({
    row,
    virtualRow,
    rowVirtualizer,
    getFixedCellStyle,
    tableContainerRef: _tableContainerRef,
    columnVirtualizer,
    unpinnedColumns,
    scrollMargin: _scrollMargin = 0,
    totalUnpinnedWidth,
    totalTableWidth,
    getUnpinnedColumnWidth,
    headerVirtualItems,
    isLoading = false,
    bodyRowStyle,
  }: TableBodyRowProps<T>): React.ReactElement => {
    const { style: rowStyle, heightPx: rowHeightPx } = resolveBodyRowStyle(
      bodyRowStyle,
      virtualRow.index,
      row.original,
    );
    const cells = row.getVisibleCells();

    // 고정된 셀과 일반 셀 분리 - 메모이제이션
    const { leftPinnedCells, rightPinnedCells, unpinnedCells } = useMemo(() => {
      const left = cells.filter((cell: any) => cell.column.getIsPinned() === 'left');
      const right = cells.filter((cell: any) => cell.column.getIsPinned() === 'right');

      // unpinnedColumns의 순서대로 cells를 정렬
      const unpinnedCellsMap = new Map(
        cells.filter((cell: any) => !cell.column.getIsPinned()).map((cell: any) => [cell.column.id, cell]),
      );

      // CRITICAL: unpinnedColumns의 순서를 유지하면서 매핑
      const unpinned = unpinnedColumns
        .map((header) => unpinnedCellsMap.get(header.column.id))
        .filter((cell): cell is any => cell !== undefined);

      return {
        leftPinnedCells: left,
        rightPinnedCells: right,
        unpinnedCells: unpinned,
      };
    }, [cells, unpinnedColumns]);

    const hasPinned = useMemo(() => cells.some((cell: any) => cell.column.getIsPinned()), [cells]);

    const virtualItems = columnVirtualizer.getVirtualItems();

    // 헤더의 virtualItems를 사용하거나, 없으면 바디의 virtualItems 사용
    const effectiveVirtualItems =
      headerVirtualItems && headerVirtualItems.length > 0 ? headerVirtualItems : virtualItems;

    return (
      <VirtualTableBodyRow
        data-index={virtualRow.index}
        data-has-pinned={hasPinned}
        ref={(node) => rowVirtualizer.measureElement(node)}
        $tableWidthPx={totalTableWidth}
        $rowHeightPx={rowHeightPx}
        style={rowStyle}
      >
        {/* Left pinned cells */}
        {leftPinnedCells.map((cell: any) => {
          const isPinned = cell.column.getIsPinned();
          const isLastLeftPinned = isPinned === 'left' && cell.column.getIsLastColumn('left');
          const leftPosition = cell.column.getStart('left');

          // size가 숫자가 아니면 minSize 사용
          const size = cell.column.columnDef.size;
          const minSize = cell.column.columnDef.minSize;
          const cellWidth =
            typeof size === 'number' && size > 0 ? size : typeof minSize === 'number' && minSize > 0 ? minSize : 150;

          return (
            <VirtualTableBodyPinnedCell
              key={cell.id}
              data-last-left-pinned={isLastLeftPinned}
              data-pinned={isPinned}
              data-no-hover={getColumnActiveHoverDataAttribute(
                cell.column.columnDef.meta?.activeHover,
                cell.row.original,
              )}
              data-has-custom-style={cell.column.columnDef.meta?.cellProps?.style?.backgroundColor ? 'true' : undefined}
              style={{
                ...(cell.column.columnDef.meta?.cellProps?.style || {}),
                width: `${cellWidth}px`,
                minWidth: `${cellWidth}px`,
                left: `${leftPosition}px`,
              }}
            >
              {isLoading ? <CellSkeleton /> : flexRender(cell.column.columnDef.cell, cell.getContext())}
              {isLastLeftPinned && <PinnedColumnEdgeShadow />}
            </VirtualTableBodyPinnedCell>
          );
        })}

        {/* Virtualized unpinned cells (Slice Pattern) */}
        <VirtualTableBodyUnpinnedSlice $unpinnedWidthPx={totalUnpinnedWidth}>
          <VirtualTableHorizontalVirtualTrack $translateX={effectiveVirtualItems[0]?.start ?? 0} $fillHeight>
            {effectiveVirtualItems.map((virtualColumn) => {
              const header = unpinnedColumns[virtualColumn.index];
              if (!header) return null;

              const cell = unpinnedCells[virtualColumn.index];
              if (!cell) return null;

              const baseStyle = getFixedCellStyle(cell.column);
              // 가상화 래퍼가 flex를 사용하므로 absolute, left, transform 위치 제어를 제외
              const {
                left: _left,
                right: _right,
                position: _position,
                width: _baseWidth,
                transform: _transform,
                ...restBaseStyle
              } = baseStyle;

              const columnWidth = getUnpinnedColumnWidth(virtualColumn.index);

              return (
                <VirtualTableBodyUnpinnedCell
                  key={cell.id}
                  data-no-hover={getColumnActiveHoverDataAttribute(
                    cell.column.columnDef.meta?.activeHover,
                    cell.row.original,
                  )}
                  data-has-custom-style={
                    cell.column.columnDef.meta?.cellProps?.style?.backgroundColor ? 'true' : undefined
                  }
                  style={{
                    ...restBaseStyle,
                    width: `${columnWidth}px`,
                    minWidth: `${columnWidth}px`,
                    maxWidth: `${columnWidth}px`,
                  }}
                >
                  {isLoading ? <CellSkeleton /> : flexRender(cell.column.columnDef.cell, cell.getContext())}
                </VirtualTableBodyUnpinnedCell>
              );
            })}
          </VirtualTableHorizontalVirtualTrack>
        </VirtualTableBodyUnpinnedSlice>

        {/* Right pinned cells */}
        {rightPinnedCells.map((cell: any) => {
          const isPinned = cell.column.getIsPinned();
          const isFirstRightPinned = isPinned === 'right' && cell.column.getIsFirstColumn('right');
          const rightPosition = cell.column.getAfter('right');

          // size가 숫자가 아니면 minSize 사용
          const size = cell.column.columnDef.size;
          const minSize = cell.column.columnDef.minSize;
          const cellWidth =
            typeof size === 'number' && size > 0 ? size : typeof minSize === 'number' && minSize > 0 ? minSize : 150;

          return (
            <VirtualTableBodyPinnedCell
              key={cell.id}
              data-first-right-pinned={isFirstRightPinned}
              data-pinned={isPinned}
              data-no-hover={getColumnActiveHoverDataAttribute(
                cell.column.columnDef.meta?.activeHover,
                cell.row.original,
              )}
              data-has-custom-style={cell.column.columnDef.meta?.cellProps?.style?.backgroundColor ? 'true' : undefined}
              style={{
                ...(cell.column.columnDef.meta?.cellProps?.style || {}),
                width: `${cellWidth}px`,
                minWidth: `${cellWidth}px`,
                right: `${rightPosition}px`,
              }}
            >
              {isLoading ? <CellSkeleton /> : flexRender(cell.column.columnDef.cell, cell.getContext())}
            </VirtualTableBodyPinnedCell>
          );
        })}
      </VirtualTableBodyRow>
    );
  },
  (prevProps: any, nextProps: any) => {
    // 1. row 식별자 비교
    if (prevProps.row.id !== nextProps.row.id) return false;

    // 2. 가상화된 위치(start, index) 비교 (참조가 아닌 원시값 비교로 memoization 깨짐 방지)
    if (prevProps.virtualRow.start !== nextProps.virtualRow.start) return false;
    if (prevProps.virtualRow.index !== nextProps.virtualRow.index) return false;

    // 3. 로딩 상태 비교
    if (prevProps.isLoading !== nextProps.isLoading) return false;
    // 3-1. row 선택 상태 비교 (체크박스 즉시 반영)
    if (prevProps.isRowSelected !== nextProps.isRowSelected) return false;

    // 4. 가로 스크롤(headerVirtualItems) 구성이 달라졌는지 비교
    const prevHeaderItems = prevProps.headerVirtualItems;
    const nextHeaderItems = nextProps.headerVirtualItems;
    if (prevHeaderItems?.length !== nextHeaderItems?.length) return false;
    if (prevHeaderItems && nextHeaderItems && prevHeaderItems[0]?.index !== nextHeaderItems[0]?.index) return false;

    // 5. 레이아웃 크기 변경 비교
    if (prevProps.totalUnpinnedWidth !== nextProps.totalUnpinnedWidth) return false;
    if (prevProps.totalTableWidth !== nextProps.totalTableWidth) return false;

    // 위 조건들이 모두 동일하다면 리렌더링하지 않음
    return true;
  },
) as <T>(props: TableBodyRowProps<T>) => React.ReactElement;

if (typeof TableBodyRow === 'object' && TableBodyRow !== null) {
  (TableBodyRow as any).displayName = 'TableBodyRow';
}

const VirtualTableBody = React.memo(
  <T,>({
    table,
    tableContainerRef,
    getFixedCellStyle,
    headerRef,
    headerVirtualItems,
    bodyRef,
    scrollViewportRef,
    onBodyScroll,
    viewportWidth,
    bodyRowStyle,
  }: VirtualTableBodyProps<T>): React.ReactElement => {
    const { rows } = table.getRowModel();
    const { isLoading } = useTable();
    // table에서 직접 headerGroups 가져오기 (초기 렌더링 시 정확한 값 보장)
    const currentHeaderGroups = table.getHeaderGroups();
    // 마지막 headerGroup이 리프 컬럼 (실제 데이터 컬럼)
    const leafHeaderGroup = currentHeaderGroups[currentHeaderGroups.length - 1];

    // 그룹 컬럼은 제외 (columnDef.columns가 있는 컬럼은 그룹 컬럼이므로 리프 헤더에서 제외)
    const allHeaders = useMemo(() => {
      const headers = leafHeaderGroup?.headers || [];
      const filtered = headers.filter((h: any) => {
        const columns = h.column.columnDef.columns;
        return !columns || columns.length === 0;
      });

      return filtered;
    }, [leafHeaderGroup]);

    // unpinnedColumns 메모이제이션
    const unpinnedColumns = useMemo(() => allHeaders.filter((h) => !h.column.getIsPinned()), [allHeaders]);

    // 고정 컬럼 분리
    const leftPinnedColumns = useMemo(() => allHeaders.filter((h) => h.column.getIsPinned() === 'left'), [allHeaders]);
    const rightPinnedColumns = useMemo(
      () => allHeaders.filter((h) => h.column.getIsPinned() === 'right'),
      [allHeaders],
    );

    const { getUnpinnedColumnWidth, totalUnpinnedWidth, totalTableWidth } = useResponsiveColumnLayout({
      unpinnedColumns,
      leftPinnedColumns,
      rightPinnedColumns,
      viewportWidth,
    });

    const [headerHeight, setHeaderHeight] = React.useState(48);

    // 헤더 높이 측정 - div 내부의 첫 번째 row 높이를 측정
    React.useEffect(() => {
      if (headerRef.current) {
        const updateHeaderHeight = () => {
          if (headerRef.current) {
            // div 내부의 첫 번째 row를 찾아서 높이 측정
            const firstRow = headerRef.current.querySelector('div > div');
            if (firstRow) {
              const height = firstRow.getBoundingClientRect().height;
              if (height > 0) {
                setHeaderHeight(height);
              }
            } else {
              // fallback: div 자체의 높이 측정
              const height = headerRef.current.getBoundingClientRect().height;
              if (height > 0) {
                setHeaderHeight(height);
              }
            }
          }
        };

        // 초기 측정
        const timeoutId = setTimeout(updateHeaderHeight, 0);

        // ResizeObserver를 사용하여 헤더 높이 변경 감지
        const resizeObserver = new ResizeObserver(() => {
          updateHeaderHeight();
        });
        resizeObserver.observe(headerRef.current);

        return () => {
          clearTimeout(timeoutId);
          resizeObserver.disconnect();
        };
      }
    }, [headerRef]);

    // estimateSize 함수 메모이제이션 - virtualizer에서 사용
    const estimateSize = useCallback((index: number) => getUnpinnedColumnWidth(index), [getUnpinnedColumnWidth]);

    // 컬럼 가상화를 위한 virtualizer (모든 row에서 공유)
    // 헤더의 virtualItems를 사용하므로, 헤더와 동기화를 위해 headerRef를 사용
    // 가로 스크롤은 handleBodyScroll과 handleHeaderScroll에서 동기화되므로
    // 헤더의 스크롤 위치를 기준으로 가상화하면 헤더의 virtualItems와 일치함
    const columnVirtualizer = useVirtualizer<HTMLDivElement, HTMLDivElement>({
      // 헤더와 동일: flushSync 경고 방지
      // useFlushSync: false,
      count: unpinnedColumns.length,
      getScrollElement: () => headerRef.current || bodyRef.current,
      estimateSize,
      horizontal: true,
      overscan: 5,
    });

    // getItemKey 함수 메모이제이션
    const getItemKey = useCallback(
      (index: number) => {
        const row = rows[index];
        return row?.id || `row-${index}`;
      },
      [rows],
    );

    // measureElement: 성능 최적화를 위해 동적 측정을 제거하고 고정 높이 반환
    // const measureElement = useCallback(() => 60, []);

    // useVirtualizer로 변경: 컨테이너 기준 스크롤 사용
    const rowVirtualizer = useVirtualizer<HTMLDivElement, Element>({
      // useFlushSync: false,
      count: rows.length,
      getScrollElement: () => (scrollViewportRef?.current as HTMLDivElement) || tableContainerRef.current,
      estimateSize: (index) => resolveBodyRowStyle(bodyRowStyle, index, rows[index]?.original).heightPx,
      overscan: 10,
      // row의 안정적인 key를 제공하여 sync 상태 변경 시에도 row 추적 안정화
      getItemKey,
      // 실제 row 높이를 측정하여 깜빡임 방지 (DOM layout 측정 비활성화)
      // measureElement,
    });

    const virtualRows = rowVirtualizer.getVirtualItems();

    // rows 변경 시 가상화 강제 업데이트 (필터링 등으로 데이터가 변경될 때)
    // const rowsKey = useMemo(() => {
    //   const rowsLength = rows.length;
    //   if (rowsLength === 0) return 'empty';
    //   const firstId = rows[0]?.id || '';
    //   const lastId = rows[rowsLength - 1]?.id || '';
    //   return `${rowsLength}-${firstId}-${lastId}`;
    // }, [rows]);

    React.useEffect(() => {
      const scrollElement = scrollViewportRef?.current || tableContainerRef.current;
      if (scrollElement) {
        // 약간의 지연 후 가상화를 강제로 업데이트
        const timeoutId = setTimeout(() => {
          rowVirtualizer.measure();
          columnVirtualizer.measure();
        }, 0);
        return () => clearTimeout(timeoutId);
      }
    }, [rowVirtualizer, columnVirtualizer, scrollViewportRef, tableContainerRef]);

    // 바디 스크롤 핸들러
    const handleBodyScroll = useCallback(() => {
      if (!onBodyScroll) return;
      onBodyScroll();
    }, [onBodyScroll]);

    const bodyGridHeightPx = rowVirtualizer.getTotalSize();

    return (
      <VirtualTableBodyGrid ref={bodyRef} $totalHeightPx={bodyGridHeightPx} onScroll={handleBodyScroll}>
        <VirtualTableVerticalVirtualTrack $translateY={virtualRows[0]?.start ?? 0}>
          {virtualRows.map((virtualRow) => {
            const row = rows[virtualRow.index];
            const rowKey = row.id || `row-${virtualRow.index}`;
            return (
              <TableBodyRow
                key={rowKey}
                row={row}
                isRowSelected={row.getIsSelected()}
                virtualRow={virtualRow}
                rowVirtualizer={rowVirtualizer}
                getFixedCellStyle={getFixedCellStyle}
                tableContainerRef={tableContainerRef}
                columnVirtualizer={columnVirtualizer}
                bodyRowStyle={bodyRowStyle}
                unpinnedColumns={unpinnedColumns}
                scrollMargin={headerHeight}
                totalUnpinnedWidth={totalUnpinnedWidth}
                totalTableWidth={totalTableWidth}
                getUnpinnedColumnWidth={getUnpinnedColumnWidth}
                headerVirtualItems={headerVirtualItems}
                isLoading={isLoading}
              />
            );
          })}
        </VirtualTableVerticalVirtualTrack>
      </VirtualTableBodyGrid>
    );
  },
) as <T>(props: VirtualTableBodyProps<T>) => React.ReactElement;

if (typeof VirtualTableBody === 'object' && VirtualTableBody !== null) {
  (VirtualTableBody as any).displayName = 'VirtualTableBody';
}

export function VirtualTable({
  maxHeight = '800px',
  bodyRowStyle,
}: {
  maxHeight?: string;
  bodyRowStyle?: TableBodyRowStyle;
}): React.ReactElement {
  const tableContainerRef = useRef<HTMLDivElement>(null);
  // ScrollArea 인스턴스용
  const scrollAreaRef = useRef<ScrollbarRefType & { view: HTMLDivElement }>(null);

  // virtualizer용 - 실제 스크롤 viewport div
  const scrollViewportRef = useRef<HTMLDivElement | null>(null);

  const { table, tableScrollRef, bodyRef, headerRef } = useTable();
  const [headerVirtualItems, setHeaderVirtualItems] = React.useState<VirtualItem[]>([]);
  const viewportWidth = useResponsiveViewportWidth(tableContainerRef, headerRef);

  // ScrollArea의 실제 스크롤 가능한 요소를 찾아서 scrollViewportRef로 저장
  // 세로 스크롤(row 가상화)에만 사용
  React.useEffect(() => {
    if (scrollAreaRef.current?.view) {
      scrollViewportRef.current = scrollAreaRef.current.view;
      scrollViewportRef.current.dispatchEvent(new Event('scroll', { bubbles: true }));
    }
  }, []);

  // 스크롤 동기화 이벤트 핸들러 (FixedTable 참고)
  const handleBodyScroll = useCallback(() => {
    if (!bodyRef.current) return;

    const bodyScrollLeft = bodyRef.current.scrollLeft;

    if (headerRef.current) {
      headerRef.current.scrollLeft = bodyScrollLeft;
    }

    if (tableScrollRef?.current) {
      tableScrollRef.current.scrollLeft = bodyScrollLeft;
    }
  }, [tableScrollRef]);

  const handleHeaderScroll = useCallback(() => {
    if (!headerRef.current) return;

    const headerScrollLeft = headerRef.current.scrollLeft;

    if (bodyRef.current) {
      bodyRef.current.scrollLeft = headerScrollLeft;
    }

    if (tableScrollRef?.current) {
      tableScrollRef.current.scrollLeft = headerScrollLeft;
    }
  }, [tableScrollRef]);

  // 셀렉터 패턴: 컬럼별 스타일을 미리 계산해서 캐싱 (WeakMap 사용으로 메모리 누수 방지)
  const columnStyleCacheRef = useRef(new WeakMap<any, { header: React.CSSProperties; cell: React.CSSProperties }>());

  // 컬럼 스타일 셀렉터: 컬럼 정의가 변경될 때만 재계산
  const getColumnStyle = useCallback(
    (column: any, isHeader: boolean): React.CSSProperties => {
      // 캐시 확인
      const cached = columnStyleCacheRef.current.get(column);
      if (cached) {
        return isHeader ? cached.header : cached.cell;
      }

      // 스타일 계산
      const pinningStyles = getCommonPinningStyles(column);

      const size = column.columnDef.size;
      const minSize = column.columnDef.minSize;
      const maxSize = column.columnDef.maxSize;

      const widthStyle =
        size === 0
          ? { width: '100%' }
          : {
              width: pinningStyles.width || `${size}px`,
              minWidth: `${minSize}px`,
              maxWidth: `${maxSize}px`,
            };

      const headerStyle = {
        ...pinningStyles,
        ...(column.columnDef.meta?.headerProps?.style || {}),
        ...widthStyle,
      };

      const cellStyle = {
        ...pinningStyles,
        ...(column.columnDef.meta?.cellProps?.style || {}),
        ...widthStyle,
      };

      // 캐시에 저장
      columnStyleCacheRef.current.set(column, {
        header: headerStyle,
        cell: cellStyle,
      });

      return isHeader ? headerStyle : cellStyle;
    },
    [], // 의존성 없음 - 컬럼 객체 자체가 변경되면 WeakMap에서 자동으로 가비지 컬렉션됨
  );

  // getFixedCellStyle은 호환성을 위해 유지하되 내부적으로 셀렉터 사용
  const getFixedCellStyle = useCallback(
    (column: any, isHeader = false): React.CSSProperties => {
      return getColumnStyle(column, isHeader);
    },
    [getColumnStyle],
  );

  return (
    <VirtualTableRoot>
      <VirtualTableHeader
        table={table}
        headerRef={headerRef}
        getFixedCellStyle={getFixedCellStyle}
        tableContainerRef={tableContainerRef}
        scrollViewportRef={scrollViewportRef}
        onVirtualItemsChange={setHeaderVirtualItems}
        onHeaderScroll={handleHeaderScroll}
        viewportWidth={viewportWidth}
      />
      <div ref={scrollViewportRef} style={{ maxHeight: maxHeight, overflowY: 'auto', overflowX: 'hidden' }}>
        {/* <ScrollArea autoHeightMax={800} autoHeight ref={scrollAreaRef}> */}
        <VirtualTableScrollAreaInner ref={tableContainerRef}>
          <VirtualTableBody
            table={table}
            tableContainerRef={tableContainerRef}
            getFixedCellStyle={getFixedCellStyle}
            headerRef={headerRef}
            headerVirtualItems={headerVirtualItems}
            bodyRef={bodyRef}
            scrollViewportRef={scrollViewportRef}
            onBodyScroll={handleBodyScroll}
            viewportWidth={viewportWidth}
            bodyRowStyle={bodyRowStyle}
          />
        </VirtualTableScrollAreaInner>
        {/* </ScrollArea> */}
      </div>
    </VirtualTableRoot>
  );
}
