import type { StoryFn } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import { buttonSizeVar, buttonStyleVar } from './Button.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';

export default {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  argTypes: {
    styleVar: {
      options: buttonStyleVar,
      control: { type: 'select' },
      description: '버튼 타입',
      defaultValue: 'primary',
    },
    sizeVar: {
      options: buttonSizeVar,
      control: { type: 'radio' },
      description: '버튼 사이즈',
      defaultValue: 'M',
    },
    onClick: { action: 'clicked' },
  },
};

export const Primary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Primary.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: '버튼',
  disabled: true,
};

export const Secondary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Secondary.args = {
  styleVar: 'SECONDARY',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const Solid: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Solid.args = {
  styleVar: 'SOLID',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const Ghost: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'100px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Ghost.args = {
  styleVar: 'GHOST',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};
