import type { StoryFn } from '@storybook/react';
import MinusButton from './MinusButton';
import type { MinusBoxProps } from './MinusButton.types';

export default {
  title: 'COMPONENTS/MinusButton',
  component: MinusButton,
};

export const Default: StoryFn<MinusBoxProps> = (args) => <MinusButton {...args} />;
