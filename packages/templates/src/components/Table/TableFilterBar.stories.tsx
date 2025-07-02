import React from 'react';
import { Table } from './components';

export default {
  title: 'Components/Table/SubComponents/TableFilterBar',
  component: Table.FilterBar,
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.FilterBar {...args} />
  </Table>
);
