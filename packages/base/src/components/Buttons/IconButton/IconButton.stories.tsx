import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import IconButton from './IconButton';
import { IconButtonSizeVariants, IconButtonStyleVariants, type IconButtonProps } from './IconButton.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { ViewOffIcon } from '@shoplflow/shopl-assets';
import { colorTokens } from '../../../styles';
import { Icon } from '../../Icon';

const meta = {
  title: 'COMPONENTS/Buttons/IconButton',
  component: IconButton,
  argTypes: {
    styleVar: {
      options: Object.values(IconButtonStyleVariants),
      control: { type: 'select' },
      description: '아이콘 버튼 스타일을 설정합니다.',
      defaultValue: 'SECONDARY',
    },
    sizeVar: {
      options: Object.values(IconButtonSizeVariants),
      control: { type: 'select' },
      description: '아이콘 버튼 사이즈를 설정합니다.',
      defaultValue: 'M',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      defaultValue: 'primary300',
      description: 'SOLID 스타일일 때 배경색을 설정합니다.',
    },
    as: {
      description: '컴포넌트의 HTML 요소를 변경할 수 있습니다. (기본값: button)',
    },
    onClick: {
      action: 'clicked',
      description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Spinner가 노출되는 로딩 상태 여부를 설정합니다.',
      defaultValue: false,
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부를 설정합니다.',
      defaultValue: false,
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof IconButton>;

const IconButtonWithIcon = (args: IconButtonProps) => (
  <ComponentStage>
    <IconButton {...args}>
      <Icon iconSource={ViewOffIcon} />
    </IconButton>
  </ComponentStage>
);

export const Playground: Story = {
  args: {
    styleVar: 'SECONDARY',
    sizeVar: 'M',
    disabled: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=548-6226',
    },
  },
  render: (args) => <IconButtonWithIcon {...args} />,
};

export const Primary: Story = {
  args: {
    styleVar: 'PRIMARY',
    sizeVar: 'M',
    color: 'primary400',
    disabled: false,
  },
  render: (args) => <IconButtonWithIcon {...args} />,
};

export const Secondary: Story = {
  args: {
    styleVar: 'SECONDARY',
    sizeVar: 'M',
    color: 'primary400',
    disabled: false,
  },
  render: (args) => <IconButtonWithIcon {...args} />,
};

export const Solid: Story = {
  args: {
    styleVar: 'SOLID',
    sizeVar: 'M',
    color: 'neutral150',
    disabled: false,
  },
  render: (args) => (
    <Stack width='100px'>
      <IconButtonWithIcon {...args} />
    </Stack>
  ),
};

export const Ghost: Story = {
  args: {
    styleVar: 'GHOST',
    sizeVar: 'M',
    disabled: false,
  },
  render: (args) => (
    <Stack width='100px'>
      <IconButtonWithIcon {...args} />
    </Stack>
  ),
};

export const Loading: Story = {
  args: {
    styleVar: 'PRIMARY',
    sizeVar: 'M',
    isLoading: true,
    disabled: false,
  },
  render: (args) => <IconButtonWithIcon {...args} />,
};

export const Disabled: Story = {
  args: {
    styleVar: 'PRIMARY',
    sizeVar: 'M',
    disabled: true,
  },
  render: (args) => <IconButtonWithIcon {...args} />,
};
