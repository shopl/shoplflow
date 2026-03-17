import { Icon, IconButton, Stack, StackContainer, Text, Tooltip } from '@shoplflow/base';
import type { ChildrenProps } from '@shoplflow/base';
import { createContext, useContext, useLayoutEffect, useState } from 'react';
import { StyledRequired, getTypographyAndColor } from './TitleGroup.styled';
import type {
  ActionsProps,
  DescriptionProps,
  TitleGroupHeaderProps,
  TitleGroupProps,
  TitleGroupHelpIconProps,
} from './TitleGroup.types';
import { HelpLineIcon } from '@shoplflow/shopl-assets';

interface TitleGroupContextValue {
  depth: 1 | 2 | 3;
  setDepth: (depth: 1 | 2 | 3) => void;
}

const TitleGroupContext = createContext<TitleGroupContextValue | null>(null);

const useTitleGroupContext = () => {
  const context = useContext(TitleGroupContext);
  if (!context) {
    throw new Error('useTitleGroupContext must be used within a TitleGroup');
  }
  return context;
};

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

const Header = ({
  depth: depthProp,
  title,
  isRequired,
  count,
  helpIconProps,
  rightIconButton,
}: TitleGroupHeaderProps) => {
  const { depth: contextDepth, setDepth } = useTitleGroupContext();
  const depth = depthProp ?? contextDepth;
  const { color, typography } = getTypographyAndColor(depth);

  useLayoutEffect(() => {
    if (depthProp !== undefined) {
      setDepth(depthProp);
    }
  }, [depthProp, setDepth]);

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
  const { depth } = useTitleGroupContext();
  const typography = depth === 1 ? 'paragraph1' : 'paragraph2';

  return (
    <StackContainer.Vertical padding='0px 0px 12px' height='auto'>
      <Text typography={typography} color='neutral500' wordBreak='break-all' whiteSpace='pre-line' {...rest}>
        {description}
      </Text>
    </StackContainer.Vertical>
  );
};

const TitleGroup = ({ children, depth: depthProp }: TitleGroupProps) => {
  const [depth, setDepth] = useState<1 | 2 | 3>(depthProp ?? 1);

  return (
    <TitleGroupContext.Provider value={{ depth, setDepth }}>
      <Stack.Vertical width='100%' data-shoplflow={'Title'}>
        {children}
      </Stack.Vertical>
    </TitleGroupContext.Provider>
  );
};

TitleGroup.HeaderBox = HeaderBox;
TitleGroup.Header = Header;
TitleGroup.Actions = Actions;
TitleGroup.Description = Description;

export default TitleGroup;
