import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Callout from './Callout';
import type { CalloutProps } from './Callout.types';
import { AlertIcon, NoticeIcon } from '@shoplflow/shopl-assets';

export default {
  title: 'COMPONENTS/Callout',
  component: Callout,
} as Meta;

export const Playground: StoryFn<CalloutProps> = (args) => {
  return (
    <Stack width={'400px'}>
      <Callout {...args}>
        <Callout.Icon iconSource={NoticeIcon} />
        <Callout.Text>
          사용 안 함으로 설정할 경우 기존 등록된 게시물을 읽을 수도, 새로운 게시물을 포스팅할 수도 없게 됩니다. (단,
          기존 등록된 게시물이 삭제되지는 않습니다.)
        </Callout.Text>
      </Callout>
    </Stack>
  );
};

Playground.args = {
  styleVar: 'INFORMATION',
};
export const Alert: StoryFn<CalloutProps> = (args) => {
  return (
    <Stack width={'400px'}>
      <Callout {...args}>
        <Callout.Icon iconSource={AlertIcon} />
        <Callout.Text>삭제 시 기존의 모든 게시물이 삭제됩니다. 복구가 불가하니 신중하게 결정해주세요.</Callout.Text>
      </Callout>
    </Stack>
  );
};

Alert.args = {
  styleVar: 'ALERT',
};
