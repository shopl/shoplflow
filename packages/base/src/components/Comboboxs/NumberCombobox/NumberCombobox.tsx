import React, { useRef } from 'react';
import { StyledNumberCombobox, IconWrapper } from './NumberCombobox.styled';
import type { NumberComboboxProps } from './NumberCombobox.types';
import { Input } from '../../Inputs';
import { IconButton } from '../../Buttons';
import { Icon } from '../../Icon';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
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
  placeholder = 'Enter',
  maxLength,
  className,
  floatingZIndex,
  ...rest
}: NumberComboboxProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-number-combobox`).current;
  const inputRef = useRef<HTMLInputElement>(null);

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  let _className = `${selector}`;

  if (className) {
    _className += ` ${className}`;
  }

  return (
    <StyledNumberCombobox data-shoplflow={'NumberCombobox'} color='shopl300' className={_className}>
      <Popper middlewares={[offset(4)]}>
        <Popper.Trigger isOpen={isOpen} className={_className}>
          <Input
            sizeVar={sizeVar}
            width={width}
            ref={inputRef}
            type='text'
            inputMode='numeric'
            style={{ textAlign: 'left', paddingRight: '0px' }}
            className={_className}
            gap='4px'
            initIsFocused={isOpen}
            value={value}
            onChange={(e) => {
              // 숫자만 허용 (한글 등 다른 문자 제거)
              const numericValue = e.target.value.replace(/[^\d]/g, '');
              if (e.target.value !== numericValue) {
                e.target.value = numericValue;
              }
              onChange?.(e);
            }}
            onFocus={() => {
              setIsOpen(true);
            }}
            autoCapitalize='off'
            // Number Input의 height는 따로 관리됩니다
            customNumberInputHeight={sizeVar === 'S' ? '32px' : '40px'}
            isError={isError}
            minWidth={`calc(100% -32px)`}
            autoComplete='off'
            autoCorrect='off'
            placeholder={placeholder}
            disabled={disabled}
            onKeyDown={(event) => {
              // Bubbling X
              event.stopPropagation();

              // 허용할 키 목록: 숫자(0~9), 백스페이스, 딜리트, 화살표 키, 탭, 엔터
              if (
                !/^\d$/.test(event.key) &&
                !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(event.key)
              ) {
                event.preventDefault();
                return;
              }

              // 위, 아래 방향키 조작 X
              if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === '-') {
                event.preventDefault();
                return;
              }

              if (event.key === 'Tab') {
                setIsOpen(false);
                onSelect?.(event.currentTarget.value);
                inputRef.current?.blur();
              } else {
                setIsOpen(true);
              }

              if (event.key === 'Enter') {
                const currentValue = event.currentTarget.value;
                onSelect?.(currentValue);
                setIsOpen(false);
                inputRef.current?.blur();
                return;
              }
            }}
            maxLength={maxLength}
            onBlur={(event) => {
              const target = event.target;
              const isNested = Boolean(target.closest(`.${_className}`));

              if (isNested) {
                return;
              }
              onBlur?.(event);
            }}
            rightSourceStyle={{ padding: '4px' }}
            rightSource={
              <StackContainer.Horizontal>
                <IconButton
                  sizeVar='XS'
                  styleVar='GHOST'
                  className={_className}
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
                      iconSource={DownArrowSolidXsmallIcon}
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
        <Popper.Portal zIndex={floatingZIndex}>
          <SimpleBar
            className={_className}
            style={{
              height: `min(calc(${items.length * 30}px + 8px), 128px)`,
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
                  if (disabled) {
                    return;
                  }
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
