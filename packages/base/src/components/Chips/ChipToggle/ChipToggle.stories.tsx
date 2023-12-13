import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';

import type { ChipToggleProps } from './ChipToggle.types';
import ChipToggle from './ChipToggle';
import { ComponentStage } from '../../../styles/Box';

export default {
  title: 'COMPONENTS/Chips/ChipToggle',
  component: ChipToggle,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Playground: StoryFn<ChipToggleProps> = (args) => {
  return (
    <Stack>
      <Stack width={'200px'}>
        <ComponentStage>
          <ChipToggle {...args} />
        </ComponentStage>
      </Stack>
    </Stack>
  );
};

Playground.args = {
  text: '샤플플로우',
  defaultSelected: false,
  radius: true,
  disabled: false,
  styleVar: 'SOLID',
  sizeVar: 'S',
};

export const List: StoryFn<ChipToggleProps> = (args) => {
  return (
    <Stack>
      <Stack.Horizontal width={'300px'}>
        <ComponentStage>
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
          <ChipToggle {...args} />
        </ComponentStage>
      </Stack.Horizontal>
    </Stack>
  );
};

List.args = {
  text: '샤플플로우',
  defaultSelected: false,
  radius: false,
};
