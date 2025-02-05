import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import SplitButton from './SplitButton';
import { SplitButtonSizeVariants, SplitButtonStyleVariants, type SplitButtonProps } from './SplitButton.types';
import { Text } from '../../../components/Text';
import { useState } from 'react';
import { colorTokens } from '../../../styles';

export default {
  title: 'COMPONENTS/Buttons/SplitButton',
  component: SplitButton,
  argTypes: {
    text: {
      description: '버튼 내부에 들어갈 text를 입력합니다.',
    },
    styleVar: {
      options: Object.values(SplitButtonStyleVariants),
      control: { type: 'select' },
      description: '버튼의 스타일을 설정합니다.',
    },
    sizeVar: {
      options: Object.values(SplitButtonSizeVariants),
      control: { type: 'select' },
      description: '버튼의 사이즈를 선택합니다.',
    },
    disabled: {
      description: '버튼의 비활성화 여부를 설정합니다.',
      control: {
        type: 'boolean',
      },
    },
    placement: {
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      description: 'option list가 노출되는 방향을 설정합니다.',
    },
    floatingZIndex: {
      description: 'option list의 z-index값을 설정합니다.',
      control: {
        type: 'number',
      },
    },
    lineClamp: {
      description: '버튼 내부의 콘텐츠를 지정한 줄 수만큼 제한합니다.',
      control: { type: 'number' },
    },
  },
};

export const Playground: StoryFn<SplitButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <SplitButton {...args}>
        <SplitButton.Menu
          isSelected={selectedItem === 'Shopl'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Shopl');
          }}
        >
          <Text>Shopl (그룹명이 좀 길어요 이럴땐 어떻게 보이려나요)</Text>
        </SplitButton.Menu>
        <SplitButton.Menu
          isSelected={selectedItem === 'Hada'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Hada');
          }}
        >
          <Text>Hada</Text>
        </SplitButton.Menu>
      </SplitButton>
    </Stack>
  );
};

Playground.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  leftSource: <div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />,
  text: 'Button',
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=8717-4817',
  },
};

export const Primary: StoryFn<SplitButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <SplitButton {...args}>
        <SplitButton.Menu
          isSelected={selectedItem === 'Shopl'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Shopl');
          }}
        >
          <Text>Shopl (그룹명이 좀 길어요 이럴땐 어떻게 보이려나요)</Text>
        </SplitButton.Menu>
        <SplitButton.Menu
          isSelected={selectedItem === 'Hada'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Hada');
          }}
        >
          <Text>Hada</Text>
        </SplitButton.Menu>
      </SplitButton>
    </Stack>
  );
};

Primary.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  leftSource: <div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />,
  text: 'Primary Button',
};

export const Secondary: StoryFn<SplitButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <SplitButton
        {...args}
        styleVar='SECONDARY'
        leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
      >
        <SplitButton.Menu
          isSelected={selectedItem === 'Shopl'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Shopl');
          }}
        >
          <Text>Shopl (그룹명이 좀 길어요 이럴땐 어떻게 보이려나요)</Text>
        </SplitButton.Menu>
        <SplitButton.Menu
          isSelected={selectedItem === 'Hada'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Hada');
          }}
        >
          <Text>Hada</Text>
        </SplitButton.Menu>
      </SplitButton>
    </Stack>
  );
};
Secondary.args = {
  styleVar: 'SECONDARY',
  sizeVar: 'M',
  text: 'Secondary Button',
};

export const WithLeftAndRightSource: StoryFn<SplitButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');
  return (
    <Stack>
      <SplitButton {...args} text={'Button'}>
        <SplitButton.Menu
          isSelected={selectedItem === 'Shopl'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Shopl');
          }}
        >
          <Text>Shopl (그룹명이 좀 길어요 이럴땐 어떻게 보이려나요)</Text>
        </SplitButton.Menu>
        <SplitButton.Menu
          isSelected={selectedItem === 'Hada'}
          leftSource={<div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />}
          onClick={() => {
            setSelectedItem('Hada');
          }}
        >
          <Text>Hada</Text>
        </SplitButton.Menu>
      </SplitButton>
    </Stack>
  );
};

WithLeftAndRightSource.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  leftSource: <div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />,
  rightSource: <div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />,
};
