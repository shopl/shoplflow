import type { StoryFn } from '@storybook/react';
import MinusButton from './MinusButton';
import type { MinusBoxProps } from './MinusButton.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';

export default {
  title: 'COMPONENTS/ControlButtons/MinusButton',
  component: MinusButton,
  argTypes: { onChange: { action: 'clicked' } },
};

export const Playground: StoryFn<MinusBoxProps> = (args) => (
  <Stack width={'100px'}>
    <ComponentStage>
      <MinusButton {...args} />
    </ComponentStage>
  </Stack>
);
