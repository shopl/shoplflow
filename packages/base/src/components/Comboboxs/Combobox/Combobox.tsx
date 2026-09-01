import { forwardRef, useRef, useState, type KeyboardEvent } from 'react';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { Field } from '@base-ui/react/field';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import TextCounter from '../../Inputs/common/TextCounter';
import type { ComboboxItem, ComboboxProps } from './Combobox.types';
import {
  ChevronWrapper,
  ComboboxRoot,
  CounterSlot,
  StyledInput,
  StyledInputGroup,
  StyledItem,
  StyledList,
  StyledPopup,
  StyledPositioner,
  StyledTrigger,
  TagSlot,
} from './Combobox.styled';

const keepDigits = (value: string) => value.replace(/[^\d]/g, '');

const findItem = (items: ComboboxItem[], raw: string) =>
  items.find((item) => item.value === raw) ?? items.find((item) => item.label === raw);

const isSameItem = (left: ComboboxItem, right: ComboboxItem) => left.value === right.value;

const Combobox = forwardRef<HTMLDivElement, ComboboxProps>(
  (
    {
      items,
      value,
      defaultValue = '',
      onChange,
      onSelect,
      disabled = false,
      isError = false,
      sizeVar = 'M',
      width = '90px',
      placeholder = 'Enter',
      maxLength,
      floatingZIndex,
      inputMode = 'text',
      textAlign = 'left',
      tag,
      className,
      'aria-label': ariaLabel,
    },
    ref,
  ) => {
    const isControlled = value !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const [open, setOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const inputGroupRef = useRef<HTMLDivElement>(null);
    const rawValue = isControlled ? value : uncontrolledValue;
    const matchedItem = findItem(items, rawValue);
    const inputValue = matchedItem?.label ?? rawValue;

    const updateValue = (next: string) => {
      const filteredValue = inputMode === 'numeric' ? keepDigits(next) : next;
      const nextValue = maxLength === undefined ? filteredValue : filteredValue.slice(0, maxLength);
      if (!isControlled) {
        setUncontrolledValue(nextValue);
      }
      onChange?.(nextValue);
    };

    const handleInputValueChange = (next: string) => {
      updateValue(next);
    };

    const handleValueChange = (item: ComboboxItem | null) => {
      if (!item) {
        return;
      }
      updateValue(item.label);
      onSelect?.(item.value);
    };

    const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key !== 'Enter') {
        return;
      }
      onSelect?.(matchedItem?.value ?? inputValue);
    };

    return (
      <ComboboxRoot ref={ref} data-shoplflow='Combobox' className={className}>
        <Field.Root invalid={isError} disabled={disabled} style={{ display: 'contents' }}>
          <BaseCombobox.Root
            items={items}
            filteredItems={items}
            disabled={disabled}
            inputValue={inputValue}
            onInputValueChange={handleInputValueChange}
            value={matchedItem ?? null}
            onValueChange={handleValueChange}
            isItemEqualToValue={isSameItem}
            open={open}
            onOpenChange={setOpen}
            openOnInputClick
          >
            <StyledInputGroup
              ref={inputGroupRef}
              sizeVar={sizeVar}
              width={typeof width === 'number' ? `${width}px` : width}
            >
              <StyledInput
                className='body1_400'
                sizeVar={sizeVar}
                textAlign={textAlign}
                placeholder={placeholder}
                maxLength={maxLength}
                inputMode={inputMode}
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                aria-label={ariaLabel ?? placeholder}
                onFocus={() => {
                  setIsFocused(true);
                  if (!disabled) {
                    setOpen(true);
                  }
                }}
                onBlur={() => {
                  setIsFocused(false);
                }}
                onKeyDown={handleInputKeyDown}
              />
              {maxLength !== undefined && (isFocused || open) ? (
                <CounterSlot sizeVar={sizeVar}>
                  <TextCounter currentLength={inputValue.length} maxLength={maxLength} isError={isError} />
                </CounterSlot>
              ) : null}
              <StyledTrigger aria-label='목록 열기'>
                <ChevronWrapper>
                  <Icon iconSource={DownArrowSolidXsmallIcon} sizeVar='XS' color='neutral400' />
                </ChevronWrapper>
              </StyledTrigger>
            </StyledInputGroup>
            <BaseCombobox.Portal>
              <StyledPositioner
                side='bottom'
                align='start'
                sideOffset={4}
                anchor={inputGroupRef}
                style={{ zIndex: floatingZIndex }}
              >
                <StyledPopup>
                  <StyledList>
                    {(item: ComboboxItem) => (
                      <StyledItem key={item.value} value={item}>
                        <Text typography='body2_400'>{item.label}</Text>
                      </StyledItem>
                    )}
                  </StyledList>
                </StyledPopup>
              </StyledPositioner>
            </BaseCombobox.Portal>
          </BaseCombobox.Root>
        </Field.Root>
        {tag ? <TagSlot>{tag}</TagSlot> : null}
      </ComboboxRoot>
    );
  },
);

Combobox.displayName = 'Combobox';

export default Combobox;
