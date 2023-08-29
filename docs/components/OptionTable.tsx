import styled from '@emotion/styled';

const Container = styled.div`
  margin: 4px -6px;
  overflow-x: auto;
  overscroll-behavior-x: contain;
  padding: 4px 6px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: small;
`;

const TableHeaderRow = styled.tr`
  border-bottom: 1px solid;
  padding: 4px;
  text-align: left;
  color: var(--neutral-700);
`;

const TableHeaderCell = styled.th`
  padding: 2px;
  font-weight: bold;
`;

const TableBody = styled.tbody`
  text-align: baseline;
  color: var(--gray-900);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--neutral-700, 50%);
`;

const TableCell = styled.td`
  white-space: pre;
  padding: 2px;
  font-family: monospace;
  font-size: small;
  font-weight: bold;
  line-height: 1.5;
  color: var(--violet-600);
`;

export function OptionTable({ options }: { options: [string, string, any] }) {
  return (
    <Container>
      <Table>
        <thead>
          <TableHeaderRow>
            <TableHeaderCell>Option</TableHeaderCell>
            <TableHeaderCell style={{ paddingLeft: '6px' }}>Type</TableHeaderCell>
            <TableHeaderCell style={{ paddingLeft: '6px', paddingRight: '6px' }}>Description</TableHeaderCell>
          </TableHeaderRow>
        </thead>
        <TableBody>
          {options.map(([option, type, description]) => (
            <TableRow key={option}>
              <TableCell className="text-violet-600 dark:text-violet-500">{option}</TableCell>
              <TableCell className="pl-6 text-slate-500 dark:text-slate-400">{type}</TableCell>
              <TableCell className="pl-6">{description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
