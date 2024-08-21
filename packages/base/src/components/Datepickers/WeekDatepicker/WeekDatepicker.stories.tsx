import { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import WeekDatepicker from './WeekDatepicker';
import type { WeekClickDateInfo, WeekDatepickerProps } from './WeekDatepicker.types';
import { Text } from '../../Text';

export default {
  title: 'COMPONENTS/Datepickers/WeekDatepicker',
  component: WeekDatepicker,
};

export const Playground: StoryFn<WeekDatepickerProps> = (args) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekClickDateInfo | null>(null);

  return (
    <Stack>
      <WeekDatepicker
        {...args}
        initStartDate={new Date()}
        handleWeekClick={(date) => {
          setSelectedWeek(date);
        }}
      />
      <div>선택된 날짜 정보: {JSON.stringify(selectedWeek)}</div>
    </Stack>
  );
};

export const MinMaxWeek: StoryFn<WeekDatepickerProps> = (args) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekClickDateInfo | null>(null);

  return (
    <Stack>
      <Stack.Vertical align='center' spacing='spacing08' width='100%'>
        <Text>minDate: 1995-04-01</Text>
        <Text>maxDate: 2026-05-05</Text>
      </Stack.Vertical>
      <WeekDatepicker
        {...args}
        minDate={new Date('1995-04-01')}
        maxDate={new Date('2026-05-05')}
        initStartDate={new Date()}
        handleWeekClick={(date) => {
          setSelectedWeek(date);
        }}
      />
      <div>{JSON.stringify(selectedWeek)}</div>
    </Stack>
  );
};

export const OnlySingle: StoryFn<WeekDatepickerProps> = (args) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekClickDateInfo | null>(null);

  return (
    <Stack>
      <WeekDatepicker
        {...args}
        initStartDate={new Date()}
        onlySingleWeek
        handleWeekClick={(date) => {
          setSelectedWeek(date);
        }}
      />
      <Stack.Vertical align='center' spacing='spacing08' width='100%'>
        <div>{JSON.stringify(selectedWeek)}</div>
      </Stack.Vertical>
    </Stack>
  );
};
