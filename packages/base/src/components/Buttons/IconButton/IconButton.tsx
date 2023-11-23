import type { ComponentPropsWithRef, ElementType } from 'react';
import { forwardRef } from 'react';
import { StyledIconButton } from './IconButton.styled';
import type { IconButtonProps, IconButtonComponent } from './IconButton.types';
import { Icon } from '../../Icon';

const IconButton: IconButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    { styleVar, sizeVar, disabled, as, iconSource, color, iconSize, ...rest }: IconButtonProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) => {
    return (
      <StyledIconButton
        styleVar={styleVar}
        sizeVar={sizeVar}
        disabled={disabled}
        as={as}
        ref={ref}
        {...rest}
        data-shoplflow={'IconButton'}
      >
        <Icon iconSource={iconSource} color={color} sizeVar={iconSize} />
      </StyledIconButton>
    );
  },
);

export default IconButton;
