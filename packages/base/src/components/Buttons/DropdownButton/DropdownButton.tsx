import React, { useRef } from 'react';
import { StyledPopoverContentWrapper, StyledArrowIcon } from './DropdownButton.styled';
import type { DropdownButtonProps } from './DropdownButton.types';
import { Popper } from '../../../components/Popper';
import type { ButtonStyleVariantType } from '../Button';
import { Button } from '../Button';
import { useOutsideClick } from '@shoplflow/utils';
import type { MenuProps } from '../../../components/Menu';
import { Menu } from '../../../components/Menu';
import { DropdownButtonContext, useDropdownButtonContext } from './useDropdownButton';
import { Text } from '../../../components/Text';
import type { ColorTokens } from '../../../styles';
import { Icon } from '../../../components/Icon';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';

const DropdownButtonMenu = ({ onClick, children, ...rest }: MenuProps) => {
  const { setIsOpen } = useDropdownButtonContext();

  return (
    <Menu
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        onClick?.(event);
        setIsOpen(false);
      }}
      {...rest}
    >
      {children}
    </Menu>
  );
};

const DropdownButton = ({
  text,
  sizeVar,
  className,
  disabled,
  children,
  placement = 'bottom-end',
  styleVar = 'PRIMARY',
  floatingZIndex,
  ...rest
}: DropdownButtonProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-dropdown-button`).current;

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  let _className = `${selector}`;

  if (className) {
    _className += ` ${className}`;
  }

  let _styleVar: ButtonStyleVariantType = styleVar;
  let color: ColorTokens | undefined = undefined;

  if (styleVar === 'PRIMARY') {
    _styleVar = 'SOLID';
    color = 'coolgray50';
  }

  return (
    <DropdownButtonContext.Provider value={{ isOpen, setIsOpen }}>
      <Popper placement={placement} offset={4}>
        <Popper.Trigger isOpen={isOpen} className={_className}>
          <Button
            data-shoplflow={'DropdownButton'}
            className={_className}
            sizeVar={sizeVar}
            styleVar={_styleVar}
            disabled={disabled}
            color={color}
            rightSource={
              <StyledArrowIcon
                animate={{
                  rotate: isOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Icon
                  iconSource={DownArrowSolidXsmallIcon}
                  color={styleVar === 'PRIMARY' ? 'coolgray300' : 'neutral400'}
                  sizeVar='XS'
                />
              </StyledArrowIcon>
            }
            onClick={() => {
              if (disabled) {
                return;
              }
              setIsOpen((prev) => !prev);
            }}
            {...rest}
          >
            <Text typography='body2_400' color='neutral700'>
              {text}
            </Text>
          </Button>
        </Popper.Trigger>
        <Popper.Portal zIndex={floatingZIndex}>
          <StyledPopoverContentWrapper className={_className}>{children}</StyledPopoverContentWrapper>
        </Popper.Portal>
      </Popper>
    </DropdownButtonContext.Provider>
  );
};

DropdownButton.Menu = DropdownButtonMenu;

export default DropdownButton;
