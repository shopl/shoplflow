import React, { useEffect, useRef, useState } from 'react';
import { colorTokens, Popper } from '@shoplflow/base';
import { useOutsideClick } from '@shoplflow/utils';
import { FilterMenu, SortMenu } from '../TableMenu';
import { TableHeadTrigger } from './TableHeadTrigger';
import type { TableHeadCellProps } from '../../types';

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

  const uniqueClass = `filter-menu-${header.column.id}`;
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${uniqueClass}`,
  });

  const showFilterMenu = header.column.getCanFilter();
  const showSortMenu = header.column.getCanSort();

  // 필터링이나 정렬 가능 여부에 따라 포인터 스타일 결정
  const hasInteraction = showFilterMenu || showSortMenu;
  const cursorStyle = hasInteraction ? 'pointer' : 'default';

  useEffect(() => {
    if (tableHeadRef.current) {
      setTriggerWidth(tableHeadRef.current.clientWidth);
    }
  }, [isOpen, tableHeadRef]);

  return (
    <Popper offset={4} placement='bottom-start' strategy='absolute'>
      <Popper.Trigger
        isOpen={isOpen}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        style={{
          cursor: cursorStyle,
          background: `${(showFilterMenu || showSortMenu) && isOpen ? colorTokens.neutral400_5 : colorTokens.neutral100}`,
          padding: `${(showFilterMenu || showSortMenu) && '8px'}`,
          borderRadius: `${isOpen ? '6px' : '0px'}`,
        }}
        width={'100%'}
      >
        <TableHeadTrigger
          isOpen={isOpen}
          header={header}
          uniqueClass={uniqueClass}
          tableHeadRef={tableHeadRef}
          onTriggerClick={() => setIsOpen((prev) => !prev)}
        />
      </Popper.Trigger>

      {isOpen && (
        <Popper.Portal>
          {showFilterMenu && (
            <FilterMenu
              header={header}
              onFilterChange={(value) => {
                onFilterChange?.(value);
              }}
              triggerWidth={triggerWidth + 16}
            />
          )}

          {showSortMenu && (
            <SortMenu
              header={header}
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
