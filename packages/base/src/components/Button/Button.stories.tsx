import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { buttonSizeVar, buttonStyleVar } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  argTypes: {
    buttonType: {
      options: buttonStyleVar,
      control: { type: 'radio' },
      description: '버튼 타입',
      defaultValue: 'primary',
    },
    sizeVar: {
      options: buttonSizeVar,
      control: { type: 'radio' },
      description: '버튼 사이즈',
      defaultValue: 'm',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    styleVar: 'primary',
    sizeVar: 'm',
    children: '버튼',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    styleVar: 'secondary',
    sizeVar: 'm',
    children: '버튼',
    disabled: false,
  },
};

export const Solid: Story = {
  args: {
    styleVar: 'solid',
    sizeVar: 'm',
    children: '버튼',
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    styleVar: 'ghost',
    sizeVar: 'm',
    children: '버튼',
    disabled: false,
  },
};
