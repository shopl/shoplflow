import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import Title from './Title';
import { Button } from '../Buttons';
import type { TitleProps } from './Title.types';
import { StackContainer } from '../StackContainer';
import { Checkbox } from '../ControlButtons';

export default {
  title: 'Components/Title',
  component: Title,
} as Meta;

const Template: StoryFn<TitleProps> = (args) => (
  <StackContainer width={'400px'}>
    <Title {...args} />
  </StackContainer>
);

export const Playground: StoryFn<TitleProps> = (args) => {
  return (
    <StackContainer width={'400px'}>
      <Title {...args} />
    </StackContainer>
  );
};
Playground.args = {
  title: '기본 타이틀',
  description: '설명',
  rightSource: <Checkbox />,
};

export const Default: StoryFn<TitleProps> = Template.bind({});
Default.args = {
  title: '기본 타이틀',
  description: '설명',
};

export const RequiredIndicator: StoryFn<TitleProps> = Template.bind({});
RequiredIndicator.args = {
  title: '필수영역입니다.',
  isRequired: true,
};

export const WithHelpIcon: StoryFn<TitleProps> = Template.bind({});
WithHelpIcon.args = {
  title: '도움말 예시',
  isShowHelpIcon: true,
  tooltipMessage: '툴팁 메세지입니다.',
};

export const WithButton: StoryFn<TitleProps> = Template.bind({});
WithButton.args = {
  title: '추가영역 예시입니다.',
  isShowHelpIcon: true,
  tooltipMessage: '버튼외에 다른 아이콘들도 넣을 수 있어요.',
  tooltipPlacement: 'right',
  tooltipOffsetValue: 10,
  rightSource: <Button onClick={() => alert('Icon clicked!')} />,
};
