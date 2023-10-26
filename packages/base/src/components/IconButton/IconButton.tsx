import { forwardRef } from 'react';
import { StyledIconButton } from './IconButton.styled';
import type { IconButtonProps, IconButtonComponent } from './IconButton.types';

const IconButton: IconButtonComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    { styleVar, sizeVar, disabled, as, children, ...rest }: IconButtonProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    return (
      <StyledIconButton styleVar={styleVar} sizeVar={sizeVar} disabled={disabled} as={as} ref={ref} {...rest}>
        {children}
      </StyledIconButton>
    );
  },
);

export default IconButton;
