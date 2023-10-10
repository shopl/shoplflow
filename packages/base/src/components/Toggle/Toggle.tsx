import React from 'react';
import { Switch, SwitchContainer } from './Toggle.styled';
import type { ToggleSwitchProps } from './Toggle.types';
import { useOnToggle } from '../../hooks/useOnToggle';

const Toggle = ({
  onChange,
  isSelected,
  disabled = false,
  activeColor = 'primary300',
  defaultSelected = false,
  ...rest
}: ToggleSwitchProps) => {
  const [isToggled, handleToggle] = useOnToggle(isSelected, defaultSelected);

  return (
    <SwitchContainer isDisabled={disabled}>
      <Switch
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
export default Toggle;
