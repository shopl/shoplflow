import React from 'react';
import { Switch, SwitchContainer } from './Toggle.styled';
import type { ToggleSwitchProps } from './Toggle.types';
import { useOnToggle } from '../../hooks/useOnToggle';

const Toggle = ({
  onChange,
  isSelected,
  isDisabled = false,
  activeColor = 'primary300',
  defaultSelected = false,
  ...rest
}: ToggleSwitchProps) => {
  const [isToggled, handleToggle] = useOnToggle(isSelected, defaultSelected);

  return (
    <SwitchContainer isDisabled={isDisabled}>
      <Switch
        type='checkbox'
        checked={isToggled}
        disabled={isDisabled}
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
