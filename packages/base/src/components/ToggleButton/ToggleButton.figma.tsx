import React from 'react';
import figma from '@figma/code-connect';
import ToggleButton from './ToggleButton';

figma.connect(
  ToggleButton,
  'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=16861%3A803',
  {
    props: {
      sizeVar: figma.enum('sizeVar', {
        medium: 'M',
        small: 'S',
      }),
      disabled: figma.enum('status', {
        disabled: true,
      }),
    },
    example: ({ sizeVar }) => (
      <ToggleButton targetName='toggle' fixedWidth={320} sizeVar={sizeVar}>
        {/* ToggleButton children */}
      </ToggleButton>
    ),
  },
);
