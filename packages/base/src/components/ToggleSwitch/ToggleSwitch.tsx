import React, { useState } from 'react';
import { Switch, SwitchContainer } from './ToggleSwitch.styled';
import type { ToggleSwitchProps } from './ToggleSwitch.types';

const ToggleSwitch = ({
  onClick,
  isActive = false,
  isDisabled = false,
  activeColor = 'shopl300',
  ...rest
}: ToggleSwitchProps) => {
  const [active, setActive] = useState<boolean>(isActive);
  return (
    <SwitchContainer isDisabled={isDisabled}>
      <Switch
        type='checkbox'
        checked={active}
        disabled={isDisabled}
        onChange={() => {
          setActive((prev) => !prev);
          onClick && onClick();
        }}
        activeColor={activeColor}
        {...rest}
      />
    </SwitchContainer>
  );
};
export default ToggleSwitch;
