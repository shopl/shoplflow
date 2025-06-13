import React, { forwardRef, useRef } from 'react';
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

    const labelRef = useRef<HTMLLabelElement>(null);

    let selected = false;

    if (selectedValue && selectedValue === value) {
      selected = true;
    }

    const getLabelColor = ({ selected, disabled }: { selected: boolean; disabled: boolean }) => {
      if (selected) {
        return disabled ? 'neutral400' : 'neutral700';
      }
      return 'neutral500';
    };

    return (
      <StyledToggleInner
        width={fixedWidth}
        disabled={disabled}
        selected={selected}
        sizeVar={sizeVar}
        type='button'
        onClick={() => {
          labelRef?.current?.click();
        }}
      >
        <StyledToggleInnerInput
          checked={selected}
          width={fixedWidth}
          disabled={disabled}
          value={value}
          id={id}
          type='radio'
          ref={ref}
          name={targetName}
          {...rest}
          onChange={onChange}
        />

        <StyledToggleInnerLabel ref={labelRef} htmlFor={id}>
          <Text
            color={getLabelColor({ selected, disabled: Boolean(disabled) })}
            wordBreak='break-all'
            typography={selected ? 'body2_500' : 'body2_400'}
          >
            {label}
          </Text>
        </StyledToggleInnerLabel>
      </StyledToggleInner>
    );
  },
);

ToggleButton.InnerRadio = ToggleInnerRadio;

export default ToggleButton;
