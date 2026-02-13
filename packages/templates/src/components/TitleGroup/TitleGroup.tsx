import { Icon, IconButton, Stack, StackContainer, Text, Tooltip } from '@shoplflow/base';
import type { ChildrenProps } from '@shoplflow/base';
import { StyledRequired, getTypographyAndColor } from './TitleGroup.styled';
import type {
  ActionsProps,
  DescriptionProps,
  TitleGroupHeaderProps,
  TitleGroupProps,
  TitleGroupHelpIconProps,
} from './TitleGroup.types';
import { HelpLineIcon } from '@shoplflow/shopl-assets';

const TitleGroupHelpIcon = ({
  tooltipPlacement,
  tooltipOffsetValue,
  tooltipMessage,
  onClick,
}: TitleGroupHelpIconProps) => {
  return (
    <Tooltip
      placement={tooltipPlacement}
      offset={tooltipOffsetValue}
      trigger={
        <IconButton styleVar={'GHOST'} sizeVar={'XS'} onClick={onClick}>
          <Icon iconSource={HelpLineIcon} color={'neutral400'} />
        </IconButton>
      }
      popper={tooltipMessage && <Tooltip.Content content={tooltipMessage} />}
    />
  );
};

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
const Header = ({ depth, title, isRequired, count, helpIconProps, rightIconButton }: TitleGroupHeaderProps) => {
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
      {rightIconButton}
      {helpIconProps && <TitleGroupHelpIcon {...helpIconProps} />}
    </Stack.Horizontal>
  );
};

const Description = ({ description, ...rest }: DescriptionProps) => {
  return (
    <StackContainer.Vertical padding='0px 0px 12px' height='auto'>
      <Text typography='paragraph1' color='neutral500' wordBreak='break-all' whiteSpace='pre-line' {...rest}>
        {description}
      </Text>
    </StackContainer.Vertical>
  );
};

const TitleGroup = ({ children }: TitleGroupProps) => {
  return (
    <Stack.Vertical width='100%' data-shoplflow={'Title'}>
      {children}
    </Stack.Vertical>
  );
};

TitleGroup.HeaderBox = HeaderBox;
TitleGroup.Header = Header;
TitleGroup.Actions = Actions;
TitleGroup.Description = Description;

export default TitleGroup;
