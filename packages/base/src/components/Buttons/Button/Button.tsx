import { forwardRef } from 'react';
import { Text } from '../../Text';
import { StyledButton } from './Button.styled';
import type { ButtonComponent, ButtonProps } from './Button.types';

const Button: ButtonComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    {
      styleVar = 'PRIMARY',
      sizeVar = 'M',
      style,
      color,
      as,
      children,
      leftSource,
      rightSource,
      ...rest
    }: ButtonProps<T>,
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
        data-shoplflow={'button'}
      >
        {leftSource}
        <Text
          wordBreak={'keep-all'}
          whiteSpace={'nowrap'}
          color={styleVar === 'PRIMARY' ? 'neutral0' : 'neutral700'}
          typography={sizeVar === 'M' ? 'body1_400' : 'body2_400'}
        >
          {children}
        </Text>
        {rightSource}
      </StyledButton>
    );
  },
);

export default Button;
