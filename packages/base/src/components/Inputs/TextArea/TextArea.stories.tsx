import type { Meta, Story } from '@storybook/react';

import TextArea from './TextArea';
import type { TextAreaProps } from './TextArea.types';

export default {
  title: 'COMPONENTS/Inputs/TextArea',
  component: TextArea,
} as Meta;

const PlaygroundComponent: Story<TextAreaProps> = (args) => {
  return <TextArea placeholder={'TextArea에요'} {...args} />;
};
export const Playground = PlaygroundComponent.bind({
  height: 1000,
});

const MaxlengthComponent: Story<TextAreaProps> = (args) => {
  return <TextArea maxLength={10} placeholder={'TextArea에요'} {...args} />;
};

export const Maxlength = MaxlengthComponent.bind({});

const DisabledComponent: Story<TextAreaProps> = (args) => {
  return <TextArea maxLength={999} placeholder={'TextArea에요'} disabled {...args} />;
};
export const Disabled = DisabledComponent.bind({});
