import React from 'react';
import figma from '@figma/code-connect';
import { Tabs, Tab } from './index';

figma.connect(Tab, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=4638%3A4840', {
  props: {
    styleVar: figma.enum('styleVar', {
      'normal tab': 'NORMAL',
      'info tab': 'INFO',
    }),
    sizeVar: figma.enum('sizeVar', {
      large: 'L',
      medium: 'M',
    }),
  },
  example: ({ styleVar, sizeVar }) => (
    <Tabs initialTab='tab1' onChange={() => undefined}>
      <Tab value='tab1' label='Tab 1' styleVar={styleVar} sizeVar={sizeVar} />
      <Tab value='tab2' label='Tab 2' styleVar={styleVar} sizeVar={sizeVar} />
    </Tabs>
  ),
});
