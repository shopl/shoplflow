import React from 'react';
import figma from '@figma/code-connect';
import { List } from './index';

figma.connect(List, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=455%3A5304', {
  props: {
    selected: figma.enum('status', {
      hover: true,
    }),
    disabled: figma.enum('status', {
      disabled: true,
    }),
  },
  example: ({ selected, disabled }) => (
    <List selected={selected} disabled={disabled}>
      List item
    </List>
  ),
});
