import type { CSSProperties, ReactElement } from 'react';
import { Children, isValidElement, useEffect, useMemo, useRef, useState } from 'react';
import { TableProvider } from '../../context';
import type { ColumnFiltersState, RowData, SortingState } from '@tanstack/react-table';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { TableContainer } from './Table.styled';
import type { TableProps, TableContextType } from '../../types/index';
import { TableToolbar } from './TableToolbar';
import { TablePagination } from './TablePagination';
import { TableFilterBar } from './TableFilterBar';

type FilterChangeHandler = (value: string) => void;
type SortChangeHandler = (order: 'asc' | 'desc' | undefined) => void;
type GlobalFilterChangeHandler = (value: string) => void;

/**
 * @typedef {Object} ColumnMeta 테이블 컬럼의 메타 데이터 타입 정의
 * @property {'text' | 'range' | 'select'} [filterVariant] - 필터 입력 타입
 * @property {Array<{label: string, value: string}>} [filterOptions] - select 타입 필터의 옵션 목록
 * @property {string[]} [sortLabels] - 정렬 라벨 목록
 * @property {{style?: CSSProperties}} [headerProps] - 헤더 셀의 스타일 속성
 * @property {{style?: CSSProperties}} [cellProps] - 데이터 셀의 스타일 속성
 * @property {(value: string) => void} [onFilterChange] - 필터 값 변경 핸들러
 * @property {(order: 'asc' | 'desc' | undefined) => void} [onSortChange] - 정렬 순서 변경 핸들러
 * @property {(value: string) => void} [onGlobalFilterChange] - 전역 필터 값 변경 핸들러
 * @property {boolean} [activeHover] - 행 호버 효과 활성화 여부
 */

declare module '@tanstack/react-table' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface TableMeta<TData extends RowData> {
    onGlobalFilterChange?: GlobalFilterChangeHandler;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    filterVariant?: 'text' | 'range' | 'select';
    filterOptions?: Array<{ icon?: ReactElement; label: string; value: string }>;
    sortLabels?: string[];
    headerProps?: {
      style?: CSSProperties;
    };
    cellProps?: {
      style?: CSSProperties;
    };
    onFilterChange?: FilterChangeHandler;
    onSortChange?: SortChangeHandler;
    onGlobalFilterChange?: GlobalFilterChangeHandler;
    activeHover?: boolean;
    hiddenColumn?: boolean;
    isLastColumn?: boolean;
  }
}

/**
 * 테이블 컴포넌트
 * @component
 * @template T - 테이블 데이터의 타입
 * @param {Object} props - 컴포넌트 props
 * @param {T[]} props.data - 테이블에 표시할 데이터 배열
 * @param {Array<ColumnDef<T>>} props.columns - 테이블 컬럼 정의 배열
 * @param {boolean} [props.columnResizing=false] - 컬럼 리사이징 활성화 여부
 * @param {ReactNode} props.children - 테이블 내부에 렌더링할 자식 컴포넌트
 * @param {boolean} [props.manualPagination=false] - 수동 페이지네이션 사용 여부
 * @param {T[]} [props.selectedRows=[]] - 선택된 행 데이터 배열
 * @param {Function} [props.onSelectedRowsChange] - 선택된 행이 변경될 때 호출되는 콜백 함수
 * @param {Function} [props.onClickRow] - 행 클릭 시 호출되는 콜백 함수
 * @returns {JSX.Element} 렌더링된 테이블 컴포넌트
 */

