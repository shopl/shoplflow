import type { Column, Header } from '@tanstack/react-table';

import { Icon, Menu, StackContainer } from '@shoplflow/base';
import { AscIcon, DescIcon, MoreIcon } from '@shoplflow/shopl-assets';

type SortMenuProps = {
  header: Header<any, unknown>;
  /**
   * 정렬 적용 대상 컬럼. 그룹 헤더에서 단일 리프로 위임할 때 리프 컬럼을 넘긴다.
   * 생략 시 `header.column`과 동일하게 동작한다.
   */
  sortColumn?: Column<any, unknown>;
  onSortChange?: (value: 'asc' | 'desc' | undefined) => void;
  triggerWidth: number;
};
export const SortMenu = ({ onSortChange, header, sortColumn, triggerWidth }: SortMenuProps) => {
  const column = sortColumn ?? header.column;
  const sortLabels = header.column.columnDef.meta?.sortLabels ??
    column.columnDef.meta?.sortLabels ?? ['정렬 해제', '오름차순', '내림차순'];
  const currentSort = column.getIsSorted();

  const handleSortChange = (value: 'asc' | 'desc' | undefined) => {
    if (value === undefined) {
      column.clearSorting();
    } else {
      column.toggleSorting(value === 'desc', false);
    }

    if (onSortChange) {
      onSortChange(value);
    }
  };

  const delegatedSingleLeaf =
    header.column.columnDef.meta?.delegateSortToSingleLeaf === true &&
    (header.column.columns?.length ?? 0) > 0 &&
    header.column.getLeafColumns().length === 1;

  if (!delegatedSingleLeaf && !column.getCanSort()) {
    return null;
  }

  return (
    <StackContainer.Vertical
      padding={'4px'}
      radius={'borderRadius04'}
      background={'neutral0'}
      width={`${triggerWidth}px`}
      style={{ boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.12)' }}
      as='ul'
    >
      <Menu
        leftSource={<Icon iconSource={MoreIcon} sizeVar='S' />}
        isSelected={!currentSort}
        onClick={() => handleSortChange(undefined)}
      >
        {sortLabels[0]}
      </Menu>
      <Menu
        leftSource={<Icon iconSource={AscIcon} sizeVar='S' />}
        isSelected={currentSort === 'asc'}
        onClick={() => handleSortChange('asc')}
      >
        {sortLabels[1]}
      </Menu>
      <Menu
        leftSource={<Icon iconSource={DescIcon} sizeVar='S' />}
        isSelected={currentSort === 'desc'}
        onClick={() => handleSortChange('desc')}
      >
        {sortLabels[2]}
      </Menu>
    </StackContainer.Vertical>
  );
};
