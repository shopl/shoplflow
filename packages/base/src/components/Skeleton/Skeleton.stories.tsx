import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import Skeleton from '../Skeleton/Skeleton';
import { Stack } from '../Stack';

const meta = {
  title: 'COMPONENTS/Skeleton',
  component: Skeleton,
  argTypes: {
    styleVar: {
      options: ['circle', 'rectangle'],
      control: { type: 'select' },
      description: '스켈레톤 형태(원/사각형)를 설정합니다.',
      defaultValue: 'rectangle',
    },
    width: {
      control: { type: 'text' },
      description: '스켈레톤 너비를 설정합니다.',
      defaultValue: '40px',
    },
    height: {
      control: { type: 'text' },
      description: '스켈레톤 높이를 설정합니다.',
      defaultValue: '40px',
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof Skeleton>;

const WithStack = ({ children }: { children: React.ReactNode }) => (
  <Stack minWidth='100px' minHeight='100px'>
    {children}
  </Stack>
);

export const Playground: Story = {
  args: {
    styleVar: 'rectangle',
    width: '40px',
    height: '40px',
  },
  render: (args) => (
    <WithStack>
      <Skeleton {...args} />
    </WithStack>
  ),
};

export const Circle: Story = {
  args: {
    styleVar: 'circle',
    width: '48px',
    height: '48px',
  },
  render: (args) => (
    <WithStack>
      <Skeleton {...args} />
    </WithStack>
  ),
};

export const Rectangle: Story = {
  args: {
    styleVar: 'rectangle',
    width: '200px',
    height: '24px',
  },
  render: (args) => (
    <WithStack>
      <Skeleton {...args} />
    </WithStack>
  ),
};
