import React, { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import DayDatepicker from './DayDatepicker';
import type { DayDatepickerProps, DayDatepickerSizeVariantType } from './DayDatepicker.types';
import { addDays, isBefore, subDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Button } from '../../Buttons';
import { Icon } from '../../Icon';
import { Text } from '../../Text';
import { AlertTriangleIcon } from '@shoplflow/shopl-assets';
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

const MAX_RANGE_DAYS = 42;

const maxRangeNotice = (
  <Stack.Horizontal align='center' spacing='spacing02'>
    <Icon iconSource={AlertTriangleIcon} sizeVar='S' color='yellow300' />
    <Text typography='paragraph2' color='neutral700'>
      최대 {MAX_RANGE_DAYS}일까지 선택 가능합니다.
    </Text>
  </Stack.Horizontal>
);

/** 하단 영역(bottomSource) — 날짜 칸 아래 8px 에 안내 문구 등 ReactNode 를 넣는다 */
export const WithBottomSource: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(new Date());
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  return (
    <Stack width='280px' style={{ boxShadow: '0 10px 30px 0 rgba(51, 51, 51, 0.2)', borderRadius: '8px' }}>
      <DayDatepicker
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        calendarType={{
          type: 'range',
          handleDayRangeChange([start, end]) {
            setStartDate(start);
            setEndDate(end);
          },
        }}
        sizeVar={'S'}
        locale={ko}
        bottomSource={maxRangeNotice}
      />
    </Stack>
  );
};

/**
 * 최대 선택 기간(42일) — 첫 선택일 앞뒤로 41일만 활성화(minDate·maxDate)하고, 첫 선택일보다 앞 날짜를 누르면
 * 「앞 날짜 ~ 첫 선택일」로 확정한다. 두 날짜가 정해지면 다시 전체가 열려 다음 클릭은 새 시작일이 된다
 */
export const WithBottomSourceMaxRange: StoryFn<DayDatepickerProps> = () => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  // 시작일만 고른 동안의 첫 선택일
  const anchorDate = startDate && !endDate ? startDate : null;

  return (
    <Stack width='280px' style={{ boxShadow: '0 10px 30px 0 rgba(51, 51, 51, 0.2)', borderRadius: '8px' }}>
      <DayDatepicker
        startDate={startDate || undefined}
        endDate={endDate || undefined}
        minDate={anchorDate ? subDays(anchorDate, MAX_RANGE_DAYS - 1) : undefined}
        maxDate={anchorDate ? addDays(anchorDate, MAX_RANGE_DAYS - 1) : undefined}
        calendarType={{
          type: 'range',
          handleDayRangeChange([start, end]) {
            // react-datepicker 는 시작일보다 앞 날짜를 누르면 시작일을 바꾸므로 [앞 날짜, 첫 선택일] 로 바꿔 준다
            if (anchorDate && start && !end && isBefore(start, anchorDate)) {
              setStartDate(start);
              setEndDate(anchorDate);
              return;
            }
            setStartDate(start);
            setEndDate(end);
          },
        }}
        sizeVar={'S'}
        locale={ko}
        bottomSource={maxRangeNotice}
      />
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
