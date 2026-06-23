import { forwardRef, useRef } from 'react';
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
  fullWidth = false,
  buttonLineClamp,
  children,
  targetName,
  onChange,
  selectedValue,
  sizeVar = 'S',
  disabled = false,
  ...rest
}: ToggleButtonProps) => {
  return (
    <ToggleButtonContext.Provider
      value={{ fixedWidth, fullWidth, buttonLineClamp, targetName, onChange, selectedValue, sizeVar, disabled }}
    >
      <StyledToggleButton data-shoplflow={'ToggleButton'} fullWidth={fullWidth} aria-disabled={disabled} {...rest}>
        {children}
      </StyledToggleButton>
    </ToggleButtonContext.Provider>
  );
};

const ToggleInnerRadio = forwardRef<HTMLInputElement, ToggleButtonInnerRadioProps>(
  ({ label, disabled: itemDisabled, value, id, ...rest }, ref) => {
    const {
      fixedWidth,
      fullWidth,
      buttonLineClamp,
      onChange,
      targetName,
      selectedValue,
      sizeVar,
      disabled: groupDisabled,
    } = useToggleButton();

    const disabled = groupDisabled || itemDisabled;

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
        fullWidth={fullWidth}
        sizeVar={sizeVar}
        type='button'
        aria-disabled={disabled}
        data-selected={selected}
        data-id={id}
        onClick={() => {
          if (disabled) {
            return;
          }
          labelRef?.current?.click();
        }}
      >
        <StyledToggleInnerInput
          checked={selected}
          disabled={disabled}
          aria-disabled={disabled}
          value={value}
          id={id}
          type='radio'
          ref={ref}
          name={targetName}
          {...rest}
          onChange={onChange}
        />

        <StyledToggleInnerLabel ref={labelRef} htmlFor={id} lineClamp={buttonLineClamp}>
          <Text
            color={getLabelColor({ selected, disabled: Boolean(disabled) })}
            wordBreak='break-all'
            lineClamp={buttonLineClamp}
            textAlign={buttonLineClamp ? 'center' : undefined}
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
