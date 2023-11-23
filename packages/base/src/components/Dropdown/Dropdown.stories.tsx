import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown.types';
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
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  content: <Dropdown.Content type={'FIXED'}>Content</Dropdown.Content>,
};
export const FillContent: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

FillContent.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  content: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};
export const Small: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Small.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'0'} sizeVar={'S'} />,
  content: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};

export const Disabled: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Disabled.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button disabled placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  content: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};
