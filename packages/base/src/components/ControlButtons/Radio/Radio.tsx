import type { MouseEvent } from 'react';
import React, { useState } from 'react';
import { Container, StyledRadio } from './Radio.styled';
import type { RadioProps } from './Radio.types';
import { useOnToggle } from '../../../hooks/useOnToggle';

export const RADIO_SYMBOL_KEY = Symbol('SHOPLFLOW_RADIO');

const Radio = ({ isSelected, defaultSelected, disabled, onClick, onMouseEnter, onMouseLeave, ...rest }: RadioProps) => {
  const [selected, toggleSelected] = useOnToggle(isSelected, defaultSelected);
  const [isHovered, toggleHovered] = useState(false);
  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    toggleHovered(false);
    onMouseLeave && onMouseLeave(e);
  };
  const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
    toggleHovered(true);
    onMouseEnter && onMouseEnter(e);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      return;
    }
    onClick && onClick(e);
    toggleSelected();
  };
  return (
    <Container
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
      data-shoplflow={'Radio'}
    >
      <StyledRadio isSelected={selected} isHovered={isHovered} disabled={disabled}>
        <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <circle cx='8' cy='8' r='5.5' fill='white' stroke='#3299FE' strokeWidth='5' />
        </svg>
      </StyledRadio>
    </Container>
  );
};

Radio[RADIO_SYMBOL_KEY] = true;

export default Radio;
