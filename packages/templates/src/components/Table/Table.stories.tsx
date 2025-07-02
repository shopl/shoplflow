/* eslint-disable */
import React from 'react';
import { Table } from './components';
import type { ColumnDef } from '@tanstack/react-table';
import { makeLiveEditStory } from 'storybook-addon-code-editor';
// @ts-expect-error 타입 추론 오류
import TableExampleCode from './TableExample.tsx?raw';
import * as TableLib from './components';
import * as ReactTableLib from '@tanstack/react-table';
// @ts-expect-error 타입 추론 오류
import SelectRowExampleCode from './SelectRowExample.tsx?raw';
import * as BaseLib from '@shoplflow/base';
// @ts-expect-error 타입 추론 오류
import EmptyTableExampleCode from './EmptyTableExample.tsx?raw';

// 샘플 데이터 및 컬럼 정의
const columns: Array<ColumnDef<any>> = [
  {
    accessorKey: 'id',
    header: 'ID',
    size: 80,
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
];

const data = [
  { id: 1, name: '홍길동', email: 'hong@shopl.com', role: 'admin' },
  { id: 2, name: '김철수', email: 'kim@shopl.com', role: 'user' },
  { id: 3, name: '이영희', email: 'lee@shopl.com', role: 'user' },
];

const meta = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

export const 기본테이블 = () => (
  <Table data={data} columns={columns}>
    <Table.Main stickyHeaderTopPosition={0} />
  </Table>
);

export const 툴바_필터_페이지네이션: any = {
  args: {},
};

makeLiveEditStory(툴바_필터_페이지네이션, {
  availableImports: {
    './components': TableLib,
    // '@/version2/shared/components/SearchBar': SearchBar,
    '@shoplflow/base': BaseLib,
    '@tanstack/react-table': ReactTableLib,
  },
  code: TableExampleCode,
});

export const 행_선택: any = {
  args: {},
};

makeLiveEditStory(행_선택, {
  availableImports: {
    './components': TableLib,
    '@shoplflow/base': BaseLib,
    '@tanstack/react-table': ReactTableLib,
  },
  code: SelectRowExampleCode,
});

export const 빈테이블: any = {
  args: {},
};

makeLiveEditStory(빈테이블, {
  availableImports: {
    './components': TableLib,
    '@shoplflow/base': BaseLib,
    '@tanstack/react-table': ReactTableLib,
  },
  code: EmptyTableExampleCode,
});
