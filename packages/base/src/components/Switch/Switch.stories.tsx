import Switch from './Switch';
import type { StoryFn } from '@storybook/react';
import type { SwitchProps } from './Switch.types';
import { ComponentStage } from '../../styles/Box';
import { Stack } from '../Stack';

export default {
  title: 'COMPONENTS/Switch',
  component: Switch,
};

export const Playground: StoryFn<SwitchProps> = (args) => (
  <Stack width={'100px'} align={'center'}>
    <ComponentStage>
      <Switch {...args} />
    </ComponentStage>
  </Stack>
);

export const SmallSize: StoryFn<SwitchProps> = (args) => (
  <Stack width={'100px'} align={'center'}>
    <ComponentStage>
      <Switch {...args} />
    </ComponentStage>
  </Stack>
);

SmallSize.args = {
  sizeVar: 'S',
  activeColor: 'neutral600',
};
