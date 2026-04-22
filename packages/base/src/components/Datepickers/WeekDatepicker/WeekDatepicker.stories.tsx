import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import WeekDatepicker from './WeekDatepicker';
import type { WeekClickDateInfo, WeekDatepickerProps } from './WeekDatepicker.types';
import { Text } from '../../Text';
import { Button } from '../../Buttons';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Datepickers/WeekDatepicker',
  component: WeekDatepicker,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'WeekDatepicker 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
} satisfies Meta<typeof WeekDatepicker>;

export default meta;

export const Playground: StoryFn<WeekDatepickerProps> = (args) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekClickDateInfo | null>(null);
  const [sizeVar, setSizeVar] = useState<'S' | 'M'>('S');

  return (
    <Stack width='100%' justify='center' align='center' spacing='spacing08'>
      <WeekDatepicker
        {...args}
        sizeVar={sizeVar}
        initStartDate={new Date()}
        handleWeekClick={(date) => {
          setSelectedWeek(date);
        }}
      />

      <Text style={{ textAlign: 'center' }}>선택된 날짜 정보: {JSON.stringify(selectedWeek)}</Text>

      <Stack.Horizontal spacing='spacing08'>
        <Button
          onClick={() => {
            setSizeVar('S');
          }}
        >
          S 사이즈
        </Button>
        <Button
          onClick={() => {
            setSizeVar('M');
          }}
        >
          M 사이즈
        </Button>
      </Stack.Horizontal>
    </Stack>
  );
};

export const MinMaxWeek: StoryFn<WeekDatepickerProps> = (args) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekClickDateInfo | null>(null);
  const [sizeVar, setSizeVar] = useState<'S' | 'M'>('S');

  return (
    <Stack width='100%' justify='center' align='center' spacing='spacing08'>
      <Stack.Vertical align='center' spacing='spacing08' width='100%'>
        <Text>minDate: 1995-04-01</Text>
        <Text>maxDate: 2026-05-05</Text>
      </Stack.Vertical>
      <WeekDatepicker
        {...args}
        sizeVar={sizeVar}
        minDate={new Date('1995-04-01')}
        maxDate={new Date('2026-05-05')}
        initStartDate={new Date()}
        handleWeekClick={(date) => {
          setSelectedWeek(date);
        }}
      />
      <Text>{JSON.stringify(selectedWeek)}</Text>
      <Stack.Horizontal spacing='spacing08'>
        <Button
          onClick={() => {
            setSizeVar('S');
          }}
        >
          S 사이즈
        </Button>
        <Button
          onClick={() => {
            setSizeVar('M');
          }}
        >
          M 사이즈
        </Button>
      </Stack.Horizontal>
    </Stack>
  );
};

export const OnlySingle: StoryFn<WeekDatepickerProps> = (args) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekClickDateInfo | null>(null);
  const [sizeVar, setSizeVar] = useState<'S' | 'M'>('S');

  return (
    <Stack width='100%' justify='center' align='center' spacing='spacing08'>
      <WeekDatepicker
        {...args}
        sizeVar={sizeVar}
        initStartDate={new Date()}
        onlySingleWeek
        handleWeekClick={(date) => {
          setSelectedWeek(date);
        }}
      />
      <Stack.Vertical align='center' spacing='spacing08' width='100%'>
        <Text>{JSON.stringify(selectedWeek)}</Text>
      </Stack.Vertical>
      <Stack.Horizontal spacing='spacing08'>
        <Button
          onClick={() => {
            setSizeVar('S');
          }}
        >
          S 사이즈
        </Button>
        <Button
          onClick={() => {
            setSizeVar('M');
          }}
        >
          M 사이즈
        </Button>
      </Stack.Horizontal>
    </Stack>
  );
};
