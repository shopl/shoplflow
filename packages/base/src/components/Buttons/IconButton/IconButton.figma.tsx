import React from 'react';
import figma from '@figma/code-connect';
import { IconButton } from './index';

figma.connect(IconButton, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=3267%3A4150', {
  props: {
    styleVar: figma.enum('styleVar', {
      primary: 'PRIMARY',
      secondary: 'SECONDARY',
      solid: 'SOLID',
      ghost: 'GHOST',
    }),
    sizeVar: figma.enum('sizeVar', {
      m: 'M',
      s: 'S',
      xs: 'XS',
    }),
    disabled: figma.enum('status', {
      disabled: true,
    }),
  },
  example: ({ styleVar, sizeVar, disabled }) => (
    <IconButton styleVar={styleVar} sizeVar={sizeVar} disabled={disabled} iconSource={() => null} />
  ),
});
