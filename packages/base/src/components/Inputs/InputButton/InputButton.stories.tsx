import React from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import InputButton from './InputButton';
import type { InputButtonProps } from './InputButton.types';
import { Button, IconButton } from '../../Buttons';
import { Icon } from '../../Icon';
import { CalendarIcon } from '@shoplflow/hada-assets';

export default {
  title: 'COMPONENTS/Inputs/InputButton',
  component: InputButton,
  argTypes: { onClick: { action: 'clicked' }, onChange: { action: 'changed' } },
} as Meta;

export const Playground: StoryFn<InputButtonProps> = (args) => {
  const [value, setValue] = React.useState<string | undefined>(undefined);

  const valueArray = [1, 2, 3, 4, 5];
  return (
    <Stack width={'300px'} height={'400px'} spacing={'spacing12'}>
      <InputButton value={value} {...args} onChange={(value) => setValue(value)} />
      <Stack.Horizontal width={'100%'} justify={'space-between'}>
        {valueArray.map((data) => (
          <Button key={data} sizeVar={'S'} onClick={() => setValue(String(data))}>
            {data}
          </Button>
        ))}
      </Stack.Horizontal>
    </Stack>
  );
};
Playground.args = {
  placeholder: 'placeholder',
  rightSource: (
    <IconButton sizeVar={'S'} styleVar={'GHOST'}>
      <Icon iconSource={CalendarIcon} />
    </IconButton>
  ),
};
