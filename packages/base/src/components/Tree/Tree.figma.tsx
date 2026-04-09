import React from 'react';
import figma from '@figma/code-connect';
import { TreeItem } from './index';

figma.connect(TreeItem, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=1605%3A6426', {
  props: {
    initialIsOpen: figma.enum('Stauts', {
      opened: true,
    }),
    disabled: figma.enum('Stauts', {
      disabled: true,
    }),
  },
  example: ({ initialIsOpen, disabled }) => (
    <TreeItem label='Tree item' initialIsOpen={initialIsOpen} disabled={disabled} />
  ),
});
