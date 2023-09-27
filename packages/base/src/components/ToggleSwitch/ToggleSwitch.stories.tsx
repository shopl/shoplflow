import ToggleSwitch from './ToggleSwitch';
import type { StoryFn } from '@storybook/react';
import type { ToggleSwitchProps } from './ToggleSwitch.types';

export default {
  title: 'COMPONENTS/ToggleSwitch',
  component: ToggleSwitch,
} ;

export const Default: StoryFn<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} />;
export const Active: StoryFn<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} isActive={true} />;
export const Disabled: StoryFn<ToggleSwitchProps> = (args) => <ToggleSwitch {...args} isDisabled={true} />;
