import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import DayDatepicker from './DayDatepicker';
import type { DayDatepickerProps } from './DayDatepicker.types';
import { ko } from 'date-fns/locale';

export default {
  title: 'COMPONENTS/DayDatepicker',
  component: DayDatepicker,
};

export const Playground: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  return (
    <Stack width='400px'>
      <DayDatepicker
        selectsRange
        highlightDates={startDate ? [startDate] : undefined}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        onChange={(dates: [Date | null, Date | null] | Date[] | Date | null) => {
          if (Array.isArray(dates)) {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
          } else {
            setStartDate(dates);
          }
        }}
        locale={ko}
      />
    </Stack>
  );
};
