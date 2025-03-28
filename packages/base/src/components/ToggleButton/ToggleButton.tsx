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

    const getLabelColor = ({ selected, disabled }: { selected: boolean; disabled: boolean }) => {
      if (selected) {
        return disabled ? 'neutral400' : 'neutral700';
      }
      return 'neutral500';
    };

    return (
      <StyledToggleInner disabled={disabled} type='button'>
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

        <StyledToggleInnerLabel
          htmlFor={id}
          width={fixedWidth}
          disabled={disabled}
          selected={selected}
          sizeVar={sizeVar}
        >
          <Text
            lineClamp={1}
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
