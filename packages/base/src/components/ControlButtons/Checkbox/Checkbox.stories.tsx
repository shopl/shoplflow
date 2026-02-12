import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import Checkbox from './Checkbox';
import { CheckboxStyleVariants } from './Checkbox.types';
import { ComponentStage } from '../../../styles/Box';

const meta = {
  title: 'COMPONENTS/ControlButtons/Checkbox',
  component: Checkbox,
  argTypes: {
    styleVar: {
      options: Object.values(CheckboxStyleVariants),
      control: { type: 'select' },
      description: '체크박스 스타일을 설정합니다.',
      defaultValue: 'PRIMARY',
    },
    defaultSelected: {
      control: { type: 'boolean' },
      description: '기본 선택 여부를 설정합니다.',
      defaultValue: false,
    },
    onClick: {
      action: 'clicked',
      description: '체크박스를 클릭했을 때 실행되는 동작을 설정합니다.',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

const WithStage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Stack>
    <ComponentStage>{children}</ComponentStage>
  </Stack>
);

export const Playground: Story = {
  args: {
    defaultSelected: false,
    styleVar: 'PRIMARY',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-3714',
    },
  },
  render: (args) => (
    <WithStage>
      <Checkbox {...args} />
    </WithStage>
  ),
};

export const Primary: Story = {
  args: {
    styleVar: 'PRIMARY',
    defaultSelected: false,
  },
  render: (args) => (
    <WithStage>
      <Checkbox {...args} />
    </WithStage>
  ),
};

export const Selected: Story = {
  args: {
    styleVar: 'PRIMARY',
    defaultSelected: true,
  },
  render: (args) => (
    <WithStage>
      <Checkbox {...args} />
    </WithStage>
  ),
};
