import type { RowData } from '@tanstack/react-table';

/**
 * `ColumnMeta.activeHover`가 boolean이면 그대로, 함수면 `row.original`로 판별합니다.
 */
export function getColumnActiveHoverDataAttribute<TData extends RowData>(
  activeHover: boolean | ((row: TData) => boolean) | undefined,
  rowOriginal: TData,
): 'true' | undefined {
  if (activeHover === undefined) return undefined;
  const enabled = typeof activeHover === 'function' ? activeHover(rowOriginal) : activeHover;
  return enabled ? 'true' : undefined;
}
