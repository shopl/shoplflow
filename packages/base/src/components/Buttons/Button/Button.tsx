import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';
import { Text } from '../../Text';
import { StyledButton } from './Button.styled';
import type { ButtonProps } from './Button.types';
import LoadingSpinner from '../../../assets/LoadingSpinner';

const Button = forwardRef(
  (
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
    }: ButtonProps<'button'>,
    ref: ComponentPropsWithRef<'button'>['ref'],
  ) => {
    const getTypography = () => {
      if (sizeVar === 'XS') {
        return 'caption_400';
      }

      return sizeVar === 'M' ? 'body1_400' : 'body2_400';
    };

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
            typography={getTypography()}
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