export const Table = <T extends object>({
  data,
  columns,
  columnResizing = false,
  children,
  manualPagination = false,
  manualFiltering = false,
  manualSorting = true,
  selectedRows = [],
  onSelectedRowsChange,
  onClickRow,
}: TableProps<T>) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({});
  const [columnPinning, setColumnPinning] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [filterValue, setFilterValue] = useState('');

  // meta.hiddenColumn 값이 true인 컬럼은 보이지 않도록 필터링
  const visibleColumns = useMemo(() => columns.filter((column) => !column.meta?.hiddenColumn), [columns]);

  const table = useReactTable<T>({
    data,
    columns: visibleColumns,
    columnResizeMode: 'onChange',
    initialState: {
      pagination: {
        pageSize: 100,
      },
    },
    state: {
      sorting,
      columnFilters,
      globalFilter,
      columnVisibility,
      columnPinning,
      rowSelection,
    },
    defaultColumn: {
      size: 0,
      // TODO: 필터링 기능 추가 시 props로 옵션 처리
      enableColumnFilter: false,
      enableSorting: false,
      enableResizing: true,
    },
    onSortingChange: (updater) => {
      const newSorting = typeof updater === 'function' ? updater(table.getState().sorting) : updater;
      setSorting(newSorting);

      // 변경된(정렬이 적용된) 컬럼만 onSortChange 호출
      if (newSorting.length > 0) {
        const { id, desc } = newSorting[0];
        const column = table.getAllLeafColumns().find((col) => col.id === id);
        column?.columnDef.meta?.onSortChange?.(desc ? 'desc' : 'asc');
      } else {
        // 정렬 해제 시 모든 컬럼의 onSortChange(undefined) 호출
        table.getAllLeafColumns().forEach((column) => {
          column.columnDef.meta?.onSortChange?.(undefined);
        });
      }
    },
    onColumnFiltersChange: (updater) => {
      const newFilters = typeof updater === 'function' ? updater(table.getState().columnFilters) : updater;
      setColumnFilters(newFilters);

      // 변경된 필터에 대해 각각의 onFilterChange 핸들러 호출
      newFilters.forEach((filter) => {
        const column = table.getColumn(filter.id);
        if (column?.columnDef?.meta?.onFilterChange) {
          column.columnDef.meta.onFilterChange((filter.value as string) || '');
        }
      });
    },
    onGlobalFilterChange: (updater) => {
      const newGlobalFilter = typeof updater === 'function' ? updater(globalFilter) : updater;
      setGlobalFilter(newGlobalFilter);

      // globalFilter 값이 변경될 때 onGlobalFilterChange 핸들러 호출
      if (table.options.meta?.onGlobalFilterChange) {
        table.options.meta.onGlobalFilterChange(newGlobalFilter || '');
      }

      // 모든 필터링 가능한 컬럼에 대해 onFilterChange 핸들러 호출 (선택적)
      // 이 부분은 globalFilter가 모든 컬럼에 영향을 주길 원한다면 사용
      if (newGlobalFilter) {
        table.getAllLeafColumns().forEach((column) => {
          if (column.getCanFilter() && column.columnDef.meta?.onFilterChange) {
            column.columnDef.meta.onFilterChange(newGlobalFilter);
          }
        });
      }
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPinning,
    onRowSelectionChange: (updater) => {
      // 현재 선택 상태 가져오기
      const newSelection = typeof updater === 'function' ? updater(rowSelection) : updater;

      // rowSelection 상태 업데이트
      setRowSelection(newSelection);

      // 새로운 selection 상태를 table에 반영하여 selectedRows 계산
      const newSelectedRows = table
        .getRowModel()
        .rows.filter((row) => newSelection[row.id])
        .map((row) => row.original);

      onSelectedRowsChange?.(newSelectedRows);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: columnResizing,
    manualPagination,
    manualFiltering,
    manualSorting,
  });

  // 스크롤 동기화용 ref
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const tableScrollRef = useRef<HTMLDivElement>(null);
  const hasToolbar = Children.toArray(children).some((child) => isValidElement(child) && child.type === TableToolbar);
  const hasPagination = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === TablePagination,
  );
  const hasFilterBar = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === TableFilterBar,
  );

  const contextValue: TableContextType<T> = {
    table,
    headerRef,
    bodyRef,
    footerRef,
    tableScrollRef,
    selectedRows,
    onClickRow,
    hasToolbar,
    hasFilterBar,
    hasPagination,
    columnResizing,
    filterValue,
    setFilterValue,
  };

  useEffect(() => {
    if (selectedRows.length === 0) {
      table.resetRowSelection();
    }
  }, [onSelectedRowsChange, selectedRows.length, table]);

  return (
    <TableContainer hasToolbar={hasToolbar || hasFilterBar}>
      <TableProvider value={contextValue}>{children}</TableProvider>
    </TableContainer>
  );
};
