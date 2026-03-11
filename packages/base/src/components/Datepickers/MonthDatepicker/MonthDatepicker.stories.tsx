import React, { useEffect, useMemo, useState } from 'react';

import type { StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import MonthDatepicker from './MonthDatepicker';
import type { MonthClickDateInfo, MonthDatepickerProps } from './MonthDatepicker.types';
import { Text } from '../../Text';

export default {
  title: 'COMPONENTS/Datepickers/MonthDatepicker',
  component: MonthDatepicker,
  argTypes: {
    sizeVar: {
      control: { type: 'select', options: ['S', 'M'] },
    },
    onlySingleMonth: {
      control: { type: 'boolean' },
    },
    initStartDate: {
      control: { type: 'date' },
    },
    initEndDate: {
      control: { type: 'date' },
    },
    minDate: {
      control: { type: 'date' },
    },
    maxDate: {
      control: { type: 'date' },
    },
    handleMonthClick: {
      table: { disable: true },
    },
  },
};

export const Playground: StoryFn<MonthDatepickerProps> = (args) => {
  const [selectedDateInfo, setSelectedDateInfo] = useState<MonthClickDateInfo | null>({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
    selectedMonthRange: 3,
  });

  const { initStartDate, initEndDate, minDate, maxDate, ...rest } = args;

  const startDate = useMemo(() => (initStartDate ? new Date(initStartDate) : undefined), [initStartDate]);
  const endDate = useMemo(() => (initEndDate ? new Date(initEndDate) : undefined), [initEndDate]);
  const minDateValue = useMemo(() => (minDate ? new Date(minDate) : undefined), [minDate]);
  const maxDateValue = useMemo(() => (maxDate ? new Date(maxDate) : undefined), [maxDate]);

  useEffect(() => {
    setSelectedDateInfo(null);
  }, [args.onlySingleMonth]);

  return (
    <Stack spacing='spacing20'>
      <div style={{ boxShadow: '0 10px 30px 0 rgba(51, 51, 51, 0.20)', borderRadius: '16px' }}>
        <MonthDatepicker
          key={args.onlySingleMonth ? 'single' : 'range'}
          {...rest}
          initStartDate={startDate}
          initEndDate={endDate}
          minDate={minDateValue}
          maxDate={maxDateValue}
          handleMonthClick={setSelectedDateInfo}
        />
      </div>

      <Stack.Vertical width='100%'>
        <Text>
          selected start :
          {selectedDateInfo?.startDate
            ? `${selectedDateInfo?.startDate.getFullYear()}-${
                Number(selectedDateInfo?.startDate.getMonth()) + 1
              }-${selectedDateInfo?.startDate.getDate()}`
            : ''}
        </Text>
        <Text>
          selected end :
          {selectedDateInfo?.endDate
            ? `${selectedDateInfo?.endDate.getFullYear()}-${
                Number(selectedDateInfo?.endDate.getMonth()) + 1
              }-${selectedDateInfo?.endDate.getDate()}`
            : ''}
        </Text>
        <Text>selected range :{selectedDateInfo?.selectedMonthRange}</Text>
        <Text>size : {args.sizeVar}</Text>
      </Stack.Vertical>
    </Stack>
  );
};

Playground.args = {
  sizeVar: 'M',
  onlySingleMonth: false,
  initStartDate: new Date(),
  initEndDate: new Date(new Date().setMonth(new Date().getMonth() + 2)),
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
