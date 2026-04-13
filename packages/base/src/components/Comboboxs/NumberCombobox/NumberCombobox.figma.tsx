import React from 'react';
import figma from '@figma/code-connect';
import { NumberCombobox } from './index';

figma.connect(
  NumberCombobox,
  'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=8313%3A962',
  {
    props: {
      sizeVar: figma.enum('sizeVar', {
        s: 'S',
        m: 'M',
      }),
      isError: figma.enum('status', {
        error: true,
      }),
      disabled: figma.enum('status', {
        disabled: true,
      }),
    },
    example: ({ sizeVar, isError, disabled }) => (
      <NumberCombobox sizeVar={sizeVar} isError={isError} disabled={disabled} items={[{ label: '00', value: '00' }]} />
    ),
  },
);
