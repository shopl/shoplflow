import type { ColumnDef, Header, RowSelectionState, SortingState } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export type TableProps<T extends object> = {
  data: T[];
  columns: Array<ColumnDef<T, any>>;
  columnResizing?: boolean;
  children: ReactNode;
  manualPagination?: boolean;
  manualFiltering?: boolean;
  manualSorting?: boolean;
  selectedRows?: T[];
  onSelectedRowsChange?: (rows: T[], rowState?: RowSelectionState) => void;
  onClickRow?: (data?: T) => void;
  /**
   * 초기 페이지 사이즈
   * 기본값은 100으로 설정되어 있음
   */
  initPageSize?: number;
  noBorder?: boolean;
  isLoading?: boolean;
  /**
   * 행의 고유 ID를 반환하는 함수
   * 필터링/정렬 시 행 선택 상태를 유지하기 위해 사용
   */
  getRowId?: (row: T) => string;
  /**
   * 외부에서 정렬 상태를 제어할 때 사용
   */
  globalSorting?: SortingState;
  /**
   * 외부에서 필터를 조작하고 싶은 경우 사용
   */
  outsideFilters?: OutsideFilter[];
  /**
   * data 등 페이지 영향 상태가 바뀔 때 pageIndex를 0으로 자동 리셋할지 여부
   * 기본값은 true (TanStack Table 기본 동작)
   * 행 삭제 후 현재 페이지를 유지해야 하는 경우 false로 설정
   */
  autoResetPageIndex?: boolean;
};

export type TableBodyRowStyle = React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);

export type TableMainProps = {
  enableDragDrop?: boolean;
  /**
   * 드래그 핸들의 너비
   * 기본값은 40px로 설정되어 있음
   */
  dragColWidth?: 32 | 40;
  fixedColumns?: FixedColumn[];
  useVirtualization?: boolean;
  useColumnVirtualization?: boolean;
  isSticky?: boolean;
  stickyHeaderTopPosition?: number;
  onClickRow?: (rowData: any) => void;
  children?: ReactNode;
  maxHeight?: string;
  emptyRowCount?: number;
  virtualOverscan?: number;
  onRowReorder?: (newOrder: any[]) => void;
  footerRowProps?: {
    style?: React.CSSProperties;
  };
  headerRowStyle?: React.CSSProperties | ((rowIndex: number, row: any) => React.CSSProperties);
  bodyRowStyle?: TableBodyRowStyle;
  containerStyle?: React.CSSProperties;
};

export type TableToolbarProps = {
  filterAccessor?: string;
  height?: string;
  padding?: string;
  children: (props: {
    totalCount: number;
    filterAccessor: string;
    onSearch: (value: string) => void;
    filterValue: string;
  }) => ReactNode;
  /**
   * 테이블 전체 데이터 갯수
   */
  totalCount?: number;
};

export type TableHeadCellProps = {
  header: Header<any, unknown>;
  onFilterChange?: (value: string) => void;
  onSortChange?: (direction: 'asc' | 'desc' | undefined) => void;
};

export type PinningPosition = 'left' | 'right';

export type FixedColumn = {
  index: number;
  position: PinningPosition;
};

export type TablePaginationProps = {
  total: number;
  defaultPageSize: number;
  /** @deprecated 2026-04-16 leftSource를 사용하세요. */
  children?: ReactNode;
  pageSizeList?: Array<{ key: string; label: string }>;
  setCurrentPage?: (params: { pageIndex: number; pageSize: number }) => void;
  notSizeOption?: boolean;
  resetDependencies?: any[];
  currentPage?: number;

  /**
   * 하단 스크롤만 사용할 경우 false로 설정
   * 기본값은 true로 설정되어 있음
   */
  showPagination?: boolean;
  sizeVar?: 'S' | 'XS';
  leftSource?: ReactNode;
  hasPaddingInline?: boolean;
};

export type OutsideFilter = {
  id: string;
  value?: string;
  label?: string;
};

export type TableFilterBarProps = {
  onReset?: () => void;
  onRemoveFilter?: (id: string, value?: string) => void;
};
