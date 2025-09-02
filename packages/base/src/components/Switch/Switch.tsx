import type { ChangeEvent } from 'react';
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
  sizeVar = 'M',
  ...rest
}: SwitchProps) => {
  const [isToggled, handleToggle] = useOnToggle(isSelected, defaultSelected);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleToggle();
    onChange && onChange(e);
  };

  return (
    <SwitchContainer isDisabled={disabled} sizeVar={sizeVar}>
      <StyledSwitch
        type='checkbox'
        checked={isToggled}
        disabled={disabled}
        onChange={handleOnChange}
        activeColor={activeColor}
        sizeVar={sizeVar}
        {...rest}
        data-shoplflow={'Switch'}
      />
    </SwitchContainer>
  );
};
export default Switch;
