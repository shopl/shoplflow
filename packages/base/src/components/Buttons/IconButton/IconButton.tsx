import type { ComponentPropsWithRef, ElementType, MouseEvent } from 'react';
import { useState, forwardRef } from 'react';
import { StyledIconButton } from './IconButton.styled';
import type { IconButtonProps, IconButtonComponent } from './IconButton.types';

const IconButton: IconButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    { styleVar, sizeVar, disabled, children, color, onMouseEnter, onMouseLeave, ...rest }: IconButtonProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleOnMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true);
      onMouseEnter && onMouseEnter(e);
    };
    const handleOnMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onMouseLeave && onMouseLeave(e);
    };
    return (
      <StyledIconButton
        styleVar={styleVar}
        sizeVar={sizeVar}
        disabled={disabled}
        color={color}
        ref={ref}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        isHovered={isHovered}
        {...rest}
        data-shoplflow={'IconButton'}
      >
        {children}
      </StyledIconButton>
    );
  },
);

export default IconButton;
