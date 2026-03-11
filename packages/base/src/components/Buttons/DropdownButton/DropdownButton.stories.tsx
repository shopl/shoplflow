import React, { useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import DropdownButton from './DropdownButton';
import {
  DropdownButtonSizeVariants,
  DropdownButtonStyleVariants,
  type DropdownButtonProps,
} from './DropdownButton.types';
import { Text } from '../../../components/Text';

const meta = {
  title: 'COMPONENTS/Buttons/DropdownButton',
  component: DropdownButton,
  argTypes: {
    text: {
      description: '버튼 내부에 들어갈 text를 입력합니다.',
    },
    styleVar: {
      options: Object.values(DropdownButtonStyleVariants),
      control: { type: 'select' },
      description: '버튼의 스타일을 설정합니다.',
    },
    sizeVar: {
      options: Object.values(DropdownButtonSizeVariants),
      control: { type: 'select' },
      description: '버튼의 사이즈를 선택합니다.',
    },
    disabled: {
      description: '버튼의 비활성화 여부를 설정합니다.',
      control: { type: 'boolean' },
    },
    placement: {
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      control: { type: 'select' },
      description: 'option list가 노출되는 방향을 설정합니다.',
    },
    floatingZIndex: {
      description: 'option list의 z-index값을 설정합니다.',
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof DropdownButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: StoryFn<DropdownButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <DropdownButton {...args}>
        <DropdownButton.Menu isSelected={selectedItem === 'Shopl'} onClick={() => setSelectedItem('Shopl')}>
          <Text>Shopl (그룹명이 좀 길어요 이럴땐 어떻게 보이려나요)</Text>
        </DropdownButton.Menu>
        <DropdownButton.Menu isSelected={selectedItem === 'Hada'} onClick={() => setSelectedItem('Hada')}>
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  );
};

Playground.args = {
  text: 'Button',
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=8717-4817',
  },
};

export const Primary: Story = {
  args: {
    text: 'Primary Button',
    sizeVar: 'M',
    disabled: false,
  },
  render: (args) => (
    <Stack>
      <DropdownButton {...args} styleVar='PRIMARY'>
        <DropdownButton.Menu onClick={() => console.info('1')}>
          <div>Shopl</div>
        </DropdownButton.Menu>
        <DropdownButton.Menu onClick={() => console.info('2')}>
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  ),
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    sizeVar: 'M',
    disabled: false,
  },
  render: (args) => (
    <Stack>
      <DropdownButton {...args} styleVar='SECONDARY'>
        <DropdownButton.Menu onClick={() => console.info('1')}>
          <div>Shopl</div>
        </DropdownButton.Menu>
        <DropdownButton.Menu onClick={() => console.info('2')}>
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  ),
};
