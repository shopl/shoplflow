import React, { forwardRef } from 'react';
import * as StyledMinusBox from './MinusButton.styled';
import type { MinusBoxProps } from './MinusButton.types';

const MinusButton = forwardRef<HTMLButtonElement, MinusBoxProps>(({ onClick, color = 'neutral300', ...rest }, ref) => {
  return (
    <StyledMinusBox.Container>
      <StyledMinusBox.IconButton color={color} onClick={onClick} ref={ref} {...rest}>
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z'
            fill='none'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M3 8C3 7.44772 3.44772 7 4 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H4C3.44772 9 3 8.55228 3 8Z'
            fill='white'
          />
        </svg>
      </StyledMinusBox.IconButton>
    </StyledMinusBox.Container>
  );
});

export default MinusButton;
