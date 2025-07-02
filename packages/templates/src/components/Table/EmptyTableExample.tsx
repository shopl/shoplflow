import { createColumnHelper } from '@tanstack/react-table';
import { Table } from './components';
import { Checkbox, Stack, StackContainer } from '@shoplflow/base';

type DataType = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const columnHelper = createColumnHelper<DataType>();

export const columns = [
  columnHelper.accessor('id', {
    header: ({ table }) => (
      <Stack.Horizontal width={'100%'} justify='center'>
        <Checkbox
          isSelected={table.getIsAllRowsSelected()}
          onClick={(e) => table.getToggleAllRowsSelectedHandler()(e)}
        />
      </Stack.Horizontal>
    ),
    cell: ({ row }) => (
      <Stack.Horizontal justify='center'>
        <Checkbox
          isSelected={row.getIsSelected()}
          onClick={(e) => {
            e.stopPropagation();
            row.getToggleSelectedHandler()(e);
          }}
        />
      </Stack.Horizontal>
    ),
    size: 48,
  }),
  columnHelper.accessor('name', {
    header: '이름',
    size: 120,
  }),
  columnHelper.accessor('email', {
    header: '이메일',
    size: 200,
  }),
  columnHelper.accessor('role', {
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
  }),
];

export const data: DataType[] = [
  { id: 1, name: '홍길동', email: 'hong@shopl.com', role: 'admin' },
  { id: 2, name: '김철수', email: 'kim@shopl.com', role: 'user' },
  { id: 3, name: '이영희', email: 'lee@shopl.com', role: 'user' },
];

export default function EmptyTableExample() {
  return (
    <Table data={[]} columns={columns}>
      <Table.Main stickyHeaderTopPosition={0}>
        <Table.Empty>
          <StackContainer height={'466px'} align='center' justify='center' spacing='spacing12'>
            데이터가 없습니다.
          </StackContainer>
        </Table.Empty>
      </Table.Main>
    </Table>
  );
}
