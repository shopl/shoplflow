import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import ScrollArea from './ScrollArea';
import { Box, ComponentStage } from '../../styles/Box';

const meta = {
  title: 'COMPONENTS/ScrollArea',
  component: ScrollArea,
  argTypes: {
    universal: {
      control: { type: 'boolean' },
      description: '범용 렌더링 사용 여부를 설정합니다.',
      defaultValue: false,
    },
    autoHide: {
      control: { type: 'boolean' },
      description: '스크롤바 자동 숨김 여부를 설정합니다.',
    },
    hideTracksWhenNotNeeded: {
      control: { type: 'boolean' },
      description: '오버플로우가 없을 때 트랙을 숨길지 설정합니다.',
    },
    onScroll: {
      action: 'scroll',
      description: '스크롤 이벤트 발생 시 실행되는 동작을 설정합니다.',
    },
  },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof ScrollArea>;

const scrollContent = Array.from({ length: 100 }, (_, i) => (
  <Box key={i} width='100%' height='60px' background='primary300' />
));

export const Playground: Story = {
  args: {
    universal: false,
    autoHide: false,
  },
  render: (args) => (
    <Stack height='600px' width='500px'>
      <ComponentStage>
        <ScrollArea {...args}>{scrollContent}</ScrollArea>
      </ComponentStage>
    </Stack>
  ),
};

export const WithAutoHide: Story = {
  args: {
    autoHide: true,
  },
  render: (args) => (
    <Stack height='400px' width='400px'>
      <ComponentStage>
        <ScrollArea {...args}>{scrollContent}</ScrollArea>
      </ComponentStage>
    </Stack>
  ),
};
