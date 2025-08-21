import React from 'react';

import { StackContainer } from '@shoplflow/base';

import { useTable } from '../../context';
import type { TableToolbarProps } from '../../types';

/**
 * 테이블의 툴바를 렌더링하는 컴포넌트
 * @component
 * @param {Object} props - 컴포넌트 props
 * @param {string} [props.filterAccessor] - 필터링할 컬럼의 accessor
 * @param {Function} props.children - 툴바 내부에 렌더링할 자식 컴포넌트를 반환하는 함수
 * @param {number} props.children.totalCount - 전체 데이터 수
 * @param {string} props.children.filterAccessor - 필터링할 컬럼의 accessor
 * @param {Function} props.children.onSearch - 검색 이벤트 핸들러
 * @param {string} props.children.filterValue - 현재 필터 값
 * @returns {JSX.Element} 렌더링된 툴바 컴포넌트
 */

export const TableToolbar = ({
  children,
  filterAccessor,
  height = '56px',
  padding = '12px 20px',
  totalCount,
}: TableToolbarProps) => {
  const { table, filterValue, setFilterValue } = useTable();

  /**
   * 넘겨 받은 totalCount가 없다면, table.getPrePaginationRowModel().rows.length 값을 사용
   * totalCount는 default 0으로 설정되어 있어 || 연산자를 사용해야 함
   */
  const _totalCount = totalCount || table.getPrePaginationRowModel().rows.length;

  // TableFilterBar와 연결되어 있는 검색 이벤트 핸들러
  const onSearch = (value: string) => {
    if (!filterAccessor) {
      return null;
    }

    setFilterValue(value);
    table.getColumn(filterAccessor)?.setFilterValue(value);
  };

  return (
    <StackContainer.Horizontal width='100%' height={height} align='center' padding={padding} justify='space-between'>
      {children({
        totalCount: _totalCount,
        filterAccessor: filterAccessor ?? '',
        onSearch,
        filterValue,
      })}
    </StackContainer.Horizontal>
  );
};
