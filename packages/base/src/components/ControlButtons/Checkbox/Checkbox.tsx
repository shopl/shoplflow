import type { MouseEvent } from 'react';
import React, { useState } from 'react';
import { Container, StyledCheckbox } from './Checkbox.styled';
import type { CheckboxProps } from './Checkbox.types';
import { useOnToggle } from '../../../hooks/useOnToggle';

export const CheckboxSymbol = Symbol('shoplflow-checkbox');

const Checkbox = ({
  defaultSelected,
  isSelected,
  disabled,
  onClick,
  onMouseEnter,
  onMouseLeave,
  styleVar = 'PRIMARY',
  ...rest
}: CheckboxProps) => {
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
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      {...rest}
      data-shoplflow={'Checkbox'}
    >
      <StyledCheckbox styleVar={styleVar} isHovered={isHovered} isSelected={selected} disabled={disabled}>
        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M9.78822 0.297596C10.1761 -0.0955083 10.8093 -0.0997053 11.2024 0.288222C11.5653 0.646308 11.5968 1.21334 11.2943 1.60765L11.2118 1.7024L5.31714 7.7024C4.95248 8.07193 4.37282 8.09687 3.97909 7.77976L3.88476 7.69335L0.779404 4.42669C0.396475 4.02871 0.408672 3.39567 0.806647 3.01274C1.17401 2.65926 1.74167 2.64247 2.12801 2.95499L2.2206 3.03998L4.614 5.567L9.78822 0.297596Z'
            fill='white'
          />
        </svg>
      </StyledCheckbox>
    </Container>
  );
};

Checkbox[CheckboxSymbol] = true;

export default Checkbox;
