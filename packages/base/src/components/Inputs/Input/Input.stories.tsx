import type { StoryFn } from '@storybook/react';
import { useState } from 'react';

import Input from './Input';
import type { InputProps } from './Input.types';

export default {
  title: 'COMPONENTS/Input',
  component: Input,
};

export const Default: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      maxLength={50}
      nowLength={value.length}
      {...args}
    />
  );
};

Default.args = {
  disabled: true,
  canDelete: true,
};
