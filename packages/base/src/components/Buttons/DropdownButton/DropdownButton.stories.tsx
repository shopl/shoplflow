import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import DropdownButton from './DropdownButton';
import type { DropdownButtonProps } from './DropdownButton.types';

export default {
  title: 'COMPONENTS/Buttons/DropdownButton',
  component: DropdownButton,
};

export const Playground: StoryFn<DropdownButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <DropdownButton {...args} text='Button'>
        <DropdownButton.Menu
          isSelected={selectedItem === 'Shopl'}
          onClick={() => {
            setSelectedItem('Shopl');
          }}
        >
          <div>Shopl</div>
        </DropdownButton.Menu>
        <DropdownButton.Menu
          isSelected={selectedItem === 'Hada'}
          onClick={() => {
            setSelectedItem('Hada');
          }}
        >
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  );
};

export const Secondary: StoryFn<DropdownButtonProps> = (args) => {
  return (
    <Stack>
      <DropdownButton {...args} text='Button' styleVar='SECONDARY'>
        <DropdownButton.Menu onClick={() => console.info('1')}>
          <div>Shopl</div>
        </DropdownButton.Menu>
        <DropdownButton.Menu onClick={() => console.info('2')}>
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  );
};

export const Small: StoryFn<DropdownButtonProps> = (args) => {
  return (
    <Stack>
      <DropdownButton {...args} text='Button' sizeVar='S' styleVar='SECONDARY'>
        <DropdownButton.Menu onClick={() => console.info('1')}>
          <div>Shopl</div>
        </DropdownButton.Menu>
        <DropdownButton.Menu onClick={() => console.info('2')}>
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  );
};

export const Disabled: StoryFn<DropdownButtonProps> = (args) => {
  return (
    <Stack>
      <DropdownButton {...args} disabled aria-disabled text='Button' sizeVar='S' styleVar='SECONDARY'>
        <DropdownButton.Menu onClick={() => console.info('1')}>
          <div>Shopl</div>
        </DropdownButton.Menu>
        <DropdownButton.Menu onClick={() => console.info('2')}>
          <div>Hada</div>
        </DropdownButton.Menu>
      </DropdownButton>
    </Stack>
  );
};
