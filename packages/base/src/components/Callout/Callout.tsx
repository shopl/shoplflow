import React from 'react';
import { StyledCallout, StyledCalloutIcon } from './Callout.styled';
import type { TextProps } from '../Text';
import { Text } from '../Text';
import type { CalloutProps } from './Callout.types';
import type { IconSourceProps } from '../../utils/type/ComponentProps';

const Callout = ({ children, styleVar = 'INFORMATION', leftSource, ...rest }: CalloutProps) => {
  return (
    <StyledCallout {...rest} styleVar={styleVar}>
      {leftSource}
      {children}
    </StyledCallout>
  );
};

const CalloutText = ({ children, ...rest }: TextProps) => {
  return (
    <Text {...rest} typography={'body3_400'}>
      {children}
    </Text>
  );
};

const CalloutIcon = ({ iconSource }: IconSourceProps) => {
  return <StyledCalloutIcon as={iconSource} />;
};

Callout.Text = CalloutText;
Callout.Icon = CalloutIcon;
export default Callout;
