import type { Meta, StoryObj } from '@storybook/react-vite';
import Avatar from './Avatar';
import { Icon } from '../Icon';
import { LeaderLargeIcon } from '@shoplflow/shopl-assets';
import { AvatarSizeVariants } from './Avatar.types';

/** GitHub에서 제공하는 무료 아바타 이미지 (https://github.com/{username}.png) */
const MOCK_AVATAR_SRC = 'https://github.com/octocat.png';
const MOCK_AVATAR_SRC_ALT = 'https://avatars.githubusercontent.com/u/583231';

const meta = {
  title: 'COMPONENTS/Avatar',
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '아바타 이미지 URL을 설정합니다. (예: GitHub https://github.com/username.png)',
    },
    sizeVar: {
      options: Object.values(AvatarSizeVariants),
      control: { type: 'select' },
      description: '아바타의 사이즈를 설정합니다.',
      defaultValue: 'M',
    },
    badge: {
      control: { type: 'object' },
      description: '아바타의 배지를 설정합니다.',
    },
    fallbackUrl: {
      description: '아바타의 대체 이미지를 설정합니다.',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {
  args: {
    src: MOCK_AVATAR_SRC,
    sizeVar: 'M',
    badge: <Icon sizeVar={'XS'} iconSource={LeaderLargeIcon} />,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=2864-4798',
    },
  },
};

export const WidthBadge: Story = {
  args: {
    src: MOCK_AVATAR_SRC,
    sizeVar: 'M',
    badge: <Icon sizeVar={'XS'} iconSource={LeaderLargeIcon} />,
  },
};

export const CompareNormalAndError: Story = {
  args: {
    src: MOCK_AVATAR_SRC_ALT,
    sizeVar: 'L',
    fallbackUrl: undefined,
  },
};

export const SizeS: Story = {
  args: {
    src: MOCK_AVATAR_SRC,
    sizeVar: 'S',
  },
};

export const SizeL: Story = {
  args: {
    src: MOCK_AVATAR_SRC_ALT,
    sizeVar: 'L',
  },
};
