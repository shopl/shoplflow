import React from 'react';
import { Table } from './components';

export default {
  title: 'Components/Table/SubComponents/TableEmpty',
  component: Table.Empty,
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.Empty {...args} />
  </Table>
);
