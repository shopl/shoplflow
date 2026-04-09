import React from 'react';
import Avatar from './Avatar';
import figma from '@figma/code-connect';

figma.connect(Avatar, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=2864%3A5173', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      'x-small': 'XS',
      small: 'S',
      medium: 'M',
      large: 'L',
      'x-large': 'XL',
    }),
  },
  example: ({ sizeVar }) => <Avatar sizeVar={sizeVar} />,
});
