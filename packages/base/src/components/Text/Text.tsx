import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { TextProps } from './Text.types';

import { StyledText } from './Text.styled';

const Text = forwardRef(
  (
    {
      children,
      typography = 'title1_700',
      whiteSpace,
      color = 'neutral700',
      display = 'inline-block',
      textAlign = 'inherit',
      className,
      ...rest
    }: TextProps,
    ref: Ref<HTMLElement>,
  ) => {
    return (
      <StyledText
        ref={ref}
        whiteSpace={whiteSpace}
        className={className ? `${typography} ${className}` : typography}
        color={color}
        display={display}
        textAlign={textAlign}
        {...rest}
      >
        {children}
      </StyledText>
    );
  },
);

export default Text;
