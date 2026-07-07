import type { Column, Header } from '@tanstack/react-table';

export type TableHeadSortModel = {
  /** 정렬 메뉴·트리거 표시 여부 (그룹 헤더에서 단일 리프로 위임할 때도 사용) */
  showSortMenu: boolean;
  /** 정렬 상태/토글에 사용할 컬럼 (위임 시 리프 컬럼) */
  sortColumn: Column<any, unknown>;
};

/**
 * 그룹 컬럼 `meta.delegateSortToSingleLeaf === true` 이고 **리프 컬럼**이 정확히 1개일 때,
 * 정렬 UI는 그룹 헤더에 두고 `sortColumn`은 해당 리프를 가리킨다.
 * 리프는 `enableSorting: false`로 두어도 된다 (2단 헤더에서 빈 하위 행만 둘 때 등).
 *
 * 주의: `header.getLeafHeaders()`는 TanStack v8에서 하위 그룹 헤더까지 포함할 수 있어
 * 개수 판별에는 `column.getLeafColumns()`를 쓴다.
 */
export function getTableHeadSortModel(header: Header<any, unknown>): TableHeadSortModel {
  const meta = header.column.columnDef.meta;
  const hasChildColumns = (header.column.columns?.length ?? 0) > 0;

  if (meta?.delegateSortToSingleLeaf === true && hasChildColumns) {
    const leafColumns = header.column.getLeafColumns();
    if (leafColumns.length === 1) {
      return {
        showSortMenu: true,
        sortColumn: leafColumns[0],
      };
    }
  }

  return {
    showSortMenu: header.column.getCanSort(),
    sortColumn: header.column,
  };
}
