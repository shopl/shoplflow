import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Button, colorTokens, Stack, Switch } from '@shoplflow/base';
import TitleGroup from './TitleGroup';
import type { TitleGroupHeaderProps, TitleGroupHelpIconProps, TitleGroupProps } from './TitleGroup.types';

interface PlaygroundProps extends TitleGroupProps, TitleGroupHeaderProps, TitleGroupHelpIconProps {
  showActions: boolean;
}

export default {
  title: 'COMPONENTS/TitleGroup',
  component: TitleGroup,
  argTypes: {
    isRequired: {
      control: 'boolean',
      defaultValue: true,
    },
    tooltipPlacement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'right',
    },
    tooltipMessage: {
      control: 'text',
      defaultValue: 'Tooltip 노출',
    },
    count: {
      control: 'text',
      defaultValue: '00',
    },
    showActions: {
      control: 'boolean',
      defaultValue: true,
    },
  },
};

export const Playground: StoryFn<PlaygroundProps> = (args) => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            depth={1}
            title='Title'
            count={args.count}
            isRequired={args.isRequired}
            helpIconProps={{
              tooltipPlacement: args.tooltipPlacement,
              tooltipOffsetValue: 4,
              tooltipMessage: args.tooltipMessage,
              onClick: () => {
                return;
              },
            }}
          />
          {args.showActions && (
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
        <TitleGroup.Description description='paragraph1' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

Playground.args = {
  isRequired: true,
  tooltipPlacement: 'right',
  tooltipMessage: 'Tooltip 노출',
  count: '00',
  showActions: true,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=5699-10352&m=dev',
  },
};

export const Depth2: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            depth={2}
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
        <TitleGroup.Description description='paragraph1' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

export const Depth3: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            depth={3}
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
        <TitleGroup.Description description='paragraph1' />
      </TitleGroup>
    </Stack.Horizontal>
  );
};

export const WithoutActions: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            depth={1}
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

export const WithoutDescription: StoryFn<TitleGroupProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <TitleGroup>
        <TitleGroup.HeaderBox>
          <TitleGroup.Header
            depth={1}
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
