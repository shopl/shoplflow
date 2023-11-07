import type { StoryFn } from '@storybook/react';
import { useRef, useState } from 'react';

import Input from './Input';
import type { InputProps } from './Input.types';
import { Stack } from '../../Stack';
import { Button } from '../../Buttons';

export default {
  title: 'COMPONENTS/Inputs/Input',
  component: Input,
};

export const Playground: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <Input maxLength={50} ref={inputRef} {...args} />
    </Stack>
  );
};

Playground.args = {
  placeholder: 'input 예제에요.',
  disabled: false,
  onDelete: () => {
    return;
  },
};
export const Password: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <Input maxLength={50} ref={inputRef} {...args} />
    </Stack>
  );
};

Password.args = {
  type: 'password',
  placeholder: '타입이 password인 경우에요.',
  disabled: false,
  onDelete: () => {
    return;
  },
};
export const CheckValue: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'600px'} spacing={'spacing12'}>
      <Stack.Horizontal width={'100%'} spacing={'spacing12'}>
        <Input maxLength={50} ref={inputRef} {...args} />
        <Button
          styleVar={'PRIMARY'}
          onClick={() => {
            setValue(inputRef.current?.value || '');
          }}
        >
          get value
        </Button>
      </Stack.Horizontal>
      <Stack.Horizontal>
        <div>{value}</div>
      </Stack.Horizontal>
    </Stack>
  );
};

CheckValue.args = {
  placeholder: '버튼을 눌렀을 때 input 값을 확인할 수 있어요.',
  disabled: false,
  onDelete: () => {
    return;
  },
};

export const Error: StoryFn<InputProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <Input maxLength={50} {...args} />
    </Stack>
  );
};

Error.args = {
  disabled: false,
  isError: true,
  placeholder: '에러 상태에요.',
};
