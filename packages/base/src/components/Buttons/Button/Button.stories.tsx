import type { StoryFn } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import { ButtonStyleVariants } from './Button.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { colorTokens } from '../../../styles';

export default {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  argTypes: {
    styleVar: {
      options: ButtonStyleVariants,
      control: { type: 'select' },
      description: '버튼 타입',
      defaultValue: 'primary',
    },
    sizeVar: {
      options: ButtonStyleVariants,
      control: { type: 'radio' },
      description: '버튼 사이즈',
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

export const Primary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
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
  disabled: false,
};

export const Secondary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
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
    <Stack width={'200px'}>
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
  color: 'ocean100',
  disabled: false,
};

export const Ghost: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
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
