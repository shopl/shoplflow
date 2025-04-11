import type { Meta, StoryObj } from '@storybook/react';
import Slider from './Slider';
import styled from '@emotion/styled';
import type { SliderProps } from './Slider.types';
import { colorTokens } from '../../styles';

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
  argTypes: {
    min: {
      control: { type: 'number' },
      description: '선택 가능한 최소값',
      defaultValue: 0,
    },
    max: {
      control: { type: 'number' },
      description: '선택 가능한 최대값',
    },
    step: {
      control: { type: 'number' },
      description: '증분 단위',
      defaultValue: 1,
    },
    defaultRange: {
      control: 'object',
      description: '초기 선택 범위',
    },
    isDisabled: {
      control: 'boolean',
      description: '비활성화 여부',
      defaultValue: false,
    },
    selectedColor: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      description: '선택된 범위에 적용될 색상',
      defaultValue: 'shopl300',
    },
    handleRange: {
      description: '선택 범위가 변경될 때 실행할 함수',
    },
  },
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
    isDisabled: false,
    selectedColor: 'shopl300',
  },
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/Shopl-Flow?node-id=10307-8824&t=y5QSgaOzvSLIARJa-0',
  },
};
