import React from 'react';
import { TableButton } from './components/TableElement';
import { Icon } from '@shoplflow/base';
import { EditIcon, RefreshIcon } from '@shoplflow/shopl-assets';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TableButton> = {
  title: 'Components/Table/TableElement/TableButton',
  component: TableButton,
  parameters: {
    docs: {
      description: {
        component: '테이블 내에서 사용되는 버튼 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: '버튼에 표시할 텍스트',
      defaultValue: '버튼',
    },
    leftSource: {
      control: false,
      description: '버튼 왼쪽에 표시할 아이콘이나 컴포넌트',
    },
    rightSource: {
      control: false,
      description: '버튼 오른쪽에 표시할 아이콘이나 컴포넌트',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 이벤트',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TableButton>;

export const 기본_버튼: Story = {
  args: {
    children: '기본 버튼',
  },
};

export const 왼쪽_아이콘_버튼: Story = {
  args: {
    children: '편집',
    leftSource: <Icon iconSource={EditIcon} sizeVar='S' />,
  },
};

export const 오른쪽_아이콘_버튼: Story = {
  args: {
    children: '새로고침',
    rightSource: <Icon iconSource={RefreshIcon} sizeVar='S' />,
  },
};

export const 양쪽_아이콘_버튼: Story = {
  args: {
    children: '액션',
    leftSource: <Icon iconSource={EditIcon} sizeVar='S' />,
    rightSource: <Icon iconSource={RefreshIcon} sizeVar='S' />,
  },
};

export const 비활성화_버튼: Story = {
  args: {
    children: '비활성화',
    disabled: true,
  },
};
