import React from 'react';

import type { StoryFn } from '@storybook/react';
import Radio from './Radio';
import type { RadioProps } from './Radio.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../../components/Stack';

export default {
  title: 'COMPONENTS/ControlButtons/Radio',
  component: Radio,
  argTypes: {
    onClick: { action: 'clicked', description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.' },
  },
};

export const Playground: StoryFn<RadioProps> = (args) => {
  return (
    <Stack>
      <ComponentStage>
        <Radio {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  isSelected: false,
  defaultSelected: false,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-3714',
  },
};
