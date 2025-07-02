import { TableBadge } from './components/TableElement';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TableBadge> = {
  title: 'Components/Table/TableElement/TableBadge',
  component: TableBadge,
  parameters: {
    docs: {
      description: {
        component: '테이블 내에서 사용되는 배지 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: '배지에 표시할 내용',
    },
  },
};

export default meta;

type Story = StoryObj<typeof TableBadge>;

export const 기본_배지: Story = {
  args: {
    children: '새로운',
  },
};

export const 상태_배지: Story = {
  args: {
    children: '완료',
  },
};

export const 숫자_배지: Story = {
  args: {
    children: '99+',
  },
};
