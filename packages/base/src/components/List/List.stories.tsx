import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import List from './List';
import type { ListProps } from './List.types';
import { ComponentStage } from '../../styles/Box';
import { Text } from '../Text';

export default {
  title: 'COMPONENTS/List',
  component: List,
};

export const Playground: StoryFn<ListProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <List {...args} rightSource={<Text whiteSpace={'nowrap'}>서브 데이터</Text>}>
          <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
          <List.Text2Rows title={'타이틀임'} />
        </List>
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  disabled: false,
};

export const With2Rows: StoryFn<ListProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <List {...args} rightSource={<Text whiteSpace={'nowrap'}>서브 데이터</Text>}>
          <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
          <List.Text2Rows title={'타이틀임'} subTitle={'섭타이틀'} />
        </List>
      </ComponentStage>
    </Stack>
  );
};
With2Rows.args = {
  disabled: false,
};
