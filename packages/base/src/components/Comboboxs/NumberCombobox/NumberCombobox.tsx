import React, { useRef } from 'react';
import { StyledNumberCombobox, IconWrapper } from './NumberCombobox.styled';
import type { NumberComboboxProps } from './NumberCombobox.types';
import { Input } from '../../Inputs';
import { IconButton } from '../../Buttons';
import { Icon } from '../../Icon';
import { UpArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Popper } from '../../Popper';
import { offset } from '@floating-ui/core';
import { useOutsideClick } from '@shoplflow/utils';
import { Menu } from '../../Menu';
import { Text } from '../../Text';
import { colorTokens } from '../../../styles';
import { StackContainer } from '../../StackContainer';
import SimpleBar from 'simplebar-react';

const NumberCombobox = ({
  disabled,
  onSelect,
  onChange,
  value,
  width = '90px',
  onBlur,
  items,
  isError,
  sizeVar = 'M',
  ...rest
}: NumberComboboxProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-number-combobox`).current;
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  return (
    <StyledNumberCombobox data-shoplflow={'NumberCombobox'} color='shopl300' className={selector}>
      <Popper middlewares={[offset(4)]}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <Input
            sizeVar={sizeVar}
            width={width}
            ref={inputRef}
            type='number'
            style={{ textAlign: 'left', paddingRight: '0px' }}
            className={selector}
            gap='4px'
            initIsFocused={isOpen}
            value={value}
            onChange={onChange}
            onFocus={() => {
              setIsOpen(true);
            }}
            autoCapitalize='off'
            customNumberInputHeight={sizeVar === 'S' ? '32px' : '40px'}
            isError={isError}
            minWidth={`calc(100% -32px)`}
            autoComplete='off'
            autoCorrect='off'
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
                onSelect?.(currentValue);
                setIsOpen(false);
                inputRef.current?.blur();
                return;
              }
            }}
            onBlur={(event) => {
              const target = event.target;
              const isNested = Boolean(target.closest(`.${selector}`));

              if (isNested) {
                return;
              }
              onBlur?.(event);
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
                  style={{ cursor: disabled ? 'not-allowed' : 'cursor' }}
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
          <SimpleBar
            className={selector}
            style={{
              height: '128px',
              maxHeight: '128px',
              width,
              padding: '4px',
              filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.12))',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
              borderRadius: '8px',
              backgroundColor: colorTokens.neutral0,
            }}
          >
            {items.map((item) => (
              <Menu
                key={item.value}
                isSelected={value === item.value}
                onClick={() => {
                  onSelect?.(item.value);
                  setIsOpen(false);
                }}
              >
                <Text typography='body1_400'>{item.label}</Text>
              </Menu>
            ))}
          </SimpleBar>
        </Popper.Portal>
      </Popper>
    </StyledNumberCombobox>
  );
};

export default NumberCombobox;
