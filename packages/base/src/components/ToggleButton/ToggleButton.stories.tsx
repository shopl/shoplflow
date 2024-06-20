import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import ToggleButton from './ToggleButton';
import type { ToggleButtonProps } from './ToggleButton.types';

export default {
  title: 'COMPONENTS/ToggleButton',
  component: ToggleButton,
};

export const Playground: StoryFn<ToggleButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState('test1');

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Stack>
      <ToggleButton
        {...args}
        onChange={onChange}
        selectedValue={selectedValue}
        targetName='group'
        sizeVar='S'
        fixedWidth={100}
      >
        <ToggleButton.InnerRadio value='test1' label='test1' id={'1'} />
        <ToggleButton.InnerRadio value='test2' label='test2' id={'2'} disabled />
        <ToggleButton.InnerRadio value='test3' label='test3' id={'3'} />
      </ToggleButton>
    </Stack>
  );
};

Playground.args = {
  targetName: 'test',
};
