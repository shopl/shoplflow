import { useRef } from 'react';
import {
  StyledSplitButton,
  StyledPopoverContentWrapper,
  StyledArrowIcon,
  SplitButtonDivider,
} from './SplitButton.styled';
import type { SplitButtonProps } from './SplitButton.types';
import { SplitButtonContext, useSplitButtonContext } from './useSplitButton';
import { useOutsideClick } from '@shoplflow/utils';
import type { MenuProps } from '../../../components/Menu';
import { Menu } from '../../../components/Menu';
import { Popper } from '../../../components/Popper';
import { Text } from '../../../components/Text';
import { Stack } from '../../../components/Stack';
import { DownArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Icon } from '../../../components/Icon';
import { shift } from '@floating-ui/core';

const SplitButtonMenu = ({ onClick, children, ...rest }: MenuProps) => {
  const { setIsOpen } = useSplitButtonContext();

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

const SplitButton = ({
  children,
  color,
  onClick,
  disabled,
  placement = 'bottom-start',
  floatingZIndex,
  leftSource,
  rightSource,
  styleVar = 'PRIMARY',
  sizeVar = 'M',
  lineClamp = 1,
  text,
  ...rest
}: SplitButtonProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-split-button`).current;

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  return (
    <SplitButtonContext.Provider value={{ isOpen, setIsOpen }}>
      <Popper placement={placement} offset={4} middlewares={[shift({ crossAxis: true, padding: 4 })]}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <StyledSplitButton
            data-shoplflow={'SplitButton'}
            color={color}
            styleVar={styleVar}
            sizeVar={sizeVar}
            disabled={disabled}
            {...rest}
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              if (disabled) {
                return;
              }
              onClick?.(event);
              setIsOpen((prev) => !prev);
            }}
          >
            <Stack.Horizontal spacing='spacing04' align='center'>
              {leftSource}
              <Text
                lineClamp={lineClamp}
                whiteSpace={'nowrap'}
                wordBreak={'keep-all'}
                color={styleVar === 'PRIMARY' ? 'neutral0' : 'neutral700'}
                typography={sizeVar === 'M' ? 'body1_400' : 'body2_400'}
              >
                {text}
              </Text>
              {rightSource}
            </Stack.Horizontal>
            <SplitButtonDivider sizeVar={sizeVar} styleVar={styleVar} />
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
                color={styleVar === 'PRIMARY' ? 'neutral0' : 'neutral600'}
                sizeVar='XS'
              />
            </StyledArrowIcon>
          </StyledSplitButton>
        </Popper.Trigger>
        <Popper.Portal zIndex={floatingZIndex}>
          <StyledPopoverContentWrapper>{children}</StyledPopoverContentWrapper>
        </Popper.Portal>
      </Popper>
    </SplitButtonContext.Provider>
  );
};

SplitButton.Menu = SplitButtonMenu;

export default SplitButton;
