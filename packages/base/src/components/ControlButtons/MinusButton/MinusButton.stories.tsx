import type { StoryFn } from '@storybook/react';
import MinusButton from './MinusButton';
import type { MinusBoxProps } from './MinusButton.types';

export default {
  title: 'COMPONENTS/ControlButtons/MinusButton',
  component: MinusButton,
};

export const Playground: StoryFn<MinusBoxProps> = (args) => <MinusButton {...args} />;
