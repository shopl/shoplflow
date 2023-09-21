import { forwardRef } from 'react';
import { StyledButton } from './Button.styled';
import type { ButtonComponent, ButtonProps } from './Button.types';

const Button: ButtonComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    { buttonType, buttonSize, style, children, as, ...rest }: ButtonProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    return (
      <StyledButton
        buttonType={buttonType}
        buttonSize={buttonSize}
        className={buttonType}
        style={style}
        as={as}
        ref={ref}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  },
);

export default Button;
