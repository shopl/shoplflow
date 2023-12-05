import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { Text } from '../Text';
import Menu from './Menu';
import type { MenuProps } from './Menu.types';
import { ComponentStage } from '../../styles/Box';
import { useSelect } from '@shoplflow/utils';

export default {
  title: 'COMPONENTS/Menu',
  component: Menu,
};

export const Playground: StoryFn<MenuProps> = (args) => {
  const newArray = new Array(10).fill({
    name: '메뉴',
  }) as Array<{ name: string }>;
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            return (
              <Menu {...args} key={index}>
                {item.name + index}
              </Menu>
            );
          })}
        </Stack>
      </ComponentStage>
    </Stack>
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
    max: 5,
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

Playground.args = {
  disabled: false,
};
