import React from 'react';
import { Table } from './components';

export default {
  title: 'Components/Table/SubComponents/TablePagination',
  component: Table.Pagination,
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.Pagination {...args} />
  </Table>
);
