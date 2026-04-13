import React from 'react';
import figma from '@figma/code-connect';
import Checkbox from './Checkbox';

figma.connect(Checkbox, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=16%3A1575', {
  props: {
    styleVar: figma.enum('styeVar', {
      solid: 'PRIMARY',
      line: 'LINE',
    }),
    defaultSelected: figma.enum('status', {
      selected: true,
      'hover / selected': true,
      'disabled / selected': true,
    }),
    disabled: figma.enum('status', {
      'disabled / default': true,
      'disabled / selected': true,
    }),
  },
  example: ({ styleVar, defaultSelected, disabled }) => (
    <Checkbox styleVar={styleVar} defaultSelected={defaultSelected} disabled={disabled} />
  ),
});
