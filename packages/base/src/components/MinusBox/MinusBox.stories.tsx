import type { Meta, StoryFn } from '@storybook/react';
import MinusButton from './MinusBox';
import type { MinusBoxProps } from './MinusBox.types';

export default {
  title: 'COMPONENTS/MinusButton',
  component: MinusButton,
} as Meta;

export const Default: StoryFn<MinusBoxProps> = (args) => <MinusButton {...args} />;
