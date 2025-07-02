import type { ColumnDef, Header } from '@tanstack/react-table';
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
  onSelectedRowsChange?: (rows: T[]) => void;
  onClickRow?: (data?: T) => void;
};

export type TableMainProps = {
  fixedColumns?: FixedColumn[];
  useVirtualization?: boolean;
  useColumnVirtualization?: boolean;
  isSticky?: boolean;
  stickyHeaderTopPosition?: number;
  onClickRow?: (rowData: any) => void;
  children?: ReactNode;
  maxHeight?: string;
  emptyRowCount?: number;
};

export type TableToolbarProps = {
  filterAccessor?: string;
  children: (props: {
    totalCount: number;
    filterAccessor: string;
    onSearch: (value: string) => void;
    filterValue: string;
  }) => ReactNode;
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
  children?: ReactNode;
  pageSizeList?: Array<{ key: string; label: string }>;
  setCurrentPage?: (params: { pageIndex: number; pageSize: number }) => void;
  notSizeOption?: boolean;
  resetDependencies?: any[];
  currentPage?: number;
};
