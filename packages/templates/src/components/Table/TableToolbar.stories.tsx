import React from 'react';
import { Table } from './components';

export default {
  title: 'Components/Table/SubComponents/TableToolbar',
  component: Table.Toolbar,
  argTypes: {
    filterAccessor: {
      control: 'text',
      description: '필터링 기준 accessor',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    children: {
      description: '렌더 함수 (props: { totalCount, filterAccessor, onSearch, filterValue })',
      table: {
        type: { summary: '(props) => ReactNode' },
      },
      control: false,
    },
  },
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.Toolbar {...args} />
  </Table>
);
