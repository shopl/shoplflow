import { useEffect, useMemo, useRef, useState } from 'react';

import { colorTokens, Popper, shift } from '@shoplflow/base';
import { usePopover } from '@shoplflow/utils';

import type { TableHeadCellProps } from '../../types/TableTypes';
import { getTableHeadSortModel } from '../../utils/getTableHeadSortModel';
import { FilterMenu, SortMenu } from '../TableMenu';

import { TableHeadTrigger } from './TableHeadTrigger';

/**
 * 테이블 헤더 셀 컴포넌트
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {Header} props.header - 테이블 헤더 정보
 * @param {Function} [props.onFilterChange] - 필터 변경 시 호출되는 콜백 함수
 * @param {Function} [props.onSortChange] - 정렬 변경 시 호출되는 콜백 함수
 * @returns {JSX.Element} 렌더링된 테이블 헤더 셀 컴포넌트
 */

const TableHeadCell = ({ header, onFilterChange, onSortChange }: TableHeadCellProps) => {
  const tableHeadRef = useRef<HTMLTableCellElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);

  const uniqueClass = useMemo(() => {
    // 간단하게 UUID 사용
    return `filter-menu-${crypto.randomUUID()}`;
  }, []);

  const { isOpen: isPopoverOpen, onClickTrigger: onClickPopoverTrigger } = usePopover({
    popoverSelector: `.${uniqueClass}`,
  });

  const sortModel = getTableHeadSortModel(header);
  const showFilterMenu = header.column.getCanFilter();
  const showSortMenu = sortModel.showSortMenu;

  // 필터링이나 정렬 가능 여부에 따라 포인터 스타일 결정
  const hasInteraction = showFilterMenu || showSortMenu;
  const cursorStyle = hasInteraction ? 'pointer' : 'default';

  useEffect(() => {
    if (tableHeadRef.current) {
      setTriggerWidth(tableHeadRef.current.clientWidth);
    }
  }, [isPopoverOpen, tableHeadRef]);

  return (
    <Popper
      offset={{ mainAxis: 4, crossAxis: -4 }}
      autoPlacement={{ allowedPlacements: ['bottom-start', 'bottom-end'] }}
      placement='bottom-start'
      strategy='absolute'
      middlewares={[shift({ padding: 6 })]}
    >
      <Popper.Trigger
        isOpen={isPopoverOpen}
        data-expanded={isPopoverOpen}
        onClick={() => {
          onClickPopoverTrigger();
        }}
        style={{
          cursor: cursorStyle,
          background: `${(showFilterMenu || showSortMenu) && isPopoverOpen ? colorTokens.neutral400_5 : 'transparent'}`,
          padding: `${(showFilterMenu || showSortMenu) && '4px'}`,
          borderRadius: `${isPopoverOpen ? '6px' : '0px'}`,
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          width: '100%',
          height: '100%',
          minHeight: '100%',
        }}
        width={'100%'}
      >
        <TableHeadTrigger
          isOpen={isPopoverOpen}
          header={header}
          uniqueClass={uniqueClass}
          tableHeadRef={tableHeadRef}
          onTriggerClick={() => {
            onClickPopoverTrigger();
          }}
        />
      </Popper.Trigger>

      {isPopoverOpen && (
        <Popper.Portal>
          {showFilterMenu && (
            <FilterMenu
              header={header}
              onFilterChange={(value) => {
                // header.column.columnDef.meta?.onFilterChange?.(value);
                onFilterChange?.(value);
              }}
              triggerWidth={triggerWidth + 16}
            />
          )}

          {showSortMenu && (
            <SortMenu
              header={header}
              sortColumn={sortModel.sortColumn}
              onSortChange={(value) => {
                onSortChange?.(value);
              }}
              triggerWidth={triggerWidth + 16}
            />
          )}
        </Popper.Portal>
      )}
    </Popper>
  );
};

export default TableHeadCell;
