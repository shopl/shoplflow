import type { Column, ColumnFilter } from '@tanstack/react-table';
import { isEqual } from 'lodash-es';
import { forwardRef, memo, useEffect, useImperativeHandle, useRef } from 'react';

import { Icon, IconButton, StackContainer, Tag, Text } from '@shoplflow/base';
import { CloseSmallIcon, RefreshIcon } from '@shoplflow/shopl-assets';

import { useTable } from '../../context';
import type { TableFilterBarProps } from '../../types';

export type TableFilterBarRef = {
  resetFilters: () => void;
};

/**
 * 테이블 필터 바 컴포넌트
 * @component
 * @returns {JSX.Element} 필터 바 렌더링
 */
export const TableFilterBar = memo(
  forwardRef<TableFilterBarRef, TableFilterBarProps>(({ onReset, onRemoveFilter }, ref) => {
    const { table, setFilterValue, hasToolbar, outsideFilters } = useTable();
    const filters = table.getState().columnFilters;
    const prevFiltersRef = useRef<ColumnFilter[]>();

    // outsideFilters와 table 필터를 합쳐서 표시
    // 같은 id를 가진 필터는 outsideFilters 우선, table 필터에서 동일 id는 제외
    const allFilters = [
      ...(outsideFilters || []),
      ...filters.filter((filter) => {
        // outsideFilters에 같은 id가 없을 때만 table 필터 포함
        return !outsideFilters?.some((outsideFilter) => outsideFilter.id === filter.id);
      }),
    ];

    // TableToolbar과 연결되어 있는 검색 이벤트 핸들러
    const onSearch = (value: string) => {
      setFilterValue(value);
      table.resetColumnFilters();
    };

    // 테이블 초기화 시 필터 초기화
    const resetFilters = () => {
      table.setColumnFilters([]);
      onReset?.();

      // 재귀적으로 모든 컬럼을 처리하는 함수
      const resetColumnFilters = (columns: Array<Column<any>>) => {
        columns.forEach((column) => {
          // 일반 컬럼 처리
          if (column.columnDef?.meta?.onFilterChange) {
            column.columnDef.meta.onFilterChange('');
          }

          // 그룹 컬럼 내부의 컬럼들 처리
          if (column.columns && column.columns.length > 0) {
            resetColumnFilters(column.columns);
          }
        });
      };

      // 모든 컬럼(그룹 포함) 처리 시작
      resetColumnFilters(table.getAllColumns());
    };

    // ref를 통해 외부에서 resetFilters 함수 호출 가능하도록 노출
    useImperativeHandle(ref, () => ({
      resetFilters,
    }));

    const handleRemoveFilter = (columnId: string, filterValue: string) => {
      const isOutsideFilter = outsideFilters?.some((f) => f.id === columnId && f.value === filterValue);
      if (isOutsideFilter && onRemoveFilter) {
        onRemoveFilter(columnId);
      }

      const column = table.getColumn(columnId);
      const newFilters = table.getState().columnFilters.filter((filter) => filter.id !== columnId);

      table.setColumnFilters(newFilters);
      column?.setFilterValue(undefined);
      column?.columnDef?.meta?.onFilterChange?.('');
    };

    // 필터 레이블 가져오는 함수
    const getFilterLabel = (columnId: string, value: string): string => {
      // 1. outsideFilters에서 label 찾기
      const outsideFilter = outsideFilters?.find((f) => f.id === columnId && f.value === value);
      if (outsideFilter?.label) {
        return outsideFilter.label;
      }

      // 2. 컬럼의 filterOptions에서 찾기 (accessor에 정의된 컬럼만)
      const column = table.getColumn(columnId);
      if (column && column.columnDef.meta?.filterOptions) {
        const filterOption = column.columnDef.meta.filterOptions.find((option) => option.value === value);
        if (filterOption) {
          return filterOption.label;
        }
      }

      // 3. 기본값으로 value 반환
      return value;
    };

    useEffect(() => {
      const outsideFilterIds = [...new Set(outsideFilters?.map((f) => f.id) ?? [])];
      const tableFilters = table.getState().columnFilters;
      const validTableFilters = tableFilters.filter((f) => !outsideFilterIds.includes(f.id));

      if (!isEqual(prevFiltersRef.current, validTableFilters)) {
        prevFiltersRef.current = validTableFilters;
        table.setColumnFilters(validTableFilters);
      }

      // outside 전환 후에도 getFilterValue()에 남은 내부 필터 값 제거
      outsideFilterIds.forEach((columnId) => {
        const column = table.getColumn(columnId);
        if (column && column.getFilterValue() != null && column.getFilterValue() !== '') {
          column.setFilterValue(undefined);
        }
      });
    }, [outsideFilters, table]);

    const _allFilters = allFilters.filter((filter) => filter.value !== 'ALL');

    return (
      <>
        {_allFilters.length > 0 && (
          <StackContainer.Horizontal
            width='100%'
            align='center'
            padding={hasToolbar ? '0px 16px 8px' : '0px 0px 8px 0px'}
            spacing={'spacing08'}
            data-component='table-filter-bar'
          >
            {/* 필터링 초기화 버튼 */}
            <IconButton
              sizeVar={'XS'}
              styleVar={'GHOST'}
              onClick={() => {
                resetFilters();

                // 검색 필터 인풋 초기화
                if (filters) {
                  onSearch('');
                }
              }}
              data-component='reset-button'
            >
              <Icon iconSource={RefreshIcon} color={'neutral700'} />
            </IconButton>

            {/* 필터 레이블 렌더링 */}
            {allFilters.map((filter) => {
              const filterValueString = filter.value as string;
              const filterLabel = getFilterLabel(filter.id, filterValueString);
              const truncatedLabel = filterLabel.length > 50 ? `${filterLabel.slice(0, 50)}...` : filterLabel;

              return (
                <Tag
                  key={`${filter.id}-${filterValueString}`}
                  sizeVar={'XS'}
                  styleVar={'TINT'}
                  color={'neutral600'}
                  background={'neutral150'}
                  radius
                  rightSource={
                    <Icon
                      iconSource={CloseSmallIcon}
                      sizeVar={'XS'}
                      color={'neutral350'}
                      onClick={() => handleRemoveFilter(filter.id, filterValueString)}
                      style={{ cursor: 'pointer' }}
                      data-component='filter-tag-delete-button'
                      role='button'
                    />
                  }
                >
                  <Text typography='caption_400' color='neutral600' lineClamp={1}>
                    {truncatedLabel}
                  </Text>
                </Tag>
              );
            })}
          </StackContainer.Horizontal>
        )}
      </>
    );
  }),
);
