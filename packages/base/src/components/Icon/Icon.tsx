import React from 'react';
import { StyledIcon } from './Icon.styled';
import type { IconProps } from './Icon.types';

const Icon = ({ iconSource, ...rest }: IconProps) => {
  return <StyledIcon as={iconSource} {...rest} data-shoplflow={'Icon'} />;
};

export default Icon;
