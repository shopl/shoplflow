import Switch from './Switch';
import type { StoryFn } from '@storybook/react';
import type { SwitchProps } from './Switch.types';

export default {
  title: 'COMPONENTS/Switch',
  component: Switch,
};

export const Playground: StoryFn<SwitchProps> = (args) => <Switch {...args} />;
