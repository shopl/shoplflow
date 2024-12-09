import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Combobox from './Combobox';
import type { ComboboxProps } from './Combobox.types';

export default {
  title: 'COMPONENTS/Combobox',
  component: Combobox,
};

export const Playground: StoryFn<ComboboxProps> = (args) => {
  return (
    <Stack>
      <Combobox
        {...args}
        inputType='hours'

        // onChange={() => {
        //   console.log('??');
        // }}
      />
    </Stack>
  );
};

export const Minutes: StoryFn<ComboboxProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <Combobox
        {...args}
        inputType='minutes'
        disabled={true}
        // onChange={() => {
        //   console.log('??');
        // }}
      />
    </Stack>
  );
};

export const SMallSizeHours: StoryFn<ComboboxProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <Combobox
        {...args}
        inputType='hours'
        sizeVar='S'
        // onChange={() => {
        //   console.log('??');
        // }}
      />
    </Stack>
  );
};

export const Unit5Minutes: StoryFn<ComboboxProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <Combobox
        {...args}
        inputType='minutes'
        sizeVar='M'
        unit={5}
        // onChange={() => {
        //   console.log('??');
        // }}
      />
    </Stack>
  );
};
