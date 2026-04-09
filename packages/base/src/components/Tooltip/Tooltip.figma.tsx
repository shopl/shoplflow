import React from 'react';
import figma from '@figma/code-connect';
import Tooltip from './Tooltip';
import { TooltipContent } from './TooltipContent';

figma.connect(Tooltip, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=28%3A992', {
  props: {},
  example: () => <Tooltip trigger={<button>Hover me</button>} popper={<TooltipContent content='도움말 텍스트' />} />,
});
