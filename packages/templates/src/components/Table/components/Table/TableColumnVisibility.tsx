/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { Table } from '@tanstack/react-table';
import { Checkbox, Stack, Text } from '@shoplflow/base';
import { useTable } from '../../context';

export const TableColumnVisibility = () => {
  const { table } = useTable<Table<object>>();

  const getColumnHeader = (column: any) => {
    const header = column.columnDef.header;
    if (typeof header === 'function') {
      const headerContent = header();
      if (typeof headerContent === 'string') {
        return headerContent;
      }
      // React 컴포넌트인 경우 props에서 children을 추출
      return headerContent.props?.children || headerContent;
    }
    return header;
  };

  return (
    <>
      <Stack.Horizontal align='center' spacing='spacing12'>
        <Checkbox checked={table.getIsAllColumnsVisible()} onClick={table.getToggleAllColumnsVisibilityHandler()} />
        <Text typography='body1_400'>전체 선택</Text>
      </Stack.Horizontal>
      <Stack.Vertical spacing='spacing12'>
        {table.getAllLeafColumns().map((column) => {
          return (
            <Stack.Horizontal key={column.id} align='center' spacing='spacing12'>
              <Checkbox checked={column.getIsVisible()} onClick={column.getToggleVisibilityHandler()} />
              <Text typography='body1_400'>{getColumnHeader(column)}</Text>
            </Stack.Horizontal>
          );
        })}
      </Stack.Vertical>
    </>
  );
};
