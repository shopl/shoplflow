import React from 'react';
import { Table } from './components';

export default {
  title: 'Components/Table/SubComponents/TableColumnVisibility',
  component: Table.ColumnVisibility,
  parameters: { disable: true },
  // props 없음
  argTypes: {
    none: {
      control: false,
      description: 'props 없음',
    },
  },
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.ColumnVisibility {...args} />
  </Table>
);
