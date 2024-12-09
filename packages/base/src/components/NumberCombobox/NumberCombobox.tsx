import React, { useRef, useState } from 'react';
import { StyledNumberCombobox, IconWrapper } from './NumberCombobox.styled';
import type { NumberComboboxProps } from './NumberCombobox.types';
import { Input } from '../Inputs';
import { IconButton } from '../Buttons';
import { Icon } from '../Icon';
import { UpArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Popper } from '../Popper';
import { offset } from '@floating-ui/core';
import { useOutsideClick } from '@shoplflow/utils';
import { Menu } from '../Menu';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { colorTokens } from '../../styles';
import { HOURS, MINUTES } from './NumberComboboxLists';
import { StackContainer } from '../StackContainer';

const NumberCombobox = ({ inputType, unit, disabled, onSelect, value: _initValue, ...rest }: NumberComboboxProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-number-combobox`).current;
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(_initValue || '');
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  let items = inputType === 'hours' ? HOURS : MINUTES;

  if (unit) {
    items = items.filter((item) => Number(item.value) % unit === 0);
  }

  const values = items.map((item) => item.value);

  return (
    <StyledNumberCombobox data-shoplflow={'NumberCombobox'} color='shopl300'>
      <Popper middlewares={[offset(4)]}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <Input
            sizeVar='S'
            width='90px'
            type='number'
            style={{ textAlign: 'left', paddingRight: '0px' }}
            minWidth='50px'
            className={selector}
            gap='4px'
            initIsFocused={isOpen}
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
            }}
            onFocus={() => {
              setIsOpen(true);
            }}
            placeholder='입력'
            disabled={disabled}
            onKeyDown={(event) => {
              // 위, 아래 방향키 조작 X
              if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                event.preventDefault();
                return;
              }

              setIsOpen(true);

              if (event.key === 'Enter') {
                const currentValue = event.currentTarget.value;
                if (values.includes(currentValue)) {
                  setValue(currentValue);
                  onSelect?.(value);
                  setIsOpen(false);
                  inputRef.current?.blur();
                  return;
                } else {
                  setValue('');
                  onSelect?.('');
                  inputRef.current?.blur();
                }
              }
            }}
            onBlur={() => {
              onSelect?.(value);
            }}
            rightSource={
              <StackContainer.Horizontal padding='0px 4px 0px 0px'>
                <IconButton
                  sizeVar='XS'
                  styleVar='GHOST'
                  className={selector}
                  onClick={() => {
                    if (disabled) {
                      return;
                    }
                    setIsOpen((prev) => !prev);
                  }}
                >
                  <IconWrapper
                    animate={{
                      rotate: isOpen ? 180 : 0,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    <Icon
                      iconSource={UpArrowSolidXsmallIcon}
                      sizeVar='XS'
                      color='neutral400'
                      style={{ cursor: disabled ? 'not-allowed' : 'cursor' }}
                    />
                  </IconWrapper>
                </IconButton>
              </StackContainer.Horizontal>
            }
            {...rest}
          />
        </Popper.Trigger>
        <Popper.Portal>
          <Stack.Vertical
            className={selector}
            style={{
              height: '100%',
              maxHeight: '128px',
              width: '90px',
              padding: '4px',
              filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.12))',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
              borderRadius: '8px',
              overflowY: 'scroll',
              backgroundColor: colorTokens.neutral0,
            }}
          >
            <Stack.Vertical
              className={selector}
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              {items.map((item) => (
                <Menu
                  key={item.value}
                  isSelected={value === item.value}
                  onClick={() => {
                    setValue(item.value);
                    onSelect?.(item.value);
                    setIsOpen(false);
                  }}
                >
                  <Text typography='body1_400'>{item.label}</Text>
                </Menu>
              ))}
            </Stack.Vertical>
          </Stack.Vertical>
        </Popper.Portal>
      </Popper>
    </StyledNumberCombobox>
  );
};

export default NumberCombobox;
