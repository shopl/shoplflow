import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import SplitButton from './SplitButton';
import type { SplitButtonProps } from './SplitButton.types';
import { Text } from '../../../components/Text';
import { useState } from 'react';
import { colorTokens } from '../../../styles';

export default {
  title: 'COMPONENTS/Buttons/SplitButton',
  component: SplitButton,
};

export const Playground: StoryFn<SplitButtonProps> = (args) => {
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

Playground.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  leftSource: <div style={{ width: '20px', height: '20px', backgroundColor: colorTokens.red100 }} />,
  text: 'Button',
};

export const Secondary: StoryFn<SplitButtonProps> = (args) => {
  const [selectedItem, setSelectedItem] = useState<'Shopl' | 'Hada'>('Shopl');

  return (
    <Stack>
      <SplitButton
        {...args}
        text={'Button'}
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

export const Disabled: StoryFn<SplitButtonProps> = (args) => {
  return <SplitButton {...args} text={'Button'} />;
};

Disabled.args = {
  disabled: true,
};
