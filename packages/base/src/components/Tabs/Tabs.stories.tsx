import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Tabs from './Tabs';
import type { TabsProps } from './Tabs.types';
import { ComponentStage } from '../../styles/Box';
import { Icon } from '../Icon';
import { EditIcon } from '@shoplflow/shopl-assets';
import { colorTokens } from '../../styles';

const meta = {
  title: 'COMPONENTS/Tabs',
  component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;

export const Playground: StoryFn<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState('a');

  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <div>active tab: {activeTab}</div>
        <Tabs
          {...args}
          initialTab={activeTab}
          onChange={(tab) => {
            setActiveTab(tab);
          }}
        >
          <Stack.Horizontal width='100%'>
            <Tabs.Tab styleVar='NORMAL' activeColor='primary300' value={'a'} label={'label1'} />
            <Tabs.Tab styleVar='NORMAL' activeColor='primary300' value={'b'} label={'label2'} />
            <Tabs.Tab styleVar='NORMAL' activeColor='primary300' value={'c'} label={'label3'} />
          </Stack.Horizontal>
        </Tabs>
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  initialTab: 'a',
};

export const Level2: StoryFn<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState('a');

  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <div>active tab: {activeTab}</div>
        <Tabs {...args} initialTab={activeTab} onChange={setActiveTab}>
          <Stack.Horizontal width='100%'>
            <Tabs.Tab styleVar='NORMAL' sizeVar='M' value={'a'} label={'label1'} />
            <Tabs.Tab styleVar='NORMAL' sizeVar='M' value={'b'} label={'label2'} />
            <Tabs.Tab styleVar='NORMAL' sizeVar='M' value={'c'} label={'label3'} />
          </Stack.Horizontal>
        </Tabs>
      </ComponentStage>
    </Stack>
  );
};

Level2.args = {
  initialTab: 'a',
};

export const Level3: StoryFn<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState('a');

  const rightSource = (
    <div
      style={{
        backgroundColor: colorTokens.neutral700,
        width: '20px',
        height: '20px',
        borderRadius: '100%',
        flexShrink: 0,
      }}
    />
  );

  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <div>active tab: {activeTab}</div>
        <Tabs {...args} initialTab={activeTab} onChange={setActiveTab}>
          <Stack.Horizontal width='100%' spacing={'spacing16'}>
            <Tabs.Tab
              styleVar='INFO'
              value={'a'}
              label={'Long'}
              leftSource={<Icon iconSource={EditIcon} sizeVar='S' />}
              rightSource={rightSource}
            />
            <Tabs.Tab
              styleVar='INFO'
              value={'b'}
              label={'label2'}
              leftSource={<Icon iconSource={EditIcon} sizeVar='S' />}
              rightSource={rightSource}
            />
            <Tabs.Tab
              styleVar='INFO'
              value={'c'}
              label={'label3'}
              leftSource={<Icon iconSource={EditIcon} sizeVar='S' />}
              rightSource={rightSource}
            />
          </Stack.Horizontal>
        </Tabs>
      </ComponentStage>
    </Stack>
  );
};

Level3.args = {
  initialTab: 'a',
};
