import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Pagination from './Pagination';
import type { PaginationProps } from './Pagination.types';
import { Button } from '../Buttons';
import PaginationSizeSelector from './PaginationSizeSelector';

const meta = {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;

export const Playground: StoryFn<PaginationProps> = (args) => {
  const itemsTotalCount = 86;

  const [pageSize, setPageSize] = useState('20');
  const [currentPage, setCurrentPage] = useState(0);

  const pageSizeList = new Array(10).fill(0).map((_, index) => {
    return {
      label: `${index + 1}0`,
      value: `${index + 1}0`,
    };
  });

  return (
    <Stack width='900px'>
      <Pagination
        {...args}
        currentPage={currentPage}
        previousPage={() => setCurrentPage((prev) => prev - 1)}
        pageSize={pageSize}
        pageCount={5}
        nextPage={() => setCurrentPage((prev) => prev + 1)}
        itemsTotalCount={itemsTotalCount}
        gotoPage={(page) => setCurrentPage(page)}
        leftSource={
          <Stack.Horizontal>
            <Button styleVar='GHOST' sizeVar='S'>
              leftSource
            </Button>
            <Button styleVar='PRIMARY' sizeVar='S'>
              leftSource
            </Button>
          </Stack.Horizontal>
        }
        rightSource={
          <PaginationSizeSelector
            data={pageSizeList}
            pageSize={pageSize}
            setPageSize={(value) => {
              setCurrentPage(0);
              setPageSize(value);
            }}
          />
        }
      />
    </Stack>
  );
};
