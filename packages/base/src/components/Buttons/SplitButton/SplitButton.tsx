import { useRef } from 'react';
import { StyledSplitButton, StyledPopoverContentWrapper } from './SplitButton.styled';
import type { SplitButtonProps } from './SplitButton.types';
import { SplitButtonContext, useSplitButtonContext } from './useSplitButton';
import { useOutsideClick } from '@shoplflow/utils';
import type { MenuProps } from '../../../components/Menu';
import { Menu } from '../../../components/Menu';
import { Popper } from '../../../components/Popper';
import { Text } from '../../../components/Text';

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
  styleVar = 'PRIMARY',
  sizeVar = 'M',
  lineClamp,
  ...rest
}: SplitButtonProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-split-button`).current;

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  return (
    <SplitButtonContext.Provider value={{ isOpen, setIsOpen }}>
      <Popper placement={placement} offset={4}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <StyledSplitButton
            data-shoplflow={'SplitButton'}
            color={color}
            styleVar={styleVar}
            sizeVar={sizeVar}
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
            {leftSource}
            <Text
              lineClamp={lineClamp}
              whiteSpace={'nowrap'}
              wordBreak={'keep-all'}
              color={styleVar === 'PRIMARY' ? 'neutral0' : 'neutral700'}
              typography={sizeVar === 'M' ? 'body1_400' : 'body2_400'}
            >
              {children}
            </Text>
          </StyledSplitButton>
        </Popper.Trigger>
        <Popper.Portal zIndex={floatingZIndex}>
          <StyledPopoverContentWrapper>??</StyledPopoverContentWrapper>
        </Popper.Portal>
      </Popper>
    </SplitButtonContext.Provider>
  );
};

SplitButton.Menu = SplitButtonMenu;

export default SplitButton;
