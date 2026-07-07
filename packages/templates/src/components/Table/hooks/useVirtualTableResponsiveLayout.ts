/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useCallback, useMemo, useSyncExternalStore } from 'react';

/**
 * 남는 폭을 auto 컬럼에 분배하되 maxSize에 도달한 컬럼은 제외하고
 * 남은 폭을 나머지 컬럼에 재분배한다.
 */
const distributeResponsiveWidths = ({
  baseWidths,
  autoIndexes,
  maxWidths,
  targetTotalWidth,
}: {
  baseWidths: number[];
  autoIndexes: number[];
  maxWidths: number[];
  targetTotalWidth: number;
}): number[] => {
  const widths = [...baseWidths];
  const baseTotal = baseWidths.reduce((sum, width) => sum + width, 0);
  let remaining = Math.max(0, targetTotalWidth - baseTotal);

  if (remaining === 0 || autoIndexes.length === 0) return widths;

  const growable = new Set(autoIndexes);
  while (remaining > 0.01 && growable.size > 0) {
    const share = remaining / growable.size;
    let distributed = 0;

    Array.from(growable).forEach((index) => {
      const maxWidth = maxWidths[index] ?? Number.POSITIVE_INFINITY;
      const capacity = Math.max(0, maxWidth - widths[index]);
      const delta = Math.min(share, capacity);
      widths[index] += delta;
      distributed += delta;
      if (capacity <= share + 0.01) growable.delete(index);
    });

    if (distributed <= 0.01) break;
    remaining -= distributed;
  }

  return widths;
};

/**
 * 테이블/헤더 DOM 폭을 반응형으로 구독한다.
 * ResizeObserver + window resize 이벤트를 rAF로 1프레임 배칭한다.
 */
export const useResponsiveViewportWidth = (
  tableContainerRef: React.RefObject<HTMLDivElement>,
  headerRef: React.RefObject<HTMLDivElement>,
): number => {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      let rafId: number | null = null;

      const notifyWithBatch = () => {
        if (rafId !== null) return;
        rafId = window.requestAnimationFrame(() => {
          rafId = null;
          onStoreChange();
        });
      };

      const resizeObserver = new ResizeObserver(() => {
        notifyWithBatch();
      });

      if (tableContainerRef.current) resizeObserver.observe(tableContainerRef.current);
      if (headerRef.current) resizeObserver.observe(headerRef.current);
      window.addEventListener('resize', notifyWithBatch);

      return () => {
        if (rafId !== null) {
          window.cancelAnimationFrame(rafId);
          rafId = null;
        }
        resizeObserver.disconnect();
        window.removeEventListener('resize', notifyWithBatch);
      };
    },
    [tableContainerRef, headerRef],
  );

  const getSnapshot = useCallback(
    () => tableContainerRef.current?.clientWidth ?? headerRef.current?.clientWidth ?? 0,
    [tableContainerRef, headerRef],
  );

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
};

/**
 * 헤더/바디가 동일한 기준으로 컬럼 폭을 계산하도록 공통화한다.
 * - base width: getSize -> size -> minSize -> default(150)
 * - auto 컬럼: 남는 폭 분배
 * - maxSize: 분배/기본 폭 모두 상한 적용
 */
export const useResponsiveColumnLayout = ({
  unpinnedColumns,
  leftPinnedColumns,
  rightPinnedColumns,
  viewportWidth,
}: {
  unpinnedColumns: any[];
  leftPinnedColumns: any[];
  rightPinnedColumns: any[];
  viewportWidth: number;
}): {
  getActualColumnSize: (column: any) => number;
  getUnpinnedColumnWidth: (index: number) => number;
  totalUnpinnedWidth: number;
  totalTableWidth: number;
} => {
  const getColumnMaxSize = useCallback((column: any): number => {
    const maxSize = column?.columnDef?.maxSize;
    return typeof maxSize === 'number' && maxSize > 0 ? maxSize : Number.POSITIVE_INFINITY;
  }, []);

  const getActualColumnSize = useCallback(
    (column: any): number => {
      if (!column) return 150;
      const tableSize = column.getSize?.();
      if (typeof tableSize === 'number' && Number.isFinite(tableSize) && tableSize > 0) return tableSize;

      const size = column.columnDef.size;
      if (typeof size === 'number' && size > 0) return size;

      const minSize = column.columnDef.minSize;
      if (typeof minSize === 'number' && minSize > 0) {
        return Math.min(minSize, getColumnMaxSize(column));
      }

      return Math.min(150, getColumnMaxSize(column));
    },
    [getColumnMaxSize],
  );

  const leftPinnedWidth = useMemo(
    () => leftPinnedColumns.reduce((sum, header) => sum + getActualColumnSize(header.column), 0),
    [leftPinnedColumns, getActualColumnSize],
  );
  const rightPinnedWidth = useMemo(
    () => rightPinnedColumns.reduce((sum, header) => sum + getActualColumnSize(header.column), 0),
    [rightPinnedColumns, getActualColumnSize],
  );
  const baseUnpinnedWidths = useMemo(
    () => unpinnedColumns.map((header) => getActualColumnSize(header.column)),
    [unpinnedColumns, getActualColumnSize],
  );
  const autoColumnIndexes = useMemo(
    () =>
      unpinnedColumns
        .map((header, index) => ({ index, size: header.column.columnDef.size }))
        .filter(({ size }) => typeof size !== 'number')
        .map(({ index }) => index),
    [unpinnedColumns],
  );
  const baseUnpinnedWidth = useMemo(
    () => baseUnpinnedWidths.reduce((sum, width) => sum + width, 0),
    [baseUnpinnedWidths],
  );
  const availableUnpinnedWidth = Math.max(0, viewportWidth - leftPinnedWidth - rightPinnedWidth);
  const targetUnpinnedWidth = Math.max(baseUnpinnedWidth, availableUnpinnedWidth);
  const unpinnedMaxWidths = useMemo(
    () => unpinnedColumns.map((header) => getColumnMaxSize(header.column)),
    [getColumnMaxSize, unpinnedColumns],
  );
  const computedUnpinnedWidths = useMemo(
    () =>
      distributeResponsiveWidths({
        baseWidths: baseUnpinnedWidths,
        autoIndexes: autoColumnIndexes,
        maxWidths: unpinnedMaxWidths,
        targetTotalWidth: targetUnpinnedWidth,
      }),
    [autoColumnIndexes, baseUnpinnedWidths, targetUnpinnedWidth, unpinnedMaxWidths],
  );
  const totalUnpinnedWidth = useMemo(
    () => computedUnpinnedWidths.reduce((sum, width) => sum + width, 0),
    [computedUnpinnedWidths],
  );
  const getUnpinnedColumnWidth = useCallback(
    (index: number) => computedUnpinnedWidths[index] ?? 150,
    [computedUnpinnedWidths],
  );
  const totalTableWidth = useMemo(
    () => leftPinnedWidth + totalUnpinnedWidth + rightPinnedWidth,
    [leftPinnedWidth, totalUnpinnedWidth, rightPinnedWidth],
  );

  return {
    getActualColumnSize,
    getUnpinnedColumnWidth,
    totalUnpinnedWidth,
    totalTableWidth,
  };
};
