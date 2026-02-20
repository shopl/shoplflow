import React from 'react';
import { StyledCallout, StyledCalloutIcon } from './Callout.styled';
import type { TextProps } from '../Text';
import { Text } from '../Text';
import type { CalloutIconProps, CalloutProps } from './Callout.types';
import type { ChildrenProps } from '../../utils/type/ComponentProps';
import { StackContainer } from '../StackContainer';
import { colorTokens } from '../../styles';

const Callout = ({ children, styleVar = 'INFORMATION', fillWidth, ...rest }: CalloutProps) => {
  return (
    <StyledCallout {...rest} styleVar={styleVar} data-shoplflow={'Callout'} fillWidth={fillWidth}>
      {children}
    </StyledCallout>
  );
};

const CalloutText = ({ children, ...rest }: TextProps) => {
  return (
    <Text {...rest} typography={'paragraph2'}>
      {children}
    </Text>
  );
};

const CalloutBulletList = ({ children }: ChildrenProps) => {
  return (
    <StackContainer.Horizontal spacing='spacing06' width='100%' justify='flex-start' minHeight='20px'>
      <div
        style={{
          marginTop: '8px',
          backgroundColor: colorTokens.neutral700,
          width: '3px',
          height: '3px',
          borderRadius: '50%',
          flexShrink: 0,
        }}
      />
      {children}
    </StackContainer.Horizontal>
  );
};

const CalloutIcon = ({ iconSource, color }: CalloutIconProps) => {
  return <StyledCalloutIcon as={iconSource} color={color} />;
};

Callout.Text = CalloutText;
Callout.Icon = CalloutIcon;
Callout.BulletList = CalloutBulletList;
export default Callout;
