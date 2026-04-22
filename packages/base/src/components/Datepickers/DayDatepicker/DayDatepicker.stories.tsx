import React, { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import DayDatepicker from './DayDatepicker';
import type { DayDatepickerProps, DayDatepickerSizeVariantType } from './DayDatepicker.types';
import { ko } from 'date-fns/locale';
import { Button } from '../../Buttons';
import {
  buildComponentDocsMarkdown,
  getLatestComponentVersion,
  useOutsideClick,
  type ComponentChangelogEntry,
} from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Datepickers/DayDatepicker',
  component: DayDatepicker,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'DayDatepicker 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
} satisfies Meta<typeof DayDatepicker>;

export default meta;

export const Playground: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const [sizeVar, setSizeVar] = React.useState<DayDatepickerSizeVariantType>('M');

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
        minDate={new Date('2024-01-01')}
        maxDate={new Date('2029-01-01')}
        sizeVar={sizeVar}
        locale={ko}
      />
    </Stack>
  );
};

export const SmallSize: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const [isOpen, setIsOpen] = useOutsideClick({ selector: '.test', useOutsideScroll: true });

  return (
    <Stack width='400px'>
      <Button
        className='test'
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        DatePicker를 보려면 클릭해주세요~
      </Button>
      {isOpen && (
        <DayDatepicker
          className='test'
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
          sizeVar={'S'}
          locale={ko}
        />
      )}
    </Stack>
  );
};

export const Multiple: StoryFn<DayDatepickerProps> = () => {
  const [selectDates, setSelectDates] = useState<Date[] | null>(null);

  return (
    <Stack width='400px'>
      <DayDatepicker
        calendarType={{
          type: 'multiple',
          handleMutlipleDaysChange(date) {
            setSelectDates(date);
          },
        }}
        selectedDates={selectDates || undefined}
        sizeVar={'M'}
        locale={ko}
      />
    </Stack>
  );
};

export const Range: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  return (
    <Stack width='400px'>
      <DayDatepicker
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
        selected={startDate ?? null}
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        sizeVar={'M'}
        locale={ko}
      />
    </Stack>
  );
};
