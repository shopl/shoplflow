import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import Checkbox from './Checkbox';
import type { CheckboxProps } from './Checkbox.types';
import { ComponentStage } from '../../../styles/Box';

export default {
  title: 'COMPONENTS/ControlButtons/Checkbox',
  component: Checkbox,
};

export const Playground: StoryFn<CheckboxProps> = (args) => {
  return (
    <Stack>
      <ComponentStage>
        <Checkbox {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  defaultSelected: false,
};
