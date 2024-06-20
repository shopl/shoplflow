import React, { forwardRef } from 'react';
import {
  StyledToggleButton,
  StyledToggleInner,
  StyledToggleInnerInput,
  StyledToggleInnerLabel,
} from './ToggleButton.styled';
import type { ToggleButtonProps, ToggleButtonInnerRadioProps } from './ToggleButton.types';
import { Text } from '../Text';
import { ToggleButtonContext, useToggleButton } from './useToggleButton';

const ToggleButton = ({
  fixedWidth,
  children,
  targetName,
  onChange,
  selectedValue,
  sizeVar = 'S',
  ...rest
}: ToggleButtonProps) => {
  return (
    <ToggleButtonContext.Provider value={{ fixedWidth, targetName, onChange, selectedValue, sizeVar }}>
      <StyledToggleButton data-shoplflow={'ToggleButton'} {...rest}>
        {children}
      </StyledToggleButton>
    </ToggleButtonContext.Provider>
  );
};

const ToggleInnerRadio = forwardRef<HTMLInputElement, ToggleButtonInnerRadioProps>(
  ({ label, disabled, value, id, ...rest }, ref) => {
    const { fixedWidth, onChange, targetName, selectedValue, sizeVar } = useToggleButton();

    let selected = false;

    if (selectedValue && selectedValue === value) {
      selected = true;
    }

    return (
      <StyledToggleInner disabled={disabled}>
        <StyledToggleInnerInput
          width={fixedWidth}
          disabled={disabled}
          selected={selected}
          value={value}
          id={id}
          type='radio'
          ref={ref}
          name={targetName}
          {...rest}
          onChange={onChange}
        />

        <StyledToggleInnerLabel
          htmlFor={id}
          width={fixedWidth}
          disabled={disabled}
          selected={selected}
          sizeVar={sizeVar}
        >
          <Text lineClamp={1} wordBreak='break-all' typography='body2_400'>
            {label}
          </Text>
        </StyledToggleInnerLabel>
      </StyledToggleInner>
    );
  },
);

ToggleButton.InnerRadio = ToggleInnerRadio;

export default ToggleButton;
