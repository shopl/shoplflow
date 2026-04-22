import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from '../Stack';

import Text from './Text';

import type { TypographyTokens } from '../../styles';
import { typographyTokens } from '../../styles';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Text',
  component: Text,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Text 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

const allTypographyValues = Object.values(typographyTokens);
const allTypographyKeys = Object.keys(typographyTokens) as TypographyTokens[];

export const AllTexts: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
  render: (args) => (
    <Stack.Vertical>
      {allTypographyValues.map((typo, index) => (
        <Stack.Vertical key={index}>
          <Text typography={allTypographyKeys[index]} {...args}>
            {args.children}
          </Text>
          <Text typography={'caption_400'}>{args.typography ?? allTypographyKeys[index]}</Text>
        </Stack.Vertical>
      ))}
    </Stack.Vertical>
  ),
};
