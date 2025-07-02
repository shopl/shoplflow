import { Icon, IconButton, StackContainer } from '@shoplflow/base';
import type { IconSource } from '@shoplflow/shopl-assets';
import { AscIcon, DescIcon, DownArrowSolidXsmallIcon, MoreIcon, UpArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import type { Header } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { RefObject } from 'react';
import { SmallIconButton } from './Table.styled';

type TableHeadTriggerProps = {
  header: Header<any, unknown>;
  uniqueClass: string;
  tableHeadRef: RefObject<HTMLTableCellElement>;
  isOpen: boolean;
  onTriggerClick: () => void;
};

export const TableHeadTrigger = ({
  header,
  uniqueClass,
  tableHeadRef,
  isOpen,
  onTriggerClick,
}: TableHeadTriggerProps) => {
  const showFilterMenu = header.column.getCanFilter();
  const showSortMenu = header.column.getCanSort();

  // 정렬 상태에 따라 trigger 아이콘 변경
  const currentSort = header.column.getIsSorted();
  let triggerIcon: IconSource | null;

  if (currentSort === 'asc') {
    triggerIcon = AscIcon;
  } else if (currentSort === 'desc') {
    triggerIcon = DescIcon;
  } else {
    triggerIcon = MoreIcon;
  }

  return (
    <StackContainer.Horizontal
      width={'100%'}
      align='center'
      style={header.column.columnDef.meta?.headerProps?.style}
      className={uniqueClass}
      ref={tableHeadRef}
    >
      {flexRender(header.column.columnDef.header, header.getContext())}

      {showSortMenu && (
        <IconButton
          sizeVar='XS'
          styleVar='GHOST'
          onClick={(e) => {
            e.stopPropagation();
            onTriggerClick();
          }}
        >
          <Icon iconSource={triggerIcon} sizeVar='S' color={'neutral400'} className={uniqueClass} />
        </IconButton>
      )}
      {showFilterMenu && (
        <SmallIconButton
          sizeVar='XS'
          styleVar='GHOST'
          onClick={(e) => {
            e.stopPropagation();
            onTriggerClick();
          }}
        >
          <Icon
            iconSource={isOpen ? UpArrowSolidXsmallIcon : DownArrowSolidXsmallIcon}
            sizeVar={'XS'}
            color={'neutral400'}
          />
        </SmallIconButton>
      )}
    </StackContainer.Horizontal>
  );
};
