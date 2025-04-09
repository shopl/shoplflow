import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';
import styled from '@emotion/styled';
import type { SliderProps } from './Slider.types';

const SliderWrapper = styled.div`
  width: 500px;
`;

const SliderWithWrapper = (args: SliderProps) => (
  <SliderWrapper>
    <Slider {...args} />
  </SliderWrapper>
);

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  render: (args) => <SliderWithWrapper {...args} />,
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Playground: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    defaultRange: { min: 50, max: 60 },
  },
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/Shopl-Flow?node-id=10307-8824&t=y5QSgaOzvSLIARJa-0',
  },
};
