import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import MonthDatepicker from './MonthDatepicker';
import type { MonthClickDateInfo, MonthDatepickerProps } from './MonthDatepicker.types';
import { Text } from '../../Text';

export default {
  title: 'COMPONENTS/Datepickers/MonthDatepicker',
  component: MonthDatepicker,
};

export const Playground: StoryFn<MonthDatepickerProps> = (args) => {
  const [selectedDateInfo, setSelectedDateInfo] = useState<MonthClickDateInfo | null>(null);

  return (
    <Stack>
      <MonthDatepicker {...args} handleMonthClick={setSelectedDateInfo} />
      <Stack.Vertical width='100%'>
        <Text>
          selected start :
          {selectedDateInfo?.startDate
            ? `${selectedDateInfo.startDate.getFullYear()}-${
                Number(selectedDateInfo.startDate.getMonth()) + 1
              }-${selectedDateInfo.startDate.getDate()}`
            : ''}
        </Text>
        <Text>
          selected end :
          {selectedDateInfo?.endDate
            ? `${selectedDateInfo.endDate.getFullYear()}-${
                Number(selectedDateInfo.endDate.getMonth()) + 1
              }-${selectedDateInfo.endDate.getDate()}`
            : ''}
        </Text>
        <Text>selected range :{selectedDateInfo?.selectedMonthRange}</Text>
      </Stack.Vertical>
    </Stack>
  );
};

export const OnlySingle: StoryFn<MonthDatepickerProps> = (args) => {
  const [selectedDateInfo, setSelectedDateInfo] = useState<MonthClickDateInfo | null>(null);
  return (
    <Stack>
      <MonthDatepicker
        onlySingleMonth
        {...args}
        handleMonthClick={(dataInfo) => {
          setSelectedDateInfo(dataInfo);
        }}
      />
      <Stack.Vertical width='100%'>
        <Text>
          selected start :
          {selectedDateInfo?.startDate
            ? `${selectedDateInfo.startDate.getFullYear()}-${
                Number(selectedDateInfo.startDate.getMonth()) + 1
              }-${selectedDateInfo.startDate.getDate()}`
            : ''}
        </Text>
        <Text>
          selected end :
          {selectedDateInfo?.endDate
            ? `${selectedDateInfo.endDate.getFullYear()}-${
                Number(selectedDateInfo.endDate.getMonth()) + 1
              }-${selectedDateInfo.endDate.getDate()}`
            : ''}
        </Text>
        <Text>selected range :{selectedDateInfo?.selectedMonthRange}</Text>
      </Stack.Vertical>
    </Stack>
  );
};

export const MinMax: StoryFn<MonthDatepickerProps> = (args) => {
  const [selectedDateInfo, setSelectedDateInfo] = useState<MonthClickDateInfo | null>(null);
  return (
    <Stack>
      <MonthDatepicker
        {...args}
        handleMonthClick={setSelectedDateInfo}
        minDate={new Date('2010-05-05')}
        maxDate={new Date('2030-10-10')}
      />
      <Stack.Vertical width='100%'>
        <Text>
          selected start :
          {selectedDateInfo?.startDate
            ? `${selectedDateInfo.startDate.getFullYear()}-${
                Number(selectedDateInfo.startDate.getMonth()) + 1
              }-${selectedDateInfo.startDate.getDate()}`
            : ''}
        </Text>
        <Text>
          selected end :
          {selectedDateInfo?.endDate
            ? `${selectedDateInfo.endDate.getFullYear()}-${
                Number(selectedDateInfo.endDate.getMonth()) + 1
              }-${selectedDateInfo.endDate.getDate()}`
            : ''}
        </Text>
        <Text>selected range :{selectedDateInfo?.selectedMonthRange}</Text>
      </Stack.Vertical>
    </Stack>
  );
};
