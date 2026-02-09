import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import ToggleButton from './ToggleButton';
import type { ToggleButtonProps } from './ToggleButton.types';
import { Text } from '../Text';

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
        <ToggleButton.InnerRadio
          value='value1'
          label='엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 엄청긴 라벨 '
          id={'1'}
        />
        <ToggleButton.InnerRadio value='value2' label='Toggle2' id={'2'} />
        <ToggleButton.InnerRadio value='value3' label='disabled' id={'3'} disabled />
      </ToggleButton>
      <Text>선택된 된 값: {selectedValue}</Text>
    </Stack>
  );
};

Playground.args = {
  targetName: 'test',
};
