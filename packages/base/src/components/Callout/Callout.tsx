import { StyledCallout, StyledCalloutIcon } from './Callout.styled';
import type { TextProps } from '../Text';
import { Text } from '../Text';
import type { CalloutIconProps, CalloutProps } from './Callout.types';
import type { ChildrenProps } from '../../utils/type/ComponentProps';
import type { ColorTokens } from '../../styles';
import { HelperText } from '../HelperText';

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

const CalloutBulletList = ({ children, color = 'neutral700' }: ChildrenProps & { color?: ColorTokens }) => {
  return (
    <HelperText type='BULLET' color={color}>
      {children}
    </HelperText>
  );
};

const CalloutIcon = ({ iconSource, color }: CalloutIconProps) => {
  return <StyledCalloutIcon as={iconSource} color={color} />;
};

Callout.Text = CalloutText;
Callout.Icon = CalloutIcon;
Callout.BulletList = CalloutBulletList;
export default Callout;
