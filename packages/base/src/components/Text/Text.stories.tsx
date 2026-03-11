import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Stack } from '../Stack';

import Text from './Text';

import type { TypographyTokens } from '../../styles';
import { typographyTokens } from '../../styles';

const meta = {
  title: 'COMPONENTS/Text',
  component: Text,
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
