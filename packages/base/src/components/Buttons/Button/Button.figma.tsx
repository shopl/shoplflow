import React from 'react';
import figma from '@figma/code-connect';
import { Button } from './index';

figma.connect(Button, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=310%3A5116', {
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
    isLoading: figma.enum('status', {
      loading: true,
    }),
  },
  example: ({ styleVar, sizeVar, disabled, isLoading }) => (
    <Button styleVar={styleVar} sizeVar={sizeVar} disabled={disabled} isLoading={isLoading}>
      Button
    </Button>
  ),
});
