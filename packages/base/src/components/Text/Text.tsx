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
        as={as}
        {...rest}
        data-shoplflow={'text'}
      >
        {children}
      </StyledText>
    );
  },
);

export default Text;
