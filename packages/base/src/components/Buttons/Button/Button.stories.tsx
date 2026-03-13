import React from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import { ButtonSizeVariants, ButtonStyleVariants } from './Button.types';
import { colorTokens } from '../../../styles';
import { Icon } from '../../../components/Icon';
import { EditIcon } from '@shoplflow/shopl-assets';

const FIGMA_URL = 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=13719-16537&m=dev';

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  args: {
    onClick: action('on-click'),
  },
  argTypes: {
    styleVar: {
      control: { type: 'select' },
      options: Object.values(ButtonStyleVariants),
      description: '버튼의 스타일을 설정합니다. SOLID를 선택할 경우 color 속성도 지정해주셔야 합니다.',
      table: { type: { summary: Object.values(ButtonStyleVariants).join(' | ') } },
    },
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(ButtonSizeVariants),
      description: '버튼의 사이즈를 선택합니다.',
      table: { type: { summary: Object.values(ButtonSizeVariants).join(' | ') } },
    },
    color: {
      control: { type: 'select' },
      options: Object.keys(colorTokens),
      description: 'styleVar가 SOLID일 때의 버튼의 배경 색상을 선택합니다.',
      table: { type: { summary: 'colorTokens' } },
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Spinner가 노출되는 로딩 상태 여부를 설정합니다.',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼의 비활성화 여부를 설정합니다.',
    },
    lineClamp: {
      control: { type: 'number' },
      description: '버튼 내부의 콘텐츠를 지정한 줄 수만큼 제한합니다.',
    },
    as: {
      description: '컴포넌트의 HTML 요소를 변경할 수 있습니다. (기본값: button)',
    },
    children: {
      control: { type: 'text' },
      description:
        '버튼 내부에 들어가는 요소로, 기본적으로 `string` 타입을 지원하나 필요에 따라 `React.ReactNode` 타입의 요소를 자유롭게 넣을 수 있습니다.',
    },
    leftSource: {
      description: '버튼 좌측에 렌더링할 ReactElement입니다.',
    },
    rightSource: {
      description: '버튼 우측에 렌더링할 ReactElement입니다.',
    },
  },
};

export default meta;

type PlaygroundArgs = ButtonProps & {
  showLeftSource?: boolean;
  showRightSource?: boolean;
};

export const Playground: StoryFn<PlaygroundArgs> = (args) => {
  const { showLeftSource, showRightSource, ...componentProps } = args;
  const ICON_AREA_SIZE = componentProps.sizeVar === 'M' ? 20 : 12;
  const resolvedColor =
    componentProps.styleVar === 'SOLID' ? (componentProps.color ?? 'coolgray100') : componentProps.color;

  return (
    <Button
      {...componentProps}
      color={resolvedColor}
      leftSource={
        showLeftSource ? (
          <div style={{ width: ICON_AREA_SIZE, height: ICON_AREA_SIZE, backgroundColor: '#FFEFEF' }} />
        ) : undefined
      }
      rightSource={
        showRightSource ? (
          <div style={{ width: ICON_AREA_SIZE, height: ICON_AREA_SIZE, backgroundColor: '#FFEFEF' }} />
        ) : undefined
      }
    />
  );
};

Playground.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: 'Button',
  disabled: false,
  isLoading: false,
  showLeftSource: false,
  showRightSource: false,
};

Playground.argTypes = {
  children: {
    control: { type: 'text' },
  },
  showLeftSource: {
    control: { type: 'boolean' },
    description: 'Playground 전용: leftSource(ReactElement) 표시 여부를 토글합니다. 실제 prop은 leftSource입니다.',
    table: { category: 'Playground (데모 전용)' },
  },
  showRightSource: {
    control: { type: 'boolean' },
    description: 'Playground 전용: rightSource(ReactElement) 표시 여부를 토글합니다. 실제 prop은 rightSource입니다.',
    table: { category: 'Playground (데모 전용)' },
  },
};

Playground.parameters = {
  controls: {
    include: [
      'children',
      'styleVar',
      'sizeVar',
      'color',
      'disabled',
      'isLoading',
      'lineClamp',
      'showLeftSource',
      'showRightSource',
    ],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Loading: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Loading.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: 'Loading',
  isLoading: true,
  disabled: false,
};

Loading.parameters = {
  controls: {
    include: ['styleVar', 'sizeVar'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Disabled: StoryFn<ButtonProps> = (args) => <Button {...args} />;

Disabled.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: 'Disabled',
  disabled: true,
};

Disabled.parameters = {
  controls: {
    include: ['styleVar', 'sizeVar'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const WithIcon: StoryFn<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: 'Button',
  leftSource: <Icon iconSource={EditIcon} sizeVar='S' color='neutral0' />,
};

WithIcon.parameters = {
  controls: {
    include: ['styleVar', 'sizeVar', 'color'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
