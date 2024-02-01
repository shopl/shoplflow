import { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Tabs from './Tabs';
import type { TabsProps } from './Tabs.types';
import { ComponentStage } from '../../styles/Box';
import { SwitchCase } from './SwitchCase';

export default {
  title: 'COMPONENTS/Tabs',
  component: Tabs,
};

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
          <Stack.Horizontal spacing='spacing24' width='100%'>
            <Tabs.Tab value={'a'} label={'label1'} />
            <Tabs.Tab value={'b'} label={'label2'} />
            <Tabs.Tab value={'c'} label={'label3'} />
          </Stack.Horizontal>
        </Tabs>
        <SwitchCase value={'a'} caseBy={{ a: <div>a case</div>, b: <div>b case</div>, c: <div>c case</div> }} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  level: 'level1',
  initialTab: 'a',
  onChange() {
    return;
  },
};

export const Level2: StoryFn<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState('a');

  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Tabs {...args} initialTab={activeTab} onChange={setActiveTab}>
          <Stack.Horizontal spacing='spacing24' width='100%'>
            <Tabs.Tab value={'a'} label={'label1'} />
            <Tabs.Tab value={'b'} label={'label2'} />
            <Tabs.Tab value={'c'} label={'label3'} />
          </Stack.Horizontal>
        </Tabs>
        {/* <SwitchCase value={'a'} caseBy={{ a: <div>a case</div>, b: <div>b case</div>, c: <div>c case</div> }} /> */}
      </ComponentStage>
    </Stack>
  );
};

Level2.args = {
  level: 'level2',
  initialTab: 'a',
  onChange() {
    return;
  },
};

export const Level3: StoryFn<TabsProps> = (args) => {
  const [activeTab, setActiveTab] = useState('a');

  return (
    <Stack height={'400px'} width={'100%'} justify={'center'} align={'end'}>
      <ComponentStage>
        <div>active tab: {activeTab}</div>
        <Tabs {...args} initialTab={activeTab} onChange={setActiveTab}>
          <Stack.Horizontal spacing='spacing24' width='100%'>
            <Tabs.Tab value={'a'} label={'label1'} />
            <Tabs.Tab value={'b'} label={'label2'} />
            <Tabs.Tab value={'c'} label={'label3'} />
          </Stack.Horizontal>
        </Tabs>
        {/* <SwitchCase value={'a'} caseBy={{ a: <div>a case</div>, b: <div>b case</div>, c: <div>c case</div> }} /> */}
      </ComponentStage>
    </Stack>
  );
};

Level3.args = {
  level: 'level3',
  initialTab: 'a',
  onChange() {
    return;
  },
};
