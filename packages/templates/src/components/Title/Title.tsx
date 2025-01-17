import { Stack, StackContainer, Text } from '@shoplflow/base';
import { StyledRequired, getTypographyAndColor } from './Title.styled';
import type { ActionsProps, DescriptionProps, TitleHeaderProps, TitleProps } from './Title.types';
import TitleHelpIcon from './TitleHelpIcon';
import type { ChildrenProps } from '@shoplflow/base/src/utils/type/ComponentProps';

const Actions = ({ children }: ActionsProps) => {
  return <Stack.Horizontal align='center'>{children}</Stack.Horizontal>;
};

const HeaderBox = ({ children }: ChildrenProps) => {
  return (
    <StackContainer.Horizontal align='center' width='100%' minHeight='40px' height='auto' justify='space-between'>
      {children}
    </StackContainer.Horizontal>
  );
};
const Header = ({ depth, title, isRequired, count, helpIconProps }: TitleHeaderProps) => {
  const { color, typography } = getTypographyAndColor(depth);
  return (
    <Stack.Horizontal align='center'>
      <Stack.Horizontal spacing='spacing04' align='center' justify='center'>
        <Text color={color} typography={typography} wordBreak={'break-all'}>
          {title}
        </Text>
        {isRequired && <StyledRequired>*</StyledRequired>}
        {Boolean(count) && (
          <Text typography='body1_700' color='primary300'>
            {count}
          </Text>
        )}
      </Stack.Horizontal>
      {helpIconProps && <TitleHelpIcon {...helpIconProps} />}
    </Stack.Horizontal>
  );
};

const Description = ({ description }: DescriptionProps) => {
  return (
    <StackContainer minHeight={'30px'} height={'auto'}>
      <Text typography={'body1_400'} color={'neutral500'} wordBreak={'break-all'}>
        {description}
      </Text>
    </StackContainer>
  );
};

const Title = ({ children }: TitleProps) => {
  return (
    <Stack.Vertical width='100%' data-shoplflow={'Title'}>
      {children}
    </Stack.Vertical>
  );
};

Title.HeaderBox = HeaderBox;
Title.Header = Header;
Title.Actions = Actions;
Title.Description = Description;

export default Title;
