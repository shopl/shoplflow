import type { ComponentPropsWithRef, ElementType, ReactNode } from 'react';
import { forwardRef } from 'react';

import type { TextProps } from './Text.types';
import { StyledText } from './Text.styled';

const TextInner = <C extends ElementType = 'span'>(
  {
    children,
    typography = 'body1_400',
    whiteSpace,
    color = 'neutral700',
    display = 'inline-block',
    textAlign = 'start',
    textOverflow,
    className,
    as,
    wordBreak = 'keep-all',
    overflowWrap = 'anywhere',
    ...rest
  }: TextProps<C>,
  ref: ComponentPropsWithRef<C>['ref'],
) => {
  const Component = as || 'span';

  return (
    <StyledText
      overflowWrap={overflowWrap}
      ref={ref}
      whiteSpace={whiteSpace}
      className={className ? `${typography} ${className}` : typography}
      color={color}
      display={display}
      textAlign={textAlign}
      textOverflow={textOverflow}
      wordBreak={wordBreak}
      as={Component}
      {...rest}
      data-shoplflow={'Text'}
    >
      {children}
    </StyledText>
  );
};

const Text = forwardRef(TextInner) as <C extends ElementType = 'span'>(
  props: TextProps<C> & { ref?: ComponentPropsWithRef<C>['ref'] },
) => ReactNode;

export default Text;
