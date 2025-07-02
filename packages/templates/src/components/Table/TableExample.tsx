import React from 'react';
import { Table } from './components';
import type { ColumnDef } from '@tanstack/react-table';
// import SearchBar from '@/version2/shared/components/SearchBar';
import { StackContainer } from '@shoplflow/base';

// 샘플 데이터 및 컬럼 정의
const columns: Array<ColumnDef<any>> = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
    enableSorting: true,
  },
  {
    accessorKey: 'name',
    header: '이름',
    size: 120,
  },
  {
    accessorKey: 'email',
    header: '이메일',
    size: 200,
  },
  {
    accessorKey: 'role',
    header: '권한',
    size: 100,
    enableColumnFilter: true,
    meta: {
      filterVariant: 'select',
      filterOptions: [
        { label: '관리자', value: 'admin' },
        { label: '사용자', value: 'user' },
      ],
    },
  },
  {
    accessorKey: 'date',
    header: '가입일',
    size: 140,
    enableSorting: true,
    cell: ({ getValue }) => {
      const value = getValue();
      return <span>{typeof value === 'string' ? value : ''}</span>;
    },
  },
];

const data = [
  { id: 1, name: '홍길동', email: 'hong@shopl.com', role: 'admin', date: '2023-07-01' },
  { id: 2, name: '김철수', email: 'kim@shopl.com', role: 'user', date: '2023-06-15' },
  { id: 3, name: '이영희', email: 'lee@shopl.com', role: 'user', date: '2023-08-10' },
];

export default function TableExample() {
  return (
    <StackContainer padding={'16px'} background={'neutral0'}>
      <Table data={data} columns={columns} manualSorting={false} columnResizing>
        <Table.Toolbar filterAccessor='name'>
          {({ totalCount }: { totalCount: number }) => (
            <>
              <span>총 {totalCount}명</span>
            </>
          )}
        </Table.Toolbar>
        <Table.FilterBar />
        <Table.Main stickyHeaderTopPosition={0} />
        <Table.Pagination total={data.length} defaultPageSize={2} />
      </Table>
    </StackContainer>
  );
}
