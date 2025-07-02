import { useTable } from '../../context';
import { Icon, IconButton, StackContainer, Tag, Text } from '@shoplflow/base';
import { CloseSmallIcon, RefreshIcon } from '@shoplflow/shopl-assets';
import type { Column, ColumnFilter } from '@tanstack/react-table';
import { isEqual } from 'lodash-es';
import { memo, useEffect, useRef } from 'react';

// !글로벌 필터 시 filterOptions에 들어가지 않으면 필터 레이블이 아니라 value로 나옴
// outsideFilters를 넣어주면 됨 글로벌 필터 레이블 보이게 하려면 useUserMgmtStatusTableView.tsx 파일 참고
/**
 * 테이블 필터 바 컴포넌트
 * @component
 * @returns {JSX.Element} 필터 바 렌더링
 */

export const TableFilterBar = memo(({ outsideFilters }: { outsideFilters?: ColumnFilter[] }) => {
  const { table, setFilterValue, hasToolbar } = useTable();
  const filters = table.getState().columnFilters;
  const prevFiltersRef = useRef<ColumnFilter[]>();

  // TableToolbar과 연결되어 있는 검색 이벤트 핸들러
  const onSearch = (value: string) => {
    setFilterValue(value);
    table.resetColumnFilters();
  };

  // 테이블 초기화 시 필터 초기화
  const resetFilters = () => {
    table.setColumnFilters([]);

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

  const handleRemoveFilter = (columnId: string, filterValue: string) => {
    // 현재 필터에서 선택된 필터만 제거
    const newFilters = table
      .getState()
      .columnFilters.filter((filter) => !(filter.id === columnId && filter.value === filterValue));

    table.setColumnFilters(newFilters);

    // 해당 컬럼의 onFilterChange 호출
    table.getColumn(columnId)?.columnDef?.meta?.onFilterChange?.('');
  };

  // 필터 레이블 가져오는 함수
  const getFilterLabel = (columnId: string, value: string): string => {
    const column = table.getColumn(columnId);
    if (!column || !column.columnDef.meta?.filterOptions) {
      return value;
    }

    const filterOption = column.columnDef.meta.filterOptions.find((option) => option.value === value);

    return filterOption ? filterOption.label : value;
  };

  useEffect(() => {
    const validFilters = outsideFilters
      ?.filter((item) => item.value !== undefined && item.value !== '')
      .map((item) => ({ id: item.id, value: item.value }));

    // 이전 값과 다를 때만 setColumnFilters
    if (!isEqual(prevFiltersRef.current, validFilters)) {
      prevFiltersRef.current = validFilters;
      if (validFilters && validFilters.length > 0) {
        table.setColumnFilters(validFilters);
      } else {
        table.setColumnFilters([]);
      }
    }
  }, [outsideFilters, table]);

  return (
    <>
      {filters.length > 0 && (
        <StackContainer.Horizontal
          width='100%'
          align='center'
          padding={hasToolbar ? '0px 16px 8px' : '0px 0px 8px 0px'}
          spacing={'spacing08'}
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
          >
            <Icon iconSource={RefreshIcon} color={'neutral700'} />
          </IconButton>

          {/* 필터 레이블 렌더링 */}
          {filters.map((filter) => {
            const filterValueString = filter.value as string;
            const filterLabel = getFilterLabel(filter.id, filterValueString);

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
                  />
                }
              >
                <Text typography='caption_400' color='neutral600'>
                  {filterLabel}
                </Text>
              </Tag>
            );
          })}
        </StackContainer.Horizontal>
      )}
    </>
  );
});
