import React from 'react';
import type { StoryFn } from '@storybook/react';
import IconButton from './IconButton';
import type { IconButtonProps } from './IconButton.types';
import { iconButtonSizeVar, iconButtonStyleVar } from './IconButton.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { ViewOffIcon } from '@shoplflow/shopl-assets';

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
  iconSource: ViewOffIcon,
  disabled: false,
};

export const Ghost: StoryFn<IconButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <IconButton {...args} iconSize={'S'} sizeVar={'M'} />
      </ComponentStage>
    </Stack>
  );
};

Ghost.args = {
  styleVar: 'GHOST',
  sizeVar: 'S',
  iconSource: ViewOffIcon,
  disabled: false,
};
