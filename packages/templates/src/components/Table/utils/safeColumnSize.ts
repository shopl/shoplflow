import type { Column, ColumnDef } from '@tanstack/react-table';

const isPositiveFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value > 0;

/**
 * TanStack Table `getSize()`는 `columnDef.size`가 숫자가 아니면(예: `'auto'`를 number로 캐스팅) NaN이 될 수 있다.
 * colgroup / pinning 등 UI 레이아웃용으로 사용할 안전한 픽셀 폭.
 */
export const getSafeColumnPixelWidth = (column: Column<any>): number => {
  const fromGetSize = column.getSize?.();
  if (isPositiveFiniteNumber(fromGetSize)) {
    return fromGetSize;
  }

  const defSize = column.columnDef.size as unknown;
  if (isPositiveFiniteNumber(defSize)) {
    return defSize;
  }

  const minSize = column.columnDef.minSize as unknown;
  if (isPositiveFiniteNumber(minSize)) {
    return minSize;
  }

  return 150;
};

export const getSafeColumnMinPixelWidth = (column: Column<any>): number => {
  const min = column.columnDef.minSize as unknown;
  if (isPositiveFiniteNumber(min)) {
    return min;
  }
  return getSafeColumnPixelWidth(column);
};

export const getSafeColumnMaxPixelWidth = (column: Column<any>): number | undefined => {
  const max = column.columnDef.maxSize as unknown;
  if (isPositiveFiniteNumber(max)) {
    return max;
  }
  return undefined;
};

/**
 * `size: 'auto' as unknown as number`처럼 비정상 size가 있으면 TanStack 내부 `getSize`/`getStart`가 NaN이 된다.
 * `size === 0`(가변 폭)은 그대로 둔다.
 */
export const normalizeInvalidColumnSize = <T extends object>(column: ColumnDef<T>): ColumnDef<T> => {
  if ('columns' in column && Array.isArray(column.columns)) {
    return {
      ...column,
      columns: column.columns.map(normalizeInvalidColumnSize),
    } as ColumnDef<T>;
  }

  const rawSize = column.size as unknown;
  if (rawSize === 0) {
    return column;
  }
  if (isPositiveFiniteNumber(rawSize)) {
    return column;
  }
  if (rawSize === undefined || rawSize === null) {
    return column;
  }

  const { size: _omit, ...rest } = column;
  return rest as ColumnDef<T>;
};
