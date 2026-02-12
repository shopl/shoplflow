import React, { useRef, useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import TextArea from './TextArea';
import type { TextAreaProps } from './TextArea.types';
import { Stack } from '../../Stack';
import { Button } from '../../Buttons';
import { ComponentStage } from '../../../styles/Box';
import { Text } from '../../Text';

const meta = {
  title: 'COMPONENTS/Inputs/TextArea',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    maxLength: 999,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-4435&m=dev',
    },
  },
  render: (args) => (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <TextArea placeholder={'TextArea에요'} {...args} />
      </ComponentStage>
    </Stack>
  ),
};

export const Error: Story = {
  args: {
    maxLength: 999,
    isError: true,
  },
  render: (args) => (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <TextArea placeholder={'TextArea에요'} {...args} />
      </ComponentStage>
    </Stack>
  ),
};

export const CheckValue: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Stack width={'500px'} spacing={'spacing12'}>
      <ComponentStage>
        <TextArea ref={textAreaRef} placeholder={'TextArea에요'} {...args} />
      </ComponentStage>

      <Stack.Horizontal align={'center'} spacing={'spacing12'}>
        <Button
          styleVar={'PRIMARY'}
          onClick={() => {
            setValue(textAreaRef.current?.value || '');
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
};

export const WithCustomToolbar: Story = {
  args: {
    leftSource: <TextArea.MaxLength />,
    rightSource: (
      <Stack.Horizontal spacing={'spacing04'}>
        <Button styleVar={'SECONDARY'} sizeVar='S'>
          취소
        </Button>
        <Button sizeVar='S'>확인</Button>
      </Stack.Horizontal>
    ),
  },
  render: (args) => (
    <Stack.Horizontal width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <TextArea maxLength={100} placeholder={'Toolbar를 커스텀한 TextArea에요'} {...args} />
      </ComponentStage>
    </Stack.Horizontal>
  ),
};
