import React from 'react';
import type { Header } from '@tanstack/react-table';
import { Icon, Menu, StackContainer } from '@shoplflow/base';
import { AscIcon, DescIcon, MoreIcon } from '@shoplflow/shopl-assets';

type SortMenuProps = {
  header: Header<any, unknown>;
  onSortChange?: (value: 'asc' | 'desc' | undefined) => void;
  triggerWidth: number;
};
export const SortMenu = ({ onSortChange, header, triggerWidth }: SortMenuProps) => {
  const sortLabels = header.column.columnDef.meta?.sortLabels ?? ['오름차순', '내림차순', '정렬 해제'];
  const currentSort = header.column.getIsSorted();

  const handleSortChange = (value: 'asc' | 'desc' | undefined) => {
    if (value === undefined) {
      header.column.clearSorting();
    } else {
      header.column.toggleSorting(value === 'asc', false);
    }

    if (onSortChange) {
      onSortChange(value);
    }
  };

  if (!header.column.getCanSort()) {
    return null;
  }

  return (
    <StackContainer.Vertical
      padding={'4px'}
      radius={'borderRadius04'}
      background={'neutral0'}
      width={`${triggerWidth}px`}
      style={{ boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.12)' }}
    >
      <Menu
        leftSource={<Icon iconSource={DescIcon} sizeVar='S' />}
        isSelected={currentSort === 'desc'}
        onClick={() => handleSortChange('asc')}
      >
        {sortLabels[0]}
      </Menu>
      <Menu
        leftSource={<Icon iconSource={AscIcon} sizeVar='S' />}
        isSelected={currentSort === 'asc'}
        onClick={() => handleSortChange('desc')}
      >
        {sortLabels[1]}
      </Menu>
      <Menu
        leftSource={<Icon iconSource={MoreIcon} sizeVar='S' />}
        isSelected={!currentSort}
        onClick={() => handleSortChange(undefined)}
      >
        {sortLabels[2]}
      </Menu>
    </StackContainer.Vertical>
  );
};
