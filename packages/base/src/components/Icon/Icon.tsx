import React, { forwardRef } from 'react';
import { StyledIcon } from './Icon.styled';
import type { IconProps } from './Icon.types';

const Icon = forwardRef<SVGSVGElement, IconProps>(({ iconSource, ...rest }, ref) => {
  return <StyledIcon as={iconSource} ref={ref} {...rest} data-shoplflow={'Icon'} />;
});

export default Icon;
