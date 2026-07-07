import { TableBadge, TableButton } from '../TableElement';

import { Table as BaseTable } from './Table';
import { TableColumnVisibility } from './TableColumnVisibility';
import { TableEmpty } from './TableEmpty';
import { TableFilterBar } from './TableFilterBar';
import { TableMain } from './TableMain';
import { TablePagination } from './TablePagination';
import { TableToolbar } from './TableToolbar';

type TableComponentType = typeof BaseTable & {
  Toolbar: typeof TableToolbar;
  FilterBar: typeof TableFilterBar;
  Main: typeof TableMain;
  Pagination: typeof TablePagination;
  Empty: typeof TableEmpty;
  ColumnVisibility: typeof TableColumnVisibility;
  Button: typeof TableButton;
  Badge: typeof TableBadge;
};

const TableComponent = Object.assign(BaseTable, {
  Toolbar: TableToolbar,
  FilterBar: TableFilterBar,
  Main: TableMain,
  Pagination: TablePagination,
  Empty: TableEmpty,
  ColumnVisibility: TableColumnVisibility,
  Button: TableButton,
  Badge: TableBadge,
}) as TableComponentType;

export { TableComponent as Table };
export type { TableFilterBarRef } from './TableFilterBar';
