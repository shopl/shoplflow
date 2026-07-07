import type { ColumnFiltersState, RowData, SortingState } from '@tanstack/react-table';
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import type { CSSProperties, ReactElement } from 'react';
import { Children, isValidElement, useEffect, useMemo, useRef, useState } from 'react';

import { TableProvider } from '../../context';
import type { TableContextType, TableMainProps, TableProps } from '../../types/index';

import { TableContainer } from './Table.styled';
import { TableFilterBar } from './TableFilterBar';
import { TableMain } from './TableMain';
import { TablePagination } from './TablePagination';
import { TableToolbar } from './TableToolbar';

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
 * @property {boolean | ((row: TData) => boolean)} [activeHover] - 셀 `data-no-hover` (행 호버 스타일 분기). 함수면 행 데이터로 판별
 */

declare module '@tanstack/react-table' {
  // TanStack Table module augmentation requires generic params even when unused.
  /* eslint-disable @typescript-eslint/no-unused-vars */
  interface TableMeta<TData extends RowData> {
    onGlobalFilterChange?: GlobalFilterChangeHandler;
  }
  interface ColumnMeta<TData extends RowData, TValue> {
    /* eslint-enable @typescript-eslint/no-unused-vars */
    filterVariant?: 'text' | 'range' | 'select';
    filterOptions?: Array<{ icon?: ReactElement; label: string; value: string }>;
    sortLabels?: string[];
    headerProps?: {
      style?: CSSProperties;
    };
    cellProps?: {
      style?: CSSProperties;
    };
    footerProps?: {
      style?: CSSProperties;
    };
    onFilterChange?: FilterChangeHandler;
    onSortChange?: SortChangeHandler;
    onGlobalFilterChange?: GlobalFilterChangeHandler;
    activeHover?: boolean | ((row: TData) => boolean);
    hiddenColumn?: boolean;
    isLastColumn?: boolean;
    /** 필터 메뉴 너비: 'trigger'면 헤더 트리거 너비 고정(기본), 'auto'면 라벨이 길 때 100% 사용 */
    filterMenuWidth?: 'trigger' | 'auto';
    delegateSortToSingleLeaf?: boolean;
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
  initPageSize = 100,
  noBorder = false,
  isLoading = false,
  getRowId,
  globalSorting,
  outsideFilters,
  autoResetPageIndex = false,
}: TableProps<T>): JSX.Element => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState<Record<string, boolean>>({});
  const [columnPinning, setColumnPinning] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [filterValue, setFilterValue] = useState('');

  const currentSorting = globalSorting ?? sorting;

  // 데이터에 고유 ID 맵핑 (WeakMap으로 메모리 누수 방지)
  const rowIdMapRef = useRef(new WeakMap<T, string>());
  const rowIdCounterRef = useRef(0);

  // meta.hiddenColumn 값이 true인 컬럼은 보이지 않도록 필터링
  // group 컬럼 내부의 자식 컬럼들도 재귀적으로 처리
  const filterHiddenColumns = (cols: typeof columns): typeof columns => {
    return cols
      .filter((column) => column && !column.meta?.hiddenColumn)
      .map((column) => {
        // group 컬럼인 경우 내부 columns도 재귀적으로 필터링
        if ('columns' in column && Array.isArray(column.columns)) {
          return {
            ...column,
            columns: filterHiddenColumns(column.columns),
          };
        }
        return column;
      })
      .filter((column) => {
        // group 컬럼인 경우 내부에 visible한 컬럼이 하나라도 있어야 함
        if ('columns' in column && Array.isArray(column.columns)) {
          return column.columns.length > 0;
        }
        return true;
      });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps -- filterHiddenColumns is defined in the same render scope
  const visibleColumns = useMemo(() => filterHiddenColumns(columns), [columns]);

  // getRowId가 없으면 임의의 고유 ID 부여
  const safeGetRowId = useMemo(() => {
    if (getRowId) {
      return (row: T) => {
        const id = getRowId(row);
        // getRowId가 undefined나 null을 반환하는 경우 fallback 처리
        if (id === undefined || id === null || id === '') {
          // 이미 ID가 부여된 경우 재사용
          if (rowIdMapRef.current.has(row)) {
            return rowIdMapRef.current.get(row)!;
          }
          // 새로운 고유 ID 생성 및 저장
          const newId = `row-${rowIdCounterRef.current++}`;
          rowIdMapRef.current.set(row, newId);
          return newId;
        }
        return String(id);
      };
    }

    return (row: T) => {
      // id 필드가 있으면 우선 사용 (객체 참조가 바뀌어도 동일한 id로 식별 가능)
      if (typeof row === 'object' && row !== null && 'id' in row) {
        const id = (row as { id?: unknown }).id;
        if (id !== undefined && id !== null && id !== '') {
          return String(id);
        }
      }

      // 이미 ID가 부여된 경우 재사용
      if (rowIdMapRef.current.has(row)) {
        return rowIdMapRef.current.get(row)!;
      }

      // 새로운 고유 ID 생성 및 저장
      const newId = `row-${rowIdCounterRef.current++}`;
      rowIdMapRef.current.set(row, newId);
      return newId;
    };
  }, [getRowId]);

  const table = useReactTable<T>({
    data,
    columns: visibleColumns,
    columnResizeMode: 'onChange',
    getRowId: safeGetRowId,
    initialState: {
      pagination: {
        pageSize: initPageSize,
      },
    },
    state: {
      sorting: currentSorting,
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
      if (!globalSorting) {
        setSorting(newSorting);
      }

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
      const newSelection = typeof updater === 'function' ? updater(rowSelection) : updater;

      setRowSelection(newSelection);

      // 선택된 rowId 목록 추출
      const selectedRowIds = Object.keys(newSelection).filter((id) => newSelection[id]);

      // data prop에서 역으로 찾기 (선택이 해제된 경우에도 유지)
      const newSelectedRows = selectedRowIds
        .map((rowId) => {
          // 현재 data에서 찾기
          const found = data.find((row) => safeGetRowId(row) === rowId);
          if (found) return found;

          // 현재 selectedRows에서 찾기 (필터링으로 안보이는 경우)
          return selectedRows.find((row) => safeGetRowId(row) === rowId);
        })
        .filter(Boolean) as T[];

      onSelectedRowsChange?.(newSelectedRows, newSelection);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: columnResizing,
    manualPagination,
    manualFiltering,
    manualSorting,
    autoResetPageIndex,
  });

  // 스크롤 동기화용 ref
  const headerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const tableScrollRef = useRef<HTMLDivElement>(null);
  // !조건 다시 체크
  const hasToolbar =
    Children.toArray(children).some((child) => isValidElement(child) && child.type === TableToolbar) || noBorder;
  const hasPagination = Children.toArray(children).some((child) => {
    if (!isValidElement(child)) return false;
    if (child.type === TablePagination) return true;
    if (typeof child.type !== 'function') return false;

    const component = child.type as { displayName?: string; name?: string };
    const componentName = component.displayName || component.name || '';
    return componentName.includes('Pagination');
  });
  const hasFilterBar = Children.toArray(children).some(
    (child) => isValidElement(child) && child.type === TableFilterBar,
  );

  const hasFooter = table.getVisibleFlatColumns().some((column) => column.columnDef.footer !== undefined);

  const isVirtualTableLayout = useMemo(() => {
    let virtual = false;
    Children.forEach(children, (child) => {
      if (isValidElement(child) && child.type === TableMain) {
        const p = child.props as TableMainProps;
        virtual = Boolean(p.useVirtualization);
      }
    });
    return virtual;
  }, [children]);

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
    outsideFilters,
    hasFooter,
    isLoading,
    isVirtualTableLayout,
  };

  useEffect(() => {
    if (selectedRows.length === 0) {
      table.resetRowSelection();
    }
  }, [onSelectedRowsChange, selectedRows.length, table]);

  // isLoading이 true여도 헤더는 유지하고 바디만 스켈레톤 처리 (FixedTable에서 처리)
  return (
    <TableContainer hasToolbar={hasToolbar || hasFilterBar}>
      <TableProvider value={contextValue}>{children}</TableProvider>
    </TableContainer>
  );
};
