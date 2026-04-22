import type { Meta, StoryFn } from '@storybook/react-vite';
import { Icon } from '../Icon';
import { LeaderLargeIcon } from '@shoplflow/shopl-assets';
import Avatar from './Avatar';
import { AvatarSizeVariants } from './Avatar.types';
import type { AvatarProps } from './Avatar.types';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

const FIGMA_URL = 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=2864-4798';

const MOCK_AVATAR_SRC = 'https://github.com/octocat.png';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta: Meta<typeof Avatar> = {
  title: 'COMPONENTS/Avatar',
  component: Avatar,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Avatar 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
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
