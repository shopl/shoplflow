import React from 'react';
import figma from '@figma/code-connect';
import { Tag } from './index';

figma.connect(Tag, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=23%3A501', {
  props: {
    styleVar: figma.enum('styleVar', {
      solid: 'SOLID',
      tint: 'TINT',
      line: 'LINE',
    }),
    sizeVar: figma.enum('sizeVar', {
      m: 'M',
      s: 'S',
      xs: 'XS',
    }),
    radius: figma.enum('borderRadius', {
      true: true,
      false: undefined,
    }),
  },
  example: ({ styleVar, sizeVar, radius }) => (
    <Tag styleVar={styleVar} sizeVar={sizeVar} radius={radius}>
      Label
    </Tag>
  ),
});
