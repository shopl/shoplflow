import React from 'react';
import { StyledTooltipContent } from './Tooltip.styled';
import type { TooltipContentProps } from './Tooltip.types';
import { Text } from '../Text';

export const TooltipContent = ({ content, ...args }: TooltipContentProps) => {
  return (
    <StyledTooltipContent {...args}>
      <Text typography='caption_400' color='neutral0' wordBreak='break-all' whiteSpace='pre-line'>
        {content}
      </Text>
    </StyledTooltipContent>
  );
};
