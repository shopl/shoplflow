import React, { useState } from 'react';

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

export const WithOnError: StoryFn<AvatarProps> = (args) => {
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setErrorMessage('이미지 로드에 실패했습니다.');
    // eslint-disable-next-line no-console
    console.log('Avatar 이미지 로드 실패:', event);
  };

  return (
    <Stack direction='column' spacing='spacing16'>
      <Text typography='body2_700'>onError 테스트 - 잘못된 이미지 URL 사용</Text>
      <Stack>
        <Avatar src='https://invalid-url-that-will-fail.com/image.jpg' onError={handleError} sizeVar='L' {...args} />
      </Stack>
      {errorMessage && (
        <Text typography='caption_400' color='red300'>
          {errorMessage}
        </Text>
      )}
    </Stack>
  );
};

WithOnError.args = {
  sizeVar: 'L',
};
