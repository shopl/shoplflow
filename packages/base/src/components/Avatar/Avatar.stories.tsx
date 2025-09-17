import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Avatar from './Avatar';
import type { AvatarProps } from './Avatar.types';
import { Icon } from '../Icon';
import { LeaderLargeIcon } from '@shoplflow/shopl-assets';
import { Text } from '../Text';

export default {
  title: 'COMPONENTS/Avatar',
  component: Avatar,
};

export const Playground: StoryFn<AvatarProps> = (args) => {
  return (
    <Stack>
      <Avatar {...args} />
    </Stack>
  );
};

Playground.args = {
  sizeVar: 'M',
};

export const WidthBadge: StoryFn<AvatarProps> = (args) => {
  return (
    <Stack>
      <Avatar badge={<Icon sizeVar={'XS'} iconSource={LeaderLargeIcon} />} {...args} />
    </Stack>
  );
};

WidthBadge.args = {
  sizeVar: 'M',
};

export const CompareNormalAndError: StoryFn<AvatarProps> = (args) => {
  return (
    <Stack direction='column' spacing='spacing16'>
      <Text typography='body2_700'>정상 이미지 vs 에러 이미지 비교</Text>
      <Stack spacing='spacing16'>
        <Stack direction='column' spacing='spacing08' align='center' width='100%'>
          <Avatar src='https://picsum.photos/100/100' sizeVar='L' {...args} />
          <Text typography='caption_400' color='green300'>
            정상 이미지
          </Text>
        </Stack>

        <Stack direction='column' spacing='spacing08' align='center' width='100%'>
          <Avatar src='https://invalid-url-that-will-fail.com/image.jpg' sizeVar='L' {...args} />
          <Text typography='caption_400' color='red300'>
            에러 이미지 (fallback 표시)
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

CompareNormalAndError.args = {
  sizeVar: 'L',
  fallbackUrl: undefined,
};
