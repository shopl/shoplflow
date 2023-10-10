import type { StoryFn } from '@storybook/react';

import TextArea from './TextArea';
import type { TextAreaProps } from './TextArea.types';

export default {
  title: 'COMPONENTS/Inputs/TextArea',
  component: TextArea,
};

const PlaygroundComponent: StoryFn<TextAreaProps> = (args) => {
  return <TextArea placeholder={'TextArea에요'} {...args} />;
};
export const Playground = PlaygroundComponent.bind({
  height: 1000,
});

const MaxlengthComponent: StoryFn<TextAreaProps> = (args) => {
  return <TextArea maxLength={10} placeholder={'TextArea에요'} {...args} />;
};

export const Maxlength = MaxlengthComponent.bind({});

const DisabledComponent: StoryFn<TextAreaProps> = (args) => {
  return <TextArea maxLength={999} placeholder={'TextArea에요'} disabled {...args} />;
};
export const Disabled = DisabledComponent.bind({});
