import type { StoryFn } from '@storybook/react';
import Example from './Example';
import type { ExampleProps } from './Example.types';
import { Stack } from '@shoplflow/base';

export default {
  title: 'TEMPLATES/Example',
  component: Example,
};

export const Playground: StoryFn<ExampleProps> = (args) => {
  return (
    <Stack.Horizontal>
      <Example {...args} />
    </Stack.Horizontal>
  );
};

Playground.args = {
  text: '예제입니다~',
};
