import React from 'react';
import figma from '@figma/code-connect';
import { Pagination } from './index';

figma.connect(Pagination, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=12714%3A8114', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      s: 'S',
      m: 'XS',
    }),
  },
  example: ({ sizeVar }) => (
    <Pagination
      sizeVar={sizeVar}
      currentPage={0}
      pageSize='20'
      itemsTotalCount={100}
      previousPage={() => undefined}
      nextPage={() => undefined}
      gotoPage={() => undefined}
    />
  ),
});
