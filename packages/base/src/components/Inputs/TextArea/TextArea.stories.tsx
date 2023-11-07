import type { StoryFn } from '@storybook/react';

import TextArea from './TextArea';
import type { TextAreaProps } from './TextArea.types';
import { Stack } from '../../Stack';
import React, { useRef, useState } from 'react';
import { Button } from '../../Buttons';
import { ComponentStage } from '../../../styles/Box';
import { Text } from '../../Text';

export default {
  title: 'COMPONENTS/Inputs/TextArea',
  component: TextArea,
};

export const Playground: StoryFn<TextAreaProps> = (args) => {
  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <TextArea placeholder={'TextArea에요'} {...args} />
      </ComponentStage>
    </Stack>
  );
};
Playground.args = {
  maxLength: 999,
};

export const Error: StoryFn<TextAreaProps> = (args) => {
  return (
    <Stack width={'500px'} height={'300px'} justify={'center'}>
      <ComponentStage>
        <TextArea placeholder={'TextArea에요'} {...args} />
      </ComponentStage>
    </Stack>
  );
};

Error.args = {
  maxLength: 999,
  isError: true,
};

export const CheckValue: StoryFn<TextAreaProps> = (args) => {
  const [value, setValue] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Stack width={'600px'} spacing={'spacing12'}>
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
