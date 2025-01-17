import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Button, colorTokens, Stack, Switch } from '@shoplflow/base';
import Title from './Title';
import type { TitleProps } from './Title.types';

export default {
  title: 'COMPONENTS/Title',
  component: Title,
};

export const Playground: StoryFn<TitleProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <Title>
        <Title.HeaderBox>
          <Title.Header
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
          <Title.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </Title.Actions>
        </Title.HeaderBox>
        <Title.Description description='paragraph1' />
      </Title>
    </Stack.Horizontal>
  );
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=5699-10352&m=dev',
  },
};

export const Depth2: StoryFn<TitleProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <Title>
        <Title.HeaderBox>
          <Title.Header
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
          <Title.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </Title.Actions>
        </Title.HeaderBox>
        <Title.Description description='paragraph1' />
      </Title>
    </Stack.Horizontal>
  );
};

export const Depth3: StoryFn<TitleProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <Title>
        <Title.HeaderBox>
          <Title.Header
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
          <Title.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </Title.Actions>
        </Title.HeaderBox>
        <Title.Description description='paragraph1' />
      </Title>
    </Stack.Horizontal>
  );
};

export const WithoutActions: StoryFn<TitleProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <Title>
        <Title.HeaderBox>
          <Title.Header
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
        </Title.HeaderBox>
        <Title.Description description='paragraph1' />
      </Title>
    </Stack.Horizontal>
  );
};

export const WithoutDescription: StoryFn<TitleProps> = () => {
  return (
    <Stack.Horizontal width='600px'>
      <Title>
        <Title.HeaderBox>
          <Title.Header
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
          <Title.Actions>
            <Button styleVar='SECONDARY' sizeVar='S'>
              Button
            </Button>
            <div
              style={{ width: '20px', height: '20px', backgroundColor: `${colorTokens.shopl100}`, marginInline: '4px' }}
            />
            <Switch activeColor='primary300' />
          </Title.Actions>
        </Title.HeaderBox>
      </Title>
    </Stack.Horizontal>
  );
};
