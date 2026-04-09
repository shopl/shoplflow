import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import DropdownButton from './DropdownButton';
import { DropdownButtonSizeVariants, DropdownButtonStyleVariants } from './DropdownButton.types';
import type { DropdownButtonProps } from './DropdownButton.types';
import { Text } from '../../../components/Text';

const FIGMA_URL =
  'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=8717-4817';

const PLACEMENT_OPTIONS = [
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
] as const;

const meta: Meta<typeof DropdownButton> = {
  title: 'COMPONENTS/Buttons/DropdownButton',
  component: DropdownButton,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '버튼 내부에 들어갈 text를 입력합니다.',
    },
    styleVar: {
      control: { type: 'select' },
      options: Object.values(DropdownButtonStyleVariants),
      description: '버튼의 스타일을 설정합니다.',
      table: { type: { summary: Object.values(DropdownButtonStyleVariants).join(' | ') } },
    },
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(DropdownButtonSizeVariants),
      description: '버튼의 사이즈를 선택합니다.',
      table: { type: { summary: Object.values(DropdownButtonSizeVariants).join(' | ') } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼의 비활성화 여부를 설정합니다.',
    },
    placement: {
      control: { type: 'select' },
      options: [...PLACEMENT_OPTIONS],
      description: 'option list가 노출되는 방향을 설정합니다.',
      table: { type: { summary: PLACEMENT_OPTIONS.join(' | ') } },
    },
    floatingZIndex: {
      control: { type: 'number' },
      description: 'option list의 z-index값을 설정합니다.',
    },
  },
};

export default meta;

export const Playground: StoryFn<DropdownButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <DropdownButton {...args}>
        <DropdownButton.Menu isSelected={selectedItem === 'Shopl'} onClick={() => setSelectedItem('Shopl')}>
          <Text>Shopl (그룹명이 좀 길어요 이럴땐 어떻게 보이려나요)</Text>
        </DropdownButton.Menu>
        <DropdownButton.Menu isSelected={selectedItem === 'Hada'} onClick={() => setSelectedItem('Hada')}>
          <Text>Hada</Text>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  );
};

Playground.args = {
  text: 'Button',
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  disabled: false,
};

Playground.argTypes = {};

Playground.parameters = {
  controls: {
    include: ['text', 'styleVar', 'sizeVar', 'placement', 'disabled', 'floatingZIndex'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Disabled: StoryFn<DropdownButtonProps> = (args) => (
  <Stack>
    <DropdownButton {...args}>
      <DropdownButton.Menu>
        <Text>Shopl</Text>
      </DropdownButton.Menu>
      <DropdownButton.Menu>
        <Text>Hada</Text>
      </DropdownButton.Menu>
    </DropdownButton>
  </Stack>
);

Disabled.args = {
  text: 'Button',
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  disabled: true,
};

Disabled.parameters = {
  controls: {
    include: ['styleVar', 'sizeVar'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
