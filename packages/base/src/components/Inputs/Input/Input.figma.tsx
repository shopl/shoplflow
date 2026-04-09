import React from 'react';
import figma from '@figma/code-connect';
import { Input } from './index';

figma.connect(Input, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=150%3A1986', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      M: 'M',
      S: 'S',
    }),
    isError: figma.enum('status', {
      error: true,
    }),
    disabled: figma.enum('status', {
      disabled: true,
    }),
  },
  example: ({ sizeVar, isError, disabled }) => (
    <Input sizeVar={sizeVar} isError={isError} disabled={disabled} placeholder='입력하세요' />
  ),
});
