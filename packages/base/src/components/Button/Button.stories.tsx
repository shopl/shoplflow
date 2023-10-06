import type { StoryFn } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import { buttonSizeVar, buttonStyleVar } from './Button.types';

export default {
  title: 'COMPONENTS/Button',
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
  },
};

export const Primary: StoryFn<ButtonProps> = (args) => {
  return <Button {...args} />;
};

Primary.args = {
  styleVar: 'primary',
  sizeVar: 'M',
  children: '버튼',
  disabled: true,
};

export const Secondary: StoryFn<ButtonProps> = (args) => {
  return <Button {...args} />;
};

Secondary.args = {
  styleVar: 'secondary',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const Solid: StoryFn<ButtonProps> = (args) => {
  return <Button {...args} />;
};

Solid.args = {
  styleVar: 'solid',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const Ghost: StoryFn<ButtonProps> = (args) => {
  return <Button {...args} />;
};

Ghost.args = {
  styleVar: 'ghost',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};
