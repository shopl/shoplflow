import React, { useRef, useState, useEffect } from 'react';
import type { ColumnMeta, Header } from '@tanstack/react-table';
import { Menu, ScrollArea, StackContainer, Text } from '@shoplflow/base';

type FilterProps = {
  header: Header<any, unknown>;
  onFilterChange?: (value: string) => void;
  triggerWidth: number;
};

export const FilterMenu = ({ header, onFilterChange, triggerWidth }: FilterProps) => {
  const columnFilterValue = header.column.getFilterValue();
  const { filterOptions } = (header.column.columnDef.meta as ColumnMeta<any, unknown>) ?? {};
  const [maxLabelWidth, setMaxLabelWidth] = useState<number>(0);
  const labelRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    // 모든 label의 width 중 최대값을 구함
    const widths = labelRefs.current.map((ref) => ref?.offsetWidth || 0);
    setMaxLabelWidth(Math.max(...widths, 0));
  }, [filterOptions]);

  const handleFilterChange = (value: string) => {
    header.column.setFilterValue(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  if (!header.column.getCanFilter()) {
    return null;
  }

  return (
    <StackContainer.Vertical
      padding={'4px'}
      radius={'borderRadius04'}
      background={'neutral0'}
      width={maxLabelWidth > triggerWidth ? '100%' : `${triggerWidth}px`}
      style={{ boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.12)' }}
    >
      <ScrollArea autoHeight autoHeightMax={240}>
        {filterOptions?.map((option, idx) => (
          <Menu
            isSelected={columnFilterValue === option.value}
            onClick={() => handleFilterChange(option.value)}
            leftSource={option.icon}
            key={option.value}
          >
            <Text
              typography='body1_400'
              whiteSpace={'nowrap'}
              ref={(el) => (labelRefs.current[idx] = el as HTMLElement | null)}
            >
              {option.label}
            </Text>
          </Menu>
        ))}
      </ScrollArea>
    </StackContainer.Vertical>
  );
};
