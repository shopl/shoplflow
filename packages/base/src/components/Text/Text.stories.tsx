import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Stack } from '../Stack';

import Text from './Text';

import type { TextProps } from './Text.types';
import type { TypographyTokens } from '../../styles';
import { typographyTokens } from '../../styles';

export default {
  title: 'COMPONENTS/Text',
  component: Text,
} as Meta;

const allTypographyValues = Array.from(Object.values(typographyTokens));
const allTypographyKeys = Array.from(Object.keys(typographyTokens)) as TypographyTokens[];

export const AllTexts: StoryFn<TextProps> = (args) => {
  return (
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
  );
};

AllTexts.args = {
  children: 'The quick brown fox jumps over the lazy dog',
};
