import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';
import { colorTokens } from '../../styles';
import { iconButtonSizeVar } from './IconButton.types';

const meta: Meta<typeof IconButton> = {
  title: 'COMPONENTS/IconButton',
  component: IconButton,
  argTypes: {
    sizeVar: {
      options: iconButtonSizeVar,
      control: { type: 'radio' },
      description: '버튼 사이즈',
      defaultValue: 'm',
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Solid: Story = {
  args: {
    styleVar: 'solid',
    sizeVar: 'm',
    children: <div style={{ backgroundColor: colorTokens.shopl100, width: '20px', height: '20px' }} />,
    disabled: false,
  },
};

export const Ghost: Story = {
  args: {
    styleVar: 'ghost',
    sizeVar: 'm',
    children: <div style={{ backgroundColor: colorTokens.shopl100, width: '20px', height: '20px' }} />,
    disabled: false,
  },
};
