import type { ComponentPropsWithRef, ElementType } from 'react';
import { forwardRef } from 'react';
import { StyledIconButton } from './IconButton.styled';
import type { IconButtonProps, IconButtonComponent } from './IconButton.types';

const IconButton: IconButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    { styleVar, sizeVar, disabled, children, color, ...rest }: IconButtonProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    return (
      <StyledIconButton
        styleVar={styleVar}
        sizeVar={sizeVar}
        disabled={disabled}
        color={color}
        ref={ref}
        {...rest}
        data-shoplflow={'IconButton'}
      >
        {children}
      </StyledIconButton>
    );
  },
);

export default IconButton;
