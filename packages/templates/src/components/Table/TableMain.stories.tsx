import React from 'react';
import { Table } from './components';

export default {
  title: 'Components/Table/SubComponents/TableMain',
  component: Table.Main,
};

export const 기본 = (args) => (
  <Table data={[]} columns={[]}>
    <Table.Main {...args} />
  </Table>
);
