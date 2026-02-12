import React from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import List from './List';
import type { ListProps } from './List.types';
import { ComponentStage } from '../../styles/Box';
import { Text } from '../Text';
import { Checkbox, Radio } from '../ControlButtons';
import { useSelect } from '@shoplflow/utils';
import { JSONScrollView } from '../../styles/JSONScrollView';

const meta = {
  title: 'COMPONENTS/List',
  component: List,
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: StoryFn<ListProps> = (args) => {
  const newArray: Array<{ title: string; subTitle: string; other: string }> = new Array(10)
    .fill(0)
    .map((item, index) => {
      return {
        title: '제목' + index,
        subTitle: '서브 타이틀' + index,
        other: '다른 데이터' + index,
      };
    });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'title',
  });

  return (
    <Stack.Horizontal width={'800px'} height={'500px'} spacing={'spacing32'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            const isSelected = selectedItem.some((selected) => selected.title === item.title);
            return (
              <List
                key={index}
                {...args}
                isSelected={isSelected}
                onClick={() => {
                  handleToggleSelect(item.title);
                }}
                leftSource={<Checkbox />}
                rightSource={<Text whiteSpace={'nowrap'}>{item.other}</Text>}
              >
                <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
                <List.Text2Rows title={item.title} subTitle={item.subTitle} />
              </List>
            );
          })}
        </Stack>
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
  disabled: false,
};

export const With2Rows: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Stack width={'500px'}>
      <ComponentStage>
        <List {...args} rightSource={<Text whiteSpace={'nowrap'}>서브 데이터</Text>}>
          <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
          <List.Text2Rows title={'타이틀'} subTitle={'서브 타이틀'} />
        </List>
      </ComponentStage>
    </Stack>
  ),
};

export const WithAllSource: Story = {
  args: {
    disabled: false,
  },
  render: (args) => (
    <Stack width={'500px'}>
      <ComponentStage>
        <List {...args} leftSource={<Checkbox />} rightSource={<Text whiteSpace={'nowrap'}>서브 데이터</Text>}>
          <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
          <List.Text2Rows title={'타이틀'} subTitle={'서브 타이틀'} />
        </List>
        <List {...args} leftSource={<Radio />} rightSource={<Text whiteSpace={'nowrap'}>서브 데이터</Text>}>
          <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
          <List.Text2Rows title={'타이틀'} subTitle={'서브 타이틀'} />
        </List>
      </ComponentStage>
    </Stack>
  ),
};
