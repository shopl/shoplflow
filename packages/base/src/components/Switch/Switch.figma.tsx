import React from 'react';
import figma from '@figma/code-connect';
import Switch from './Switch';

figma.connect(Switch, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=13827%3A762', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      m: 'M',
      s: 'S',
    }),
    disabled: figma.boolean('disabled'),
    defaultSelected: figma.boolean('selected'),
  },
  example: ({ sizeVar, disabled, defaultSelected }) => (
    <Switch sizeVar={sizeVar} disabled={disabled} defaultSelected={defaultSelected} activeColor='primary300' />
  ),
});
