import { forwardRef } from 'react';
import { Text } from '../Text';
import { StyledButton } from './Button.styled';
import type { ButtonComponent, ButtonProps } from './Button.types';

const Button: ButtonComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    { styleVar, sizeVar = 'm', style, color, as, children, leftChildren, rightChildren, ...rest }: ButtonProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    return (
      <StyledButton
        styleVar={styleVar}
        sizeVar={sizeVar}
        className={styleVar}
        style={style}
        as={as}
        ref={ref}
        color={color}
        {...rest}
      >
        {leftChildren}
        <Text
          color={styleVar === 'primary' ? 'neutral0' : 'neutral700'}
          typography={sizeVar === 'm' ? 'body1_400' : 'body2_400'}
        >
          {children}
        </Text>
        {rightChildren}
      </StyledButton>
    );
  },
);

export default Button;
