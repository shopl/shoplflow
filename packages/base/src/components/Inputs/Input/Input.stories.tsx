import type { Meta, StoryFn } from '@storybook/react';
import { useRef, useState } from 'react';

import Input from './Input';
import { InputSizeVariants, type InputProps } from './Input.types';
import { Stack } from '../../Stack';
import { Button } from '../../Buttons';
import { ComponentStage } from '../../../styles/Box';
import { Text } from '../../Text';
import { Tag } from '../../Tag';

const meta: Meta<typeof Input> = {
  title: 'COMPONENTS/Inputs/Input',
  component: Input,
  argTypes: {
    sizeVar: {
      options: Object.values(InputSizeVariants),
      control: { type: 'radio' },
      description: '인풋의 사이즈를 설정합니다.',
      defaultValue: 'M',
    },
    type: {
      options: ['text', 'password', 'number', 'email', 'tel', 'url'],
      control: { type: 'select' },
      description: '인풋의 타입을 설정합니다.',
      defaultValue: 'text',
    },
    placeholder: {
      control: { type: 'text' },
      description: '인풋의 플레이스홀더를 설정합니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '인풋의 비활성화 여부를 설정합니다.',
      defaultValue: false,
    },
    isError: {
      control: { type: 'boolean' },
      description: '인풋의 에러 상태 여부를 설정합니다.',
      defaultValue: false,
    },
    maxLength: {
      control: { type: 'number' },
      description: '인풋의 최대 입력 길이를 설정합니다.',
    },
    min: {
      control: { type: 'number' },
      description: '숫자 타입일 때 최소값을 설정합니다.',
    },
    max: {
      control: { type: 'number' },
      description: '숫자 타입일 때 최대값을 설정합니다.',
    },
    width: {
      control: { type: 'text' },
      description: '인풋의 너비를 설정합니다.',
    },
    onClear: {
      action: 'cleared',
      description: '클리어 버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
    },
    onChange: {
      action: 'changed',
      description: '인풋 값이 변경될 때 실행되는 동작을 설정합니다.',
    },
    onFocus: {
      action: 'focused',
      description: '인풋이 포커스될 때 실행되는 동작을 설정합니다.',
    },
    onBlur: {
      action: 'blurred',
      description: '인풋이 블러될 때 실행되는 동작을 설정합니다.',
    },
  },
};

export default meta;

export const Playground: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input ref={inputRef} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  sizeVar: 'M',
  type: 'text',
  placeholder: '입력해주세요',
  disabled: false,
  isError: false,
  maxLength: 200,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/Shopl-Flow?node-id=13640-7295&m=dev',
  },
};

export const Password: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input ref={inputRef} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Password.args = {
  sizeVar: 'M',
  type: 'password',
  placeholder: '비밀번호를 입력해주세요',
  disabled: false,
};
export const Number: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input ref={inputRef} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Number.args = {
  sizeVar: 'M',
  type: 'number',
  placeholder: '10부터 100까지 입력 가능합니다',
  min: 10,
  max: 100,
  disabled: false,
};

export const Error: StoryFn<InputProps> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input ref={inputRef} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Error.args = {
  sizeVar: 'M',
  type: 'text',
  placeholder: '에러 상태입니다',
  isError: true,
  disabled: false,
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
  sizeVar: 'M',
  type: 'text',
  placeholder: '버튼을 눌러서 입력값을 확인해보세요',
  disabled: false,
};

export const WithClearButton: StoryFn<InputProps & { textAlign?: 'left' | 'center' | 'right' }> = (args) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { textAlign, ...inputProps } = args;

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input ref={inputRef} {...inputProps} style={textAlign ? { textAlign } : inputProps.style} />
      </ComponentStage>
    </Stack>
  );
};

WithClearButton.args = {
  sizeVar: 'M',
  type: 'text',
  placeholder: '텍스트를 입력하면 클리어 버튼이 나타납니다',
  disabled: false,
  isError: false,
  maxLength: 50,
  textAlign: 'right',
  onClear: () => {
    console.debug('clear');
  },
};

WithClearButton.argTypes = {
  maxLength: {
    control: { type: 'number' },
    description: '인풋의 최대 입력 길이를 설정합니다.',
  },
  textAlign: {
    options: ['left', 'center', 'right'],
    control: { type: 'select' },
    description: '인풋 텍스트의 정렬 방식을 설정합니다.',
  },
};

export const WithClearButtonAndRightSource: StoryFn<InputProps & { textAlign?: 'left' | 'center' | 'right' }> = (
  args,
) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { textAlign, ...inputProps } = args;

  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <Input
          ref={inputRef}
          {...inputProps}
          sizeVar={inputProps.sizeVar}
          rightSource={
            <Tag styleVar='TINT' sizeVar='XS' color='neutral300'>
              <Text typography='caption_400' color='neutral700'>
                KRW
              </Text>
            </Tag>
          }
          style={textAlign ? { textAlign } : inputProps.style}
        />
      </ComponentStage>
    </Stack>
  );
};

WithClearButtonAndRightSource.args = {
  sizeVar: 'S',
  type: 'text',
  placeholder: '텍스트를 입력하면 클리어 버튼이 나타납니다',
  disabled: false,
  isError: false,
  textAlign: 'right',
};

WithClearButtonAndRightSource.argTypes = {
  maxLength: {
    control: { type: 'number' },
    description: '인풋의 최대 입력 길이를 설정합니다.',
  },
  textAlign: {
    options: ['left', 'center', 'right'],
    control: { type: 'select' },
    description: '인풋 텍스트의 정렬 방식을 설정합니다.',
  },
};
