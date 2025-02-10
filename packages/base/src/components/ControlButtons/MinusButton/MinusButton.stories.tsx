import type { StoryFn } from '@storybook/react';
import MinusButton from './MinusButton';
import type { MinusBoxProps } from './MinusButton.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';

export default {
  title: 'COMPONENTS/ControlButtons/MinusButton',
  component: MinusButton,
  argTypes: {
    onClick: { action: 'clicked', description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.' },
    color: {
      description: '버튼의 배경색을 설정합니다.',
    },
  },
};

export const Playground: StoryFn<MinusBoxProps> = (args) => (
  <Stack>
    <ComponentStage>
      <MinusButton {...args} />
    </ComponentStage>
  </Stack>
);

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-3714',
  },
};
