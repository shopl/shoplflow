import React from 'react';
import type { StoryFn } from '@storybook/react';
import IconButton from './IconButton';
import { colorTokens } from '../../../styles';
import type { IconButtonProps } from './IconButton.types';
import { iconButtonSizeVar, iconButtonStyleVar } from './IconButton.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';

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
    onClick: { action: 'clicked' },
  },
};

export const Solid: StoryFn<IconButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <IconButton {...args} />
      </ComponentStage>
    </Stack>
  );
};

Solid.args = {
  styleVar: 'SOLID',
  sizeVar: 'M',
  children: <div style={{ backgroundColor: colorTokens.shopl100, width: '20px', height: '20px' }} />,
  disabled: false,
};

export const Ghost: StoryFn<IconButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <IconButton {...args} />
      </ComponentStage>
    </Stack>
  );
};

Ghost.args = {
  styleVar: 'GHOST',
  sizeVar: 'M',
  children: <div style={{ backgroundColor: colorTokens.shopl100, width: '20px', height: '20px' }} />,
  disabled: false,
};
