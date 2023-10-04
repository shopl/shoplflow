import Toggle from './Toggle';
import type { StoryFn } from '@storybook/react';
import type { ToggleSwitchProps } from './Toggle.types';

export default {
  title: 'COMPONENTS/Toggle',
  component: Toggle,
};

export const Default: StoryFn<ToggleSwitchProps> = (args) => <Toggle {...args} />;
