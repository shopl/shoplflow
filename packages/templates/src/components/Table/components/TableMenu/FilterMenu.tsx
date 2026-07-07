import type { ColumnMeta, Header } from '@tanstack/react-table';
import { useRef, useState, useEffect } from 'react';

import { Menu, ScrollArea, StackContainer, Text } from '@shoplflow/base';

import { useTable } from '../../context';

type FilterProps = {
  header: Header<any, unknown>;
  onFilterChange?: (value: string) => void;
  triggerWidth: number;
};

export const FilterMenu = ({ header, onFilterChange, triggerWidth }: FilterProps) => {
  const { outsideFilters } = useTable(); // context에서 outsideFilters 가져오기
  const columnFilterValue = header.column.getFilterValue();
  const meta = (header.column.columnDef.meta as ColumnMeta<any, unknown>) ?? {};
  const { filterOptions, filterMenuWidth = 'trigger' } = meta;
  const [maxLabelWidth, setMaxLabelWidth] = useState<number>(0);
  const measureRefs = useRef<Array<HTMLElement | null>>([]);

  // outsideFilters에서 현재 컬럼에 해당하는 모든 필터 값 찾기
  const outsideFilterValues = outsideFilters
    ?.filter((filter) => filter.id === header.column.id)
    .map((filter) => filter.value);

  // FilterBar와 동일하게 outsideFilters 우선 (내부 columnFilter → outside 전환 후 동기화)
  const activeFilterValues =
    outsideFilterValues && outsideFilterValues.length > 0
      ? outsideFilterValues
      : columnFilterValue != null && columnFilterValue !== ''
        ? [String(columnFilterValue)]
        : [];

  useEffect(() => {
    // 화면 밖 측정 요소로 한 줄 기준 최대 라벨 너비 구함 (메뉴 안에서 측정하면 triggerWidth에 눌려 잘못 나옴)
    const count = filterOptions?.length ?? 0;
    const widths = measureRefs.current.slice(0, count).map((ref) => ref?.offsetWidth ?? 0);
    setMaxLabelWidth(widths.length ? Math.max(...widths, 0) : 0);
  }, [filterOptions]);

  const handleFilterChange = (value: string) => {
    // 이미 선택된 값을 다시 클릭하면 필터 해제
    const isCurrentlySelected = activeFilterValues.includes(value);
    if (isCurrentlySelected) {
      header.column.setFilterValue('');
      if (onFilterChange) {
        onFilterChange('');
      }
    } else {
      header.column.setFilterValue(value);
      if (onFilterChange) {
        onFilterChange(value);
      }
    }
  };

  if (!header.column.getCanFilter()) {
    return null;
  }

  // filterMenuWidth가 'auto'일 때만 라벨이 길면 100%, 기본('trigger')은 항상 트리거 너비 사용
  const menuWidth = filterMenuWidth === 'auto' && maxLabelWidth > triggerWidth ? '100%' : `${triggerWidth}px`;

  return (
    <>
      {/* 화면 밖에서 측정 → 부모 너비에 구애받지 않고 한 줄 너비 정확히 측정 */}
      <div
        style={{
          position: 'absolute',
          left: '-9999px',
          top: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        {filterOptions?.map((option, idx) => (
          <Text
            key={option.value}
            typography='body1_400'
            ref={(el) => (measureRefs.current[idx] = el as HTMLElement | null)}
            style={{ whiteSpace: 'nowrap' }}
          >
            {option.label}
          </Text>
        ))}
      </div>
      <StackContainer.Vertical
        padding={'4px'}
        radius={'borderRadius04'}
        background={'neutral0'}
        width={menuWidth}
        style={{ boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.12)' }}
        onWheel={(e) => e.stopPropagation()}
        onScroll={(e) => e.stopPropagation()}
      >
        <ScrollArea autoHeight autoHeightMax={240}>
          <ul>
            {filterOptions?.map((option) => (
              <Menu
                isSelected={activeFilterValues.includes(option.value)}
                onClick={() => handleFilterChange(option.value)}
                leftSource={option.icon}
                key={option.value}
              >
                <Text typography='body1_400' lineClamp={2}>
                  {option.label}
                </Text>
              </Menu>
            ))}
          </ul>
        </ScrollArea>
      </StackContainer.Vertical>
    </>
  );
};
