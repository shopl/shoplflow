import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Stack } from '../Stack';

import { Text } from '../Text';
import IconButton from './IconButton';

import type { TextProps } from './IconButton.types';
import type { TypographyTokens } from '../../styles';
import { typographyTokens } from '../../styles';

const meta: Meta = {
  title: 'COMPONENTS/IconButton',
  component: IconButton,
};

export default meta;

const allTypographyValues = Object.values(typographyTokens);
const allTypographyKeys = Object.keys(typographyTokens) as TypographyTokens[];

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
