import figma from '@figma/code-connect';
import { ChipButton } from './index';

figma.connect(ChipButton, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=1970%3A234', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      s: 'S',
      xs: 'XS',
    }),
  },
  example: ({ sizeVar }) => <ChipButton styleVar='LINE' sizeVar={sizeVar} text='Label' />,
});
