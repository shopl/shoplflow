import React from 'react';

import type { StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import InputButton from './InputButton';
import type { InputButtonProps } from './InputButton.types';
import { Button, IconButton } from '../../Buttons';
import { Text } from '../../Text';
import { ComponentStage } from '../../../styles/Box';
import { Icon } from '../../Icon';
import { CalendarIcon } from '@shoplflow/hada-assets';

export default {
  title: 'COMPONENTS/Inputs/InputButton',
  component: InputButton,
  argTypes: { onClick: { action: 'clicked' }, onChange: { action: 'changed' } },
};

export const Playground: StoryFn<InputButtonProps> = (args) => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const [useClear, setUseClear] = React.useState(true);
  const valueArray = ['감자', '왕감자', '고구마', '호박고구마', '감자튀김'];
  return (
    <Stack width={'400px'} height={'400px'} spacing={'spacing12'}>
      <ComponentStage>
        <InputButton
          useClear={useClear}
          value={value}
          defaultValue={'기본값'}
          {...args}
          onChange={(value) => setValue(value)}
        />
      </ComponentStage>
      <Text>아래 버튼을 눌러 값을 할당해주세요.</Text>
      <Stack.Horizontal width={'100%'} justify={'space-between'}>
        {valueArray.map((data) => (
          <Button key={data} sizeVar={'S'} onClick={() => setValue(String(data))}>
            {data}
          </Button>
        ))}
      </Stack.Horizontal>
      <Stack.Horizontal width={'100%'} spacing='spacing08'>
        <Button styleVar='SECONDARY' sizeVar={'S'} onClick={() => setUseClear(true)}>
          Clear 사용
        </Button>
        <Button styleVar='SECONDARY' sizeVar={'S'} onClick={() => setUseClear(false)}>
          Clear 미사용
        </Button>
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

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=2566-9420&m=dev',
  },
};
