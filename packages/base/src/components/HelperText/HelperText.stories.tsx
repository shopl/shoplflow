import type { Meta, StoryObj } from '@storybook/react-vite';
import HelperText from './HelperText';
import { colorTokens } from '../../styles';

const meta = {
  title: 'COMPONENTS/HelperText',
  component: HelperText,
  argTypes: {
    type: {
      options: ['NORMAL', 'BULLET'],
      control: { type: 'select' },
      description: '헬퍼 텍스트 스타일을 설정합니다.',
      defaultValue: 'NORMAL',
    },
    position: {
      options: ['PRESET-NONE', 'PRESET-TOP', 'PRESET-BOTTOM'],
      control: { type: 'select' },
      defaultValue: 'PRESET-NONE',
      description: '헬퍼 텍스트의 위치(마진)를 설정합니다.',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      description: '헬퍼 텍스트의 색상을 설정합니다.',
      defaultValue: 'neutral700',
    },
    children: {
      description: '헬퍼 텍스트 내부에 표시되는 내용입니다.',
    },
  },
} satisfies Meta<typeof HelperText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    type: 'NORMAL',
    position: 'PRESET-TOP',
    color: 'neutral700',
    children: '입력한 내용을 확인해주세요.',
  },
};

export const Normal: Story = {
  args: {
    type: 'NORMAL',
    color: 'neutral700',
    children: 'NORMAL + PRESET-NONE 텍스트입니다.',
  },
};

export const Bullet: Story = {
  args: {
    type: 'BULLET',
    color: 'neutral700',
    children: '불릿 스타일의 헬퍼 텍스트입니다.',
  },
};

export const PositionTop: Story = {
  args: {
    type: 'NORMAL',
    position: 'PRESET-TOP',
    color: 'neutral700',
    children: 'NORMAL + PRESET-TOP 텍스트입니다.',
  },
};

export const PositionBottom: Story = {
  args: {
    type: 'NORMAL',
    position: 'PRESET-BOTTOM',
    color: 'neutral700',
    children: 'NORMAL + PRESET-BOTTOM 텍스트입니다.',
  },
};

export const ColorNeutral: Story = {
  args: {
    type: 'NORMAL',
    color: 'neutral500',
    children: 'NORMAL + neutral500 색상의 헬퍼 텍스트입니다.',
  },
};

export const ColorError: Story = {
  args: {
    type: 'NORMAL',
    color: 'red300',
    children: '에러 메시지용 빨간색 헬퍼 텍스트입니다.',
  },
};
