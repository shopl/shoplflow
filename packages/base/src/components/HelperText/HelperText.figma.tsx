import React from 'react';
import figma from '@figma/code-connect';
import { HelperText } from './index';

figma.connect(HelperText, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=16366%3A145', {
  props: {
    type: figma.enum('type', {
      normal: 'NORMAL',
      bullet: 'BULLET',
    }),
    position: figma.enum('preset', {
      'preset-top': 'PRESET-TOP',
      'preset-bottom': 'PRESET-BOTTOM',
      'preset-none': undefined,
    }),
  },
  example: ({ type, position }) => (
    <HelperText type={type} position={position}>
      도움말 텍스트입니다.
    </HelperText>
  ),
});
