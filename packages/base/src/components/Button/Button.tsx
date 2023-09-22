import { forwardRef } from 'react';
import { getDomain } from '../../hooks';
import type { TypographyTokens } from 'src/styles';
import { Text } from '../Text';
import { StyledButton } from './Button.styled';
import type { ButtonComponent, ButtonProps, ButtonSizeVar } from './Button.types';
import type { DomainType } from 'src/types/Domain';

const makeTypo = (domain: Lowercase<DomainType>, size: ButtonSizeVar): TypographyTokens => {
  if (domain === 'shopl' && size === 'm') {
    return 'body1_400';
  }

  if (domain === 'shopl' && size === 's') {
    return 'body2_400';
  }

  if (domain === 'hada' && size === 'm') {
    return 'body1_500';
  }

  if (domain === 'hada' && size === 's') {
    return 'body2_500';
  }

  return 'body1_400';
};

const Button: ButtonComponent = forwardRef(
  <T extends React.ElementType = 'button'>(
    { styleVar, sizeVar = 'm', style, color, as, children, leftChildren, rightChildren, ...rest }: ButtonProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref'],
  ) => {
    const domain = getDomain();

    const typography: TypographyTokens = makeTypo(domain, sizeVar);

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
        <Text color={styleVar === 'primary' ? 'neutral0' : 'neutral700'} typography={typography}>
          {children}
        </Text>
        {rightChildren}
      </StyledButton>
    );
  },
);

export default Button;
