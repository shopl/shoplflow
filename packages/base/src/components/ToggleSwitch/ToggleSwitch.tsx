import React, { useState, useEffect } from 'react';
import { Switch, SwitchContainer } from './ToggleSwitch.styled';
import type { ToggleSwitchProps } from './ToggleSwitch.types';

const ToggleSwitch = ({
  onChange,
  isActive = false,
  isDisabled = false,
  activeColor = 'primary300',
  ...rest
}: ToggleSwitchProps) => {
  const [active, setActive] = useState<boolean>(isActive);

  useEffect(()=> {
    setActive(isActive)
  }, [isActive]);

  return (
    <SwitchContainer isDisabled={isDisabled}>
      <Switch
        type='checkbox'
        checked={active}
        disabled={isDisabled}
        onChange={(e) => {
          setActive(e.target.checked);
          onChange && onChange();
        }}
        activeColor={activeColor}
        {...rest}
      />
    </SwitchContainer>
  );
};
export default ToggleSwitch;
