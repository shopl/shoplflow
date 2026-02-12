import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Callout from './Callout';
import { CalloutTypes } from './Callout.types';
import { AlertIcon, NoticeIcon } from '@shoplflow/shopl-assets';
import { ComponentStage } from '../../styles/Box';

const meta = {
  title: 'COMPONENTS/Callout',
  component: Callout,
  argTypes: {
    styleVar: {
      options: Object.values(CalloutTypes),
      control: { type: 'select' },
      description: '캘아웃 스타일(정보/알림)을 설정합니다.',
      defaultValue: 'INFORMATION',
    },
    fillWidth: {
      control: { type: 'boolean' },
      description: '캘아웃 너비를 100%로 채울지 설정합니다.',
      defaultValue: true,
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;

type Story = StoryObj<typeof Callout>;

export const Playground: Story = {
  args: {
    styleVar: 'INFORMATION',
    fillWidth: true,
  },
  render: (args) => (
    <Stack width='1000px'>
      <ComponentStage>
        <Callout {...args}>
          <Callout.Icon iconSource={NoticeIcon} />
          <Callout.Text>
            사용 안 함으로 설정할 경우 기존 등록된 게시물을 읽을 수도, 새로운 게시물을 포스팅할 수도 없게 됩니다. (단,
            기존 등록된 게시물이 삭제되지는 않습니다.) 사용 안 함으로 설정할 경우 기존 등록된 게시물을 읽을 수도, 새로운
            게시물을 포스팅할 수도 없게 됩니다.
          </Callout.Text>
        </Callout>
      </ComponentStage>
    </Stack>
  ),
};

export const Alert: Story = {
  args: {
    styleVar: 'ALERT',
  },
  render: (args) => (
    <Stack width='500px'>
      <ComponentStage>
        <Callout {...args}>
          <Callout.Icon iconSource={AlertIcon} />
          <Callout.Text>삭제 시 기존의 모든 게시물이 삭제됩니다. 복구가 불가하니 신중하게 결정해주세요.</Callout.Text>
        </Callout>
      </ComponentStage>
    </Stack>
  ),
};

export const WithoutIcon: Story = {
  args: {
    styleVar: 'INFORMATION',
    fillWidth: false,
  },
  render: (args) => (
    <Stack width='500px'>
      <ComponentStage>
        <Callout {...args}>
          <Callout.Text>삭제 시 기존의 모든 게시물이 삭제됩니다. 복구가 불가하니 신중하게 결정해주세요.</Callout.Text>
        </Callout>
      </ComponentStage>
    </Stack>
  ),
};
