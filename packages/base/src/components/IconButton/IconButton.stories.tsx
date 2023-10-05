import React from 'react';
import type { StoryFn } from '@storybook/react';
import IconButton from './IconButton';
import { colorTokens } from '../../styles';
import type { IconButtonProps } from './IconButton.types';
import { iconButtonSizeVar, iconButtonStyleVar } from './IconButton.types';

export default {
  title: 'COMPONENTS/IconButton',
  component: IconButton,
  argTypes: {
    styleVar: {
      options: iconButtonStyleVar,
      control: { type: 'select' },
      description: '아이콘 버튼 스타일 타입',
      defaultValue: 'primary',
    },
    sizeVar: {
      options: iconButtonSizeVar,
      control: { type: 'radio' },
      description: '아이콘 버튼 사이즈',
      defaultValue: 'M',
    },
  },
};

export const Solid: StoryFn<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

Solid.args = {
  styleVar: 'solid',
  sizeVar: 'M',
  children: <div style={{ backgroundColor: colorTokens.shopl100, width: '20px', height: '20px' }} />,
  disabled: false,
};

export const Ghost: StoryFn<IconButtonProps> = (args) => {
  return <IconButton {...args} />;
};

Ghost.args = {
  styleVar: 'ghost',
  sizeVar: 'M',
  children: <div style={{ backgroundColor: colorTokens.shopl100, width: '20px', height: '20px' }} />,
  disabled: false,
};
