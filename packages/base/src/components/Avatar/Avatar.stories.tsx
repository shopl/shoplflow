import type { Meta, StoryFn } from '@storybook/react-vite';
import { Icon } from '../Icon';
import { LeaderLargeIcon } from '@shoplflow/shopl-assets';
import Avatar from './Avatar';
import { AvatarSizeVariants } from './Avatar.types';
import type { AvatarProps } from './Avatar.types';

const FIGMA_URL = 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=2864-4798';

const MOCK_AVATAR_SRC = 'https://github.com/octocat.png';

const meta: Meta<typeof Avatar> = {
  title: 'COMPONENTS/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '아바타 이미지 URL을 설정합니다.',
    },
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(AvatarSizeVariants),
      description: '아바타의 사이즈를 설정합니다.',
      table: { type: { summary: Object.values(AvatarSizeVariants).join(' | ') } },
    },
    fallbackUrl: {
      control: { type: 'text' },
      description: 'src 로드 실패 시 표시할 대체 이미지 URL을 설정합니다.',
    },
    badge: {
      description: '아바타 우측 하단에 표시할 배지 ReactNode입니다.',
    },
  },
};

export default meta;

type PlaygroundArgs = AvatarProps & {
  showBadge?: boolean;
};

export const Playground: StoryFn<PlaygroundArgs> = (args) => {
  const { showBadge, ...componentProps } = args;
  return <Avatar {...componentProps} badge={showBadge ? <Icon iconSource={LeaderLargeIcon} /> : undefined} />;
};

Playground.args = {
  src: MOCK_AVATAR_SRC,
  sizeVar: 'M',
  showBadge: false,
};

Playground.argTypes = {
  showBadge: {
    control: { type: 'boolean' },
    description: 'Playground 전용: badge(ReactNode) 표시 여부를 토글합니다. 실제 prop은 badge입니다.',
    table: { category: 'Playground (데모 전용)' },
  },
};

Playground.parameters = {
  controls: {
    include: ['src', 'sizeVar', 'fallbackUrl', 'showBadge'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
