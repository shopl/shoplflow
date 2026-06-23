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

    // 로딩 스피너를 텍스트 줄높이에 맞춰, 로딩 노출 시에도 버튼 높이가 유지되도록 합니다.
    const getSpinnerSize = () => {
      if (sizeVar === 'XS') {
        return 16;
      }

      return 24;
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
          <LoadingSpinner
            size={getSpinnerSize()}
            color={styleVar === 'SECONDARY' || styleVar === 'GHOST' ? 'neutral500' : 'neutral0'}
          />
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
