import type { ComponentPropsWithRef, ElementType } from 'react';
import { forwardRef } from 'react';
import { Text } from '../../Text';
import { StyledButton } from './Button.styled';
import type { ButtonComponent, ButtonProps } from './Button.types';
import LoadingSpinner from '../../../assets/LoadingSpinner';

const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    {
      styleVar = 'PRIMARY',
      sizeVar = 'M',
      style,
      color,
      as,
      children,
      leftSource,
      rightSource,
      isLoading = false,
      lineClamp,
      ...rest
    }: ButtonProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
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
        data-shoplflow={'Button'}
      >
        {leftSource}
        {isLoading ? (
          <LoadingSpinner color={styleVar === 'SECONDARY' || styleVar === 'GHOST' ? 'neutral500' : 'neutral0'} />
        ) : (
          <Text
            lineClamp={lineClamp}
            whiteSpace={'nowrap'}
            wordBreak={'keep-all'}
            color={styleVar === 'PRIMARY' ? 'neutral0' : 'neutral700'}
            typography={sizeVar === 'M' ? 'body1_400' : 'body2_400'}
          >
            {children}
          </Text>
        )}
        {rightSource}
      </StyledButton>
    );
  },
);

export default Button;
