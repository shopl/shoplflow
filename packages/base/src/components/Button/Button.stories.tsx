import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { buttonSizeVar } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Button',
  component: Button,
  argTypes: {
    // buttonType: {
    //   options: buttonTypes,
    //   control: { type: 'radio' },
    // },
    sizeVar: {
      options: buttonSizeVar,
      control: { type: 'radio' },
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
