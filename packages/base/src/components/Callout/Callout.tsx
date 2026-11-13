import {
  StyledCallout,
  StyledCalloutBody,
  StyledCalloutContent,
  StyledCalloutIcon,
  StyledCalloutTextButton,
} from './Callout.styled';
import type { TextProps } from '../Text';
import { Text } from '../Text';
import type {
  CalloutBodyProps,
  CalloutContentProps,
  CalloutIconProps,
  CalloutProps,
  CalloutTextButtonProps,
} from './Callout.types';
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

/** Content와 TextButton을 묶는 영역 (간격 6px) */
const CalloutBody = ({ children, ...rest }: CalloutBodyProps) => {
  return <StyledCalloutBody {...rest}>{children}</StyledCalloutBody>;
};

/** Title·BulletList·Description을 묶는 영역 (간격 4px) */
const CalloutContent = ({ children, ...rest }: CalloutContentProps) => {
  return <StyledCalloutContent {...rest}>{children}</StyledCalloutContent>;
};

const CalloutTextButton = ({ children, type = 'button', ...rest }: CalloutTextButtonProps) => {
  return (
    <StyledCalloutTextButton type={type} {...rest}>
      <Text typography='body2_700' color='neutral700'>
        {children}
      </Text>
    </StyledCalloutTextButton>
  );
};

Callout.Text = CalloutText;
Callout.Icon = CalloutIcon;
Callout.BulletList = CalloutBulletList;
Callout.Body = CalloutBody;
Callout.Content = CalloutContent;
Callout.TextButton = CalloutTextButton;
export default Callout;
