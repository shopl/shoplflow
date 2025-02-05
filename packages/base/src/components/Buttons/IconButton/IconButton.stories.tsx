import React from 'react';
import type { StoryFn } from '@storybook/react';
import IconButton from './IconButton';
import type { IconButtonProps } from './IconButton.types';
import { IconButtonSizeVariants, IconButtonStyleVariants } from './IconButton.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { ViewOffIcon } from '@shoplflow/shopl-assets';
import { colorTokens } from '../../../styles';
import { Icon } from '../../Icon';

export default {
  title: 'COMPONENTS/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    styleVar: {
      options: Object.values(IconButtonStyleVariants),
      control: { type: 'select' },
      description: '버튼의 스타일을 설정합니다.',
    },
    sizeVar: {
      options: Object.values(IconButtonSizeVariants),
      control: { type: 'select' },
      description: '버튼의 사이즈를 선택합니다.',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      defaultValue: 'primary300',
      description: '버튼의 배경색을 선택합니다.',
    },
    as: {
      description: '컴포넌트의 HTML 요소를 변경할 수 있습니다. (기본값: button)',
    },
    onClick: { action: 'clicked' },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Spinner가 노출되는 로딩 상태 여부를 설정합니다.',
      defaultValue: false,
    },
  },
};

export const Playground: StoryFn<IconButtonProps> = (args) => {
  return (
    <ComponentStage>
      <IconButton {...args}>
        <Icon iconSource={ViewOffIcon} />
      </IconButton>
    </ComponentStage>
  );
};

Playground.args = {
  styleVar: 'SECONDARY',
  sizeVar: 'M',
  disabled: false,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=548-6226',
  },
};

export const Primary: StoryFn<IconButtonProps> = (args) => {
  return (
    <ComponentStage>
      <IconButton {...args}>
        <Icon iconSource={ViewOffIcon} />
      </IconButton>
    </ComponentStage>
  );
};

Primary.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  color: 'primary400',
  disabled: false,
};

export const Secondary: StoryFn<IconButtonProps> = (args) => {
  return (
    <ComponentStage>
      <IconButton {...args}>
        <Icon iconSource={ViewOffIcon} />
      </IconButton>
    </ComponentStage>
  );
};

Secondary.args = {
  styleVar: 'SECONDARY',
  sizeVar: 'M',
  color: 'primary400',
  disabled: false,
};

export const Solid: StoryFn<IconButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <IconButton {...args}>
          <Icon iconSource={ViewOffIcon} />
        </IconButton>
      </ComponentStage>
    </Stack>
  );
};

Solid.args = {
  styleVar: 'SOLID',
  sizeVar: 'M',
  color: 'neutral150',
  disabled: false,
};

export const Ghost: StoryFn<IconButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <IconButton {...args}>
          <Icon iconSource={ViewOffIcon} />
        </IconButton>
      </ComponentStage>
    </Stack>
  );
};

Ghost.args = {
  styleVar: 'GHOST',
  sizeVar: 'M',
  disabled: false,
};
