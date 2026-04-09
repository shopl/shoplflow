import React from 'react';
import figma from '@figma/code-connect';
import Switch from './Switch';

figma.connect(Switch, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=16%3A1746', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      medium: 'M',
      small: 'S',
    }),
    defaultSelected: figma.enum('status', {
      selected: true,
      selected_hover: true,
      selected_disabled: true,
    }),
    disabled: figma.enum('status', {
      default_disabled: true,
      selected_disabled: true,
    }),
  },
  example: ({ sizeVar, disabled, defaultSelected }) => (
    <Switch sizeVar={sizeVar} disabled={disabled} defaultSelected={defaultSelected} activeColor='primary300' />
  ),
});
