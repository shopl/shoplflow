import type { Meta, StoryObj } from '@storybook/react-vite';
import Slider from './Slider';
import styled from '@emotion/styled';
import type { SliderProps } from './Slider.types';
import { colorTokens } from '../../styles';
import { useState } from 'react';
import { Input } from '../Inputs';
import { Text } from '../Text';
import { StackContainer } from '../StackContainer';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

const SliderWrapper = styled.div`
  width: 500px;
`;

const SliderWithWrapper = (args: SliderProps) => {
  const [currentRange, setCurrentRange] = useState(args.range);

  return (
    <SliderWrapper>
      <Slider
        {...args}
        range={currentRange}
        handleRange={(range) => {
          setCurrentRange(range);
          args.handleRange?.(range);
        }}
      />
      <StackContainer.Horizontal justify='center' align='center' spacing='spacing06' padding={'16px'}>
        <Text>Min : </Text>
        <Input sizeVar='S' readOnly value={currentRange?.min} width='50px' />
        <Text> Max : </Text>
        <Input sizeVar='S' readOnly value={currentRange?.max} width='50px' />
      </StackContainer.Horizontal>
    </SliderWrapper>
  );
};

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Slider 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
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
    range: {
      control: 'object',
      description: '선택 범위',
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
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    min: 0,
    max: 100,
    step: 1,
    range: { min: 20, max: 60 },
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
