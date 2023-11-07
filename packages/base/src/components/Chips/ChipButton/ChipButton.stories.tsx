import ChipButton from './ChipButton';
import { Stack } from '../../Stack';
import type { StoryFn } from '@storybook/react';
import type { ChipButtonProps } from './ChipButton.types';
import { ComponentStage } from '../../../styles/Box';

export default {
  title: 'COMPONENTS/Chips/ChipButton',
  component: ChipButton,
  argTypes: { onClick: { action: 'clicked' } },
};

export const Playground: StoryFn<ChipButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <ChipButton {...args} />
      </ComponentStage>
    </Stack>
  );
};
Playground.args = {
  text: '샤플플로우',
  disabled: false,
  styleVar: 'LINE',
  sizeVar: 'S',
};
