import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../../Stack';

import { ChipToggleSizeVariants, ChipToggleStyleVariants } from './ChipToggle.types';
import ChipToggle from './ChipToggle';
import { ComponentStage } from '../../../styles/Box';

const meta = {
  title: 'COMPONENTS/Chips/ChipToggle',
  component: ChipToggle,
  argTypes: {
    onClick: { action: 'clicked' },
    styleVar: {
      control: { type: 'select' },
      options: Object.values(ChipToggleStyleVariants),
      description: '스타일 variant를 설정합니다.',
    },
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(ChipToggleSizeVariants),
      description: '사이즈 variant를 설정합니다.',
    },
  },
} satisfies Meta<typeof ChipToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    text: '샤플플로우',
    defaultSelected: false,
    radius: true,
    disabled: false,
    styleVar: 'SOLID',
    sizeVar: 'S',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-5279&p=f&m=dev',
    },
  },
  render: (args) => (
    <Stack>
      <Stack width={'200px'}>
        <ComponentStage>
          <ChipToggle {...args} />
        </ComponentStage>
      </Stack>
    </Stack>
  ),
};

export const List: Story = {
  args: {
    text: '샤플플로우',
    defaultSelected: false,
    radius: false,
  },
  render: (args) => (
    <Stack>
      <Stack.Horizontal width={'300px'}>
        <ComponentStage>
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
        </ComponentStage>
      </Stack.Horizontal>
    </Stack>
  ),
};
