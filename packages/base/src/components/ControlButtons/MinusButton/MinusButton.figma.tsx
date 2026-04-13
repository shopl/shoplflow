import React from 'react';
import figma from '@figma/code-connect';
import MinusBox from './MinusButton';

figma.connect(MinusBox, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=16%3A1402', {
  props: {},
  example: () => <MinusBox />,
});
