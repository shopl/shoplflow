import styled from '@emotion/styled';
import type { Header } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import type { RefObject } from 'react';

import { Icon, IconButton, StackContainer, Text } from '@shoplflow/base';
import { AscIcon, DescIcon, DownArrowSolidXsmallIcon, MoreIcon, UpArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import type { IconSource } from '@shoplflow/shopl-assets';

import { getTableHeadSortModel } from '../../utils/getTableHeadSortModel';

const SmallIconButton = styled(IconButton)`
  svg {
    width: 12px !important;
    height: 12px !important;
  }
`;

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
  const { showSortMenu, sortColumn } = getTableHeadSortModel(header);
  const headerStyle = header.column.columnDef.meta?.headerProps?.style;

  // 정렬 상태에 따라 trigger 아이콘 변경
  const currentSort = sortColumn.getIsSorted();
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
      height={'100%'}
      align='center'
      style={{
        alignItems: 'center',
        boxSizing: 'border-box',
        ...(showSortMenu || showFilterMenu ? { justifyContent: 'space-between' as const } : {}),
        ...headerStyle,
      }}
      className={uniqueClass}
      ref={tableHeadRef}
      onClick={(e) => {
        e.stopPropagation();
        onTriggerClick();
      }}
      role='button'
    >
      <Text
        typography='body2_400'
        color='neutral400'
        lineClamp={2}
        style={showSortMenu || showFilterMenu ? { flex: 1, minWidth: 0 } : undefined}
      >
        {flexRender(header.column.columnDef.header, header.getContext())}
      </Text>

      {showSortMenu && (
        <IconButton sizeVar='XS' styleVar='GHOST' data-component='sort-button'>
          <Icon iconSource={triggerIcon} sizeVar='S' color={'neutral400'} className={uniqueClass} />
        </IconButton>
      )}
      {showFilterMenu && (
        <SmallIconButton sizeVar='XS' styleVar='GHOST' className={uniqueClass} data-component='filter-button'>
          <Icon
            iconSource={isOpen ? UpArrowSolidXsmallIcon : DownArrowSolidXsmallIcon}
            className={uniqueClass}
            sizeVar={'XS'}
            color={'neutral400'}
          />
        </SmallIconButton>
      )}
    </StackContainer.Horizontal>
  );
};
