import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Avatar from './Avatar';
import type { AvatarProps } from './Avatar.types';
import { Icon } from '../Icon';
import { LeaderLargeIcon } from '@shoplflow/shopl-assets';

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

Playground.args = {
  sizeVar: 'M',
};
