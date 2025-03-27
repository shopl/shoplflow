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
  const [selectedValue, setSelectedValue] = useState('value1');

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
        <ToggleButton.InnerRadio value='value1' label='Toggle1' id={'1'} />
        <ToggleButton.InnerRadio value='value2' label='Toggle2' id={'2'} />
        <ToggleButton.InnerRadio value='value3' label='disabled' id={'3'} disabled />
      </ToggleButton>
    </Stack>
  );
};

Playground.args = {
  targetName: 'test',
};
