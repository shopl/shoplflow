import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown.types';
import { InputButton } from '../Inputs/InputButton';
import { ComponentStage } from '../../styles/Box';

export default {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
};

export const Playground: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  trigger: <InputButton placeholder={'Dropdown 안에 InputButton을 넣었어요.'}>Trigger</InputButton>,
  content: <div>Content</div>,
};
