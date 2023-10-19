import React from 'react';
import { StyledSwitch, SwitchContainer } from './Switch.styled';
import type { SwitchProps } from './Switch.types';
import { useOnToggle } from '../../hooks/useOnToggle';

const Switch = ({
  onChange,
  isSelected,
  disabled = false,
  activeColor = 'primary300',
  defaultSelected = false,
  ...rest
}: SwitchProps) => {
  const [isToggled, handleToggle] = useOnToggle(isSelected, defaultSelected);

  return (
    <SwitchContainer isDisabled={disabled}>
      <StyledSwitch
        type='checkbox'
        checked={isToggled}
        disabled={disabled}
        onChange={() => {
          handleToggle();
          onChange && onChange();
        }}
        activeColor={activeColor}
        {...rest}
      />
    </SwitchContainer>
  );
};
export default Switch;
