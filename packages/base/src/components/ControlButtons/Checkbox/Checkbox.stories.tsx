import React from 'react';

import type { StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import Checkbox from './Checkbox';
import { CheckboxStyleVariants, type CheckboxProps } from './Checkbox.types';
import { ComponentStage } from '../../../styles/Box';

export default {
  title: 'COMPONENTS/ControlButtons/Checkbox',
  component: Checkbox,
  argTypes: {
    styleVar: {
      options: Object.values(CheckboxStyleVariants),
      control: { type: 'select' },
      description: '버튼의 스타일을 설정합니다.',
      defaultValue: 'PRIMARY',
    },
    onClick: { action: 'clicked', description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.' },
  },
};

export const Playground: StoryFn<CheckboxProps> = (args) => {
  return (
    <Stack>
      <ComponentStage>
        <Checkbox {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  defaultSelected: false,
  styleVar: 'PRIMARY',
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-3714',
  },
};
