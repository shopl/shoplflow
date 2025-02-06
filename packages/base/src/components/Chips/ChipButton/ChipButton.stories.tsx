import ChipButton from './ChipButton';
import { Stack } from '../../Stack';
import type { StoryFn } from '@storybook/react';
import { ChipButtonSizeVariants, ChipButtonStyleVariants, type ChipButtonProps } from './ChipButton.types';
import { ComponentStage } from '../../../styles/Box';

export default {
  title: 'COMPONENTS/Chips/ChipButton',
  component: ChipButton,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
      description: 'border 기준 4단계 높은 색상',
      defaultValue: 'ChipButton',
    },
    onClick: { action: 'clicked' },
    styleVar: {
      control: {
        type: 'select',
      },
      options: Object.values(ChipButtonStyleVariants),
      description: 'ChipButton의 스타일을 설정합니다. styleVar에 따라 기준 속성이 변경됩니다',
      defaultValue: ChipButtonStyleVariants.LINE,
    },
    sizeVar: {
      control: {
        type: 'select',
      },
      options: Object.values(ChipButtonSizeVariants),
      description: 'ChipButton의 사이즈를 설정합니다.',
      defaultValue: ChipButtonSizeVariants.S,
    },
  },
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

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-5279&p=f&m=dev',
  },
};
