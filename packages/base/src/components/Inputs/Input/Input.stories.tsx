import type { StoryFn } from '@storybook/react';
import { useRef, useState } from 'react';

import Input from './Input';
import type { InputProps } from './Input.types';
import { Stack } from '../../Stack';
import { Button } from '../../Buttons';
import { ComponentStage } from '../../../styles/Box';
import { Text } from '../../Text';

export default {
  title: 'COMPONENTS/Inputs/Input',
  component: Input,
};

export const Playground: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input maxLength={50} ref={inputRef} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  placeholder: 'input 예제에요.',
  disabled: false,
  onClear: () => {
    return;
  },
};
export const Password: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input maxLength={50} ref={inputRef} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Password.args = {
  type: 'password',
  placeholder: '타입이 password인 경우에요.',
  disabled: false,
  onClear: () => {
    return;
  },
};
export const CheckValue: StoryFn<InputProps> = (args) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'600px'} spacing={'spacing12'}>
      <ComponentStage>
        <Input maxLength={50} ref={inputRef} {...args} />
      </ComponentStage>

      <Stack.Horizontal align={'center'} spacing={'spacing12'}>
        <Button
          styleVar={'PRIMARY'}
          onClick={() => {
            setValue(inputRef.current?.value || '');
          }}
        >
          값 가져오기
        </Button>
        <Text>{value}</Text>
      </Stack.Horizontal>
    </Stack>
  );
};

CheckValue.args = {
  placeholder: '버튼을 눌렀을 때 input 값을 확인할 수 있어요.',
  disabled: false,
  onClear: () => {
    return;
  },
};

export const Error: StoryFn<InputProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Input maxLength={50} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Error.args = {
  disabled: false,
  isError: true,
  placeholder: '에러 상태에요.',
};
export const Number: StoryFn<InputProps> = (args) => {
  const [t, sT] = useState(false);
  return (
    <Stack width={'300px'} height={'300px'}>
      <button onClick={() => sT(!t)}>aaa</button>
      <ComponentStage>
        {t && <Input customNumberInputHeight='40px' borderRadius='borderRadius12' value={0} {...args} />}
      </ComponentStage>
    </Stack>
  );
};

Number.args = {
  disabled: false,
  type: 'number',
  min: 10,
  max: 21,
};
