import type { Table } from '@tanstack/react-table';
import type { Dispatch, RefObject, SetStateAction } from 'react';

export type TableContextType<T extends object> = {
  table: Table<T>;
  headerRef: RefObject<HTMLDivElement>;
  bodyRef: RefObject<HTMLDivElement>;
  footerRef: RefObject<HTMLDivElement>;
  tableScrollRef: RefObject<HTMLDivElement>;
  selectedRows?: T[];
  onClickRow?: (row?: T) => void;
  hasToolbar?: boolean;
  hasFilterBar?: boolean;
  hasPagination?: boolean;
  columnResizing?: boolean;
  filterValue: string;
  setFilterValue: Dispatch<SetStateAction<string>>;
};
