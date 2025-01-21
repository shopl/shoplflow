import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';

import { ChipToggleSizeVariants, ChipToggleStyleVariants, type ChipToggleProps } from './ChipToggle.types';
import ChipToggle from './ChipToggle';
import { ComponentStage } from '../../../styles/Box';

export default {
  title: 'COMPONENTS/Chips/ChipToggle',
  component: ChipToggle,
  argTypes: {
    onClick: { action: 'clicked' },
    styleVar: {
      control: {
        type: 'select',
      },
      options: Object.values(ChipToggleStyleVariants),
      description: 'Style variant of the ChipToggle',
      defaultValue: 'SOLID',
    },
    sizeVar: {
      control: {
        type: 'select',
      },
      options: Object.values(ChipToggleSizeVariants),
      description: 'Size variant of the ChipToggle',
      defaultValue: 'S',
    },
  },
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

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-5279&p=f&m=dev',
  },
};
