import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown.types';
import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { ComponentStage } from '../../styles/Box';
import { useSelect } from '@shoplflow/utils';
import { Menu } from '../Menu';
import { Text } from '../Text';
import React from 'react';
import { JSONScrollView } from '../../styles/JSONScrollView';

export default {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
};

export const Playground: StoryFn<DropdownProps> = (args) => {
  const data = new Array(10).fill(0).map((_, index) => {
    return {
      label: `label${index}`,
      value: `value${index}`,
    };
  });

  const { selectedItem, handleToggleSelect } = useSelect('MULTI', data, {
    key: 'value',
    max: 3,
  });

  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage justify={'start'}>
        <Dropdown
          {...args}
          option={'OUTSIDE_CLICK'}
          width={'100%'}
          trigger={
            <Dropdown.Button placeholder={'값이 없어요'} value={selectedItem.map((data) => data.value).join(',')} />
          }
          popper={
            <Dropdown.Content type={'FILL'}>
              {data.map((item) => {
                const isSelected = selectedItem.some((selected) => selected.value === item.value);
                return (
                  <Menu key={item.value} isSelected={isSelected} onClick={() => handleToggleSelect(item.value)}>
                    {item.label}
                  </Menu>
                );
              })}
            </Dropdown.Content>
          }
        />
      </ComponentStage>
      <Stack.Vertical width={'400px'} height={'100%'} justify={'start'} align={'start'} spacing={'spacing12'}>
        <ComponentStage align={'start'} justify={'start'}>
          <Stack height={'24px'}>
            <Text typography={'body1_700'}>선택된 데이터</Text>
          </Stack>
          <JSONScrollView items={selectedItem} />
        </ComponentStage>
      </Stack.Vertical>
    </Stack.Horizontal>
  );
};

Playground.args = {
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
};
export const FillContent: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

FillContent.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};
export const Small: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Small.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'0'} sizeVar={'S'} />,
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};

export const Disabled: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Disabled.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button disabled placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};
