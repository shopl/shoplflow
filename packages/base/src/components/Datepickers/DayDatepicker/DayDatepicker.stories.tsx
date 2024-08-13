/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import DayDatepicker from './DayDatepicker';
import type { DayDatepickerProps, DayDatepickerSizeVariantType } from './DayDatepicker.types';
import { ko } from 'date-fns/locale';
import { Button } from '../../Buttons';

export default {
  title: 'COMPONENTS/DayDatepicker',
  component: DayDatepicker,
};

export const Playground: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [sizeVar, setSizeVar] = React.useState<DayDatepickerSizeVariantType>('S');

  return (
    <Stack width='400px'>
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

      <DayDatepicker
        highlightDates={startDate ? [startDate] : undefined}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        calendarType={{
          type: 'range',
          handleDayRangeChange(dates) {
            if (Array.isArray(dates)) {
              const [start, end] = dates;
              setStartDate(start);
              setEndDate(end);
            } else {
              setStartDate(dates);
            }
          },
        }}
        sizeVar={sizeVar}
        locale={ko}
      />
    </Stack>
  );
};

export const Multiple: StoryFn<DayDatepickerProps> = () => {
  const [selectDates, setSelectDates] = useState<Date[] | null>(null);
  const [sizeVar, setSizeVar] = React.useState<DayDatepickerSizeVariantType>('S');

  return (
    <Stack width='400px'>
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

      <DayDatepicker
        calendarType={{
          type: 'multiple',
          handleMutlipleDaysChange(date) {
            setSelectDates(date);
          },
        }}
        selectedDates={selectDates || undefined}
        sizeVar={sizeVar}
        locale={ko}
      />
    </Stack>
  );
};
