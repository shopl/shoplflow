import type { ComponentPropsWithRef } from 'react';
import { forwardRef } from 'react';

import type { TextProps } from './Text.types';

import { StyledText } from './Text.styled';
import type { StringElementType } from '../../utils/type/ComponentProps';

const Text = forwardRef(
  (
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
      ...rest
    }: TextProps,
    ref: ComponentPropsWithRef<StringElementType>['ref'],
  ) => {
    return (
      <StyledText
        ref={ref}
        whiteSpace={whiteSpace}
        className={className ? `${typography} ${className}` : typography}
        color={color}
        display={display}
        textAlign={textAlign}
        textOverflow={textOverflow}
        as={as}
        {...rest}
        data-shoplflow={'Text'}
      >
        {children}
      </StyledText>
    );
  },
);

export default Text;
