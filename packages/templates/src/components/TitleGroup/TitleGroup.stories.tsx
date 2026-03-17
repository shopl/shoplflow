import type { StoryFn } from '@storybook/react-vite';
import { Button, colorTokens, Icon, Stack, Switch, IconButton } from '@shoplflow/base';
import TitleGroup from './TitleGroup';
import type { TitleGroupHelpIconProps, TitleGroupProps } from './TitleGroup.types';
import { EditIcon } from '@shoplflow/shopl-assets';

const FIGMA_URL =
  'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=5699-10352&m=dev';

interface PlaygroundProps extends TitleGroupProps, TitleGroupHelpIconProps {
  showActions: boolean;
  isRequired: boolean;
  count: string;
}

export default {
  title: 'COMPONENTS/TitleGroup',
  component: TitleGroup,
  argTypes: {
    depth: {
      control: { type: 'select' },
      options: [1, 2, 3],
      description: 'TitleGroup의 깊이. Header 스타일과 Description typography를 결정합니다.',
      table: { type: { summary: '1 | 2 | 3' } },
    },
    tooltipPlacement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    tooltipMessage: {
      control: 'text',
    },
    count: {
      control: 'text',
    },
    showActions: {
      control: 'boolean',
    },
  },
};

export const Playground: StoryFn<PlaygroundProps> = (args) => {
  const { depth, showActions, isRequired, count, tooltipPlacement, tooltipMessage, tooltipOffsetValue } = args;
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup depth={depth}>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            title='Title'
            count={count}
            isRequired={isRequired}
            rightIconButton={
              <IconButton>
                <Icon iconSource={EditIcon} />
              </IconButton>
            }
            helpIconProps={{
              tooltipPlacement,
              tooltipOffsetValue: tooltipOffsetValue ?? 4,
              tooltipMessage,
              onClick: () => {
                return;
              },
            }}
          />
          {showActions && (
            <TitleGroup.Actions>
              <Button styleVar='SECONDARY' sizeVar='S'>
                Button
              </Button>
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: `${colorTokens.shopl100}`,
                  marginInline: '4px',
                }}
              />
              <Switch activeColor='primary300' />
            </TitleGroup.Actions>
          )}
        </TitleGroup.HeaderBox>
        <TitleGroup.Description description='Description' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

Playground.args = {
  depth: 1,
  isRequired: true,
  tooltipPlacement: 'right',
  tooltipMessage: 'Tooltip 노출',
  count: '00',
  showActions: true,
};

Playground.parameters = {
  controls: {
    include: ['depth', 'isRequired', 'count', 'showActions', 'tooltipPlacement', 'tooltipMessage'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Depth2: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup depth={2}>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            title='Title'
            isRequired={true}
            count='00'
            helpIconProps={{
              tooltipPlacement: 'right',
              tooltipOffsetValue: 4,
              tooltipMessage: 'Tooltip 노출',
              onClick: () => {
                return;
              },
            }}
          />
          <TitleGroup.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </TitleGroup.Actions>
        </TitleGroup.HeaderBox>
        <TitleGroup.Description description='paragraph2' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

Depth2.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Depth3: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup depth={3}>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            title='Title'
            isRequired={true}
            count='00'
            helpIconProps={{
              tooltipPlacement: 'right',
              tooltipOffsetValue: 4,
              tooltipMessage: 'Tooltip 노출',
              onClick: () => {
                return;
              },
            }}
          />
          <TitleGroup.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </TitleGroup.Actions>
        </TitleGroup.HeaderBox>
        <TitleGroup.Description description='paragraph2' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

Depth3.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const WithoutActions: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup depth={1}>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            title='Title'
            isRequired={true}
            count='00'
            helpIconProps={{
              tooltipPlacement: 'right',
              tooltipOffsetValue: 4,
              tooltipMessage: 'Tooltip 노출',
              onClick: () => {
                return;
              },
            }}
          />
        </TitleGroup.HeaderBox>
        <TitleGroup.Description description='paragraph1' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

WithoutActions.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const WithoutDescription: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup depth={1}>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            title='Title'
            isRequired={true}
            count='00'
            helpIconProps={{
              tooltipPlacement: 'right',
              tooltipOffsetValue: 4,
              tooltipMessage: 'Tooltip 노출',
              onClick: () => {
                return;
              },
            }}
          />
          <TitleGroup.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </TitleGroup.Actions>
        </TitleGroup.HeaderBox>
      </TitleGroup>
    </Stack.Horizontal>
  );
};

WithoutDescription.parameters = {
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
