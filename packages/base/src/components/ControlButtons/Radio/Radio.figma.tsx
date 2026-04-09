import React from 'react';
import figma from '@figma/code-connect';
import Radio from './Radio';

figma.connect(Radio, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=16%3A1607', {
  props: {
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
  example: ({ defaultSelected, disabled }) => <Radio defaultSelected={defaultSelected} disabled={disabled} />,
});
