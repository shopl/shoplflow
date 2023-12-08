import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { Text } from '../Text';
import Menu from './Menu';
import type { MenuProps } from './Menu.types';
import { ComponentStage } from '../../styles/Box';
import { useSelect } from '@shoplflow/utils';
import { Checkbox } from '../ControlButtons';
import { JSONViewer } from '../../styles/JSONViewer';

export default {
  title: 'COMPONENTS/Menu',
  component: Menu,
};

export const Playground: StoryFn<MenuProps> = (args) => {
  const newArray: Array<{ name: string }> = new Array(10).fill(0).map((item, index) => {
    return {
      name: '메뉴' + index,
      other: '다른 데이터' + index,
    };
  });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'name',
  });
  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            return (
              <Menu {...args} onClick={() => handleToggleSelect(item.name)} key={index}>
                {item.name}
              </Menu>
            );
          })}
        </Stack>
      </ComponentStage>

      <Stack.Vertical width={'400px'} height={'100%'} justify={'start'} align={'start'} spacing={'spacing12'}>
        <ComponentStage align={'start'} justify={'start'}>
          <Stack height={'24px'}>
            <Text typography={'body1_700'}>선택된 데이터</Text>
          </Stack>
          <JSONViewer items={selectedItem} />
        </ComponentStage>
      </Stack.Vertical>
    </Stack.Horizontal>
  );
};

Playground.args = {
  disabled: false,
};

export const WithControls: StoryFn<MenuProps> = (args) => {
  const newArray: Array<{ name: string }> = new Array(10).fill(0).map((item, index) => {
    return {
      name: '메뉴' + index,
    };
  });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'name',
  });
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            return (
              <Menu
                {...args}
                key={index}
                onClick={() => handleToggleSelect(item.name)}
                leftSource={<Stack width={'24px'} height={'24px'} background={'red200'} />}
              >
                {item.name}
              </Menu>
            );
          })}
        </Stack>
      </ComponentStage>
      <Stack.Horizontal>
        {selectedItem.map((item, index) => {
          return <Text key={index}>{item.name}</Text>;
        })}
      </Stack.Horizontal>
    </Stack>
  );
};

WithControls.args = {
  disabled: false,
};
export const WithCheckbox: StoryFn<MenuProps> = (args) => {
  const newArray: Array<{ name: string }> = new Array(10).fill(0).map((item, index) => {
    return {
      name: '메뉴' + index,
    };
  });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'name',
  });
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            const isSelected = selectedItem.some((selectedItem) => selectedItem.name === item.name);
            return (
              <Menu
                {...args}
                isSelected={isSelected}
                key={index}
                onClick={() => handleToggleSelect(item.name)}
                leftSource={<Checkbox />}
              >
                {item.name}
              </Menu>
            );
          })}
        </Stack>
      </ComponentStage>
      <Stack.Horizontal>
        {selectedItem.map((item, index) => {
          return <Text key={index}>{item.name}</Text>;
        })}
      </Stack.Horizontal>
    </Stack>
  );
};

WithCheckbox.args = {
  disabled: false,
};
