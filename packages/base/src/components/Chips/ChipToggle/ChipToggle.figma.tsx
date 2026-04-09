import React from 'react';
import figma from '@figma/code-connect';
import { ChipToggle } from './index';

figma.connect(ChipToggle, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=372%3A2446', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      s: 'S',
      xs: 'XS',
    }),
    defaultSelected: figma.enum('status', {
      selected: true,
    }),
  },
  example: ({ sizeVar, defaultSelected }) => (
    <ChipToggle styleVar='SOLID' sizeVar={sizeVar} defaultSelected={defaultSelected} text='Label' />
  ),
});
