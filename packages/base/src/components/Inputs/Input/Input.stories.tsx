import type { StoryFn } from '@storybook/react';
import { useRef, useState } from 'react';

import Input from './Input';
import type { InputProps } from './Input.types';

export default {
  title: 'COMPONENTS/Inputs/Input',
  component: Input,
};

export const Default: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      maxLength={50}
      ref={inputRef}
      {...args}
      nowLength={value.length}
      onDelete={() => {
        setValue('');
        inputRef.current?.focus();
      }}
    />
  );
};

Default.args = {
  disabled: false,
  onDelete: () => {
    return;
  },
};

export const Error: StoryFn<InputProps> = (args) => {
  const [value] = useState('에러 케이스');

  return <Input value={value} {...args} nowLength={value.length} />;
};

Error.args = {
  disabled: true,
  errorText: '에러가 발생 했습니다.',
};

export const WithIconButton: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Input
      value={value}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      maxLength={50}
      ref={inputRef}
      {...args}
      nowLength={value.length}
      onDelete={() => {
        setValue('');
        inputRef.current?.focus();
      }}
    />
  );
};

WithIconButton.args = {
  disabled: false,
  onDelete: () => {
    return;
  },
  confirmController: {
    hasBackground: true,
    onConfirm: () => {
      return;
    },
    icon: <div style={{ backgroundColor: 'yellow', width: '20px', height: '20px' }} />,
  },
};
