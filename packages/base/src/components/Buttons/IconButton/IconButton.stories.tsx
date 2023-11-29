import React from 'react';
import type { StoryFn } from '@storybook/react';
import IconButton from './IconButton';
import type { IconButtonProps } from './IconButton.types';
import { iconButtonSizeVar, iconButtonStyleVar } from './IconButton.types';
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
      options: iconButtonStyleVar,
      control: { type: 'select' },
      description: '아이콘 버튼 스타일 타입',
      defaultValue: 'PRIMARY',
    },
    sizeVar: {
      options: iconButtonSizeVar,
      control: { type: 'radio' },
      description: '아이콘 버튼 사이즈',
      defaultValue: 'M',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      defaultValue: 'primary400',
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary: StoryFn<IconButtonProps> = (args) => {
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

Primary.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  color: 'primary400',
  disabled: false,
};
export const Secondary: StoryFn<IconButtonProps> = (args) => {
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
  color: 'red200',
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
  sizeVar: 'S',

  disabled: false,
};
