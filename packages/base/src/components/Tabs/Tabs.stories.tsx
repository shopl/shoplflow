import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Tabs from './Tabs';
import type { TabsProps } from './Tabs.types';
import { ComponentStage } from '../../styles/Box';
import { Icon } from '../Icon';
import { InfoAlbumIcon } from '@shoplflow/shopl-assets';
import { colorTokens } from '../../styles';

export default {
  title: 'COMPONENTS/Tabs',
  component: Tabs,
};

export const Playground: StoryFn<TabsProps> = (args) => {
  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Tabs initialTab='value1' {...args}>
          <Stack.Horizontal spacing='spacing24' width='100%'>
            <Tabs.Trigger value={'value1'} label={'label1'} />
            <Tabs.Trigger value={'value2'} label={'label2'} />
            <Tabs.Trigger value={'value3'} label={'label3'} />
          </Stack.Horizontal>
          <Tabs.Panel value={'value1'}>value1</Tabs.Panel>
          <Tabs.Panel value={'value2'}>value2</Tabs.Panel>
          <Tabs.Panel value={'value3'}>value3</Tabs.Panel>
        </Tabs>
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  initialTab: 'value1',
  level: 'level1',
};

export const Level2: StoryFn<TabsProps> = (args) => {
  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Tabs initialTab='value1' {...args}>
          <Stack.Horizontal spacing='spacing24' width='100%'>
            <Tabs.Trigger value={'value1'} label={'label1'} />
            <Tabs.Trigger value={'value2'} label={'label2'} />
            <Tabs.Trigger value={'value3'} label={'label3'} />
          </Stack.Horizontal>
          <Tabs.Panel value={'value1'}>value1</Tabs.Panel>
          <Tabs.Panel value={'value2'}>value2</Tabs.Panel>
          <Tabs.Panel value={'value3'}>value3</Tabs.Panel>
        </Tabs>
      </ComponentStage>
    </Stack>
  );
};

Level2.args = {
  initialTab: 'value1',
  level: 'level2',
};

export const Level3: StoryFn<TabsProps> = (args) => {
  const [outerTab, setOuterTab] = useState('');

  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <div>active tab: {outerTab}</div>
        <Tabs
          initialTab='value1'
          {...args}
          onChangeTab={(tab) => {
            setOuterTab(tab);
          }}
        >
          <Stack.Horizontal spacing='spacing24' width='100%'>
            <Tabs.Trigger
              value={'value1'}
              label={'label1'}
              leftSource={<Icon iconSource={InfoAlbumIcon} sizeVar='S' />}
              rightSource={
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '100%',
                    backgroundColor: colorTokens.primary300,
                  }}
                />
              }
            />
            <Tabs.Trigger value={'value2'} label={'label2'} />
            <Tabs.Trigger value={'value3'} label={'label3'} />
          </Stack.Horizontal>
          <Tabs.Panel value={'value1'}>value1</Tabs.Panel>
          <Tabs.Panel value={'value2'}>value2</Tabs.Panel>
          <Tabs.Panel value={'value3'}>value3</Tabs.Panel>
        </Tabs>
      </ComponentStage>
    </Stack>
  );
};

Level3.args = {
  initialTab: 'value1',
  level: 'level3',
};
