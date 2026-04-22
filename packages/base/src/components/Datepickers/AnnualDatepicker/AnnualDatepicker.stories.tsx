import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import AnnualDatepicker from './AnnualDatepicker';
import type { AnnualDatepickerProps } from './AnnualDatepicker.types';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Datepickers/AnnualDatepicker',
  component: AnnualDatepicker,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'AnnualDatepicker 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    currentYear: {
      control: { type: 'number' },
      defaultValue: new Date().getFullYear(),
    },
    disabledYears: {
      description: '선택 불가능한 연도 리스트',
    },
    startYear: {
      control: { type: 'number' },
      defaultValue: new Date().getFullYear() - 10,
    },
    endYear: {
      control: { type: 'number' },
      defaultValue: new Date().getFullYear() + 10,
    },
  },
} satisfies Meta<typeof AnnualDatepicker>;

export default meta;

export const Playground: StoryFn<AnnualDatepickerProps> = (args) => {
  const [selectedYear, setSelectedYear] = useState(args.currentYear);

  return (
    <Stack>
      <AnnualDatepicker
        {...args}
        currentYear={selectedYear}
        handleYearClick={(year) => {
          setSelectedYear(year);
        }}
      />
    </Stack>
  );
};

Playground.args = {
  currentYear: new Date().getFullYear(),
  disabledYears: [2020, 2030, 2040],
  startYear: 2020,
  endYear: 2050,
};

export const Start2020End2050: StoryFn<AnnualDatepickerProps> = (args) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <Stack>
      <AnnualDatepicker
        {...args}
        currentYear={selectedYear}
        startYear={2020}
        endYear={2050}
        handleYearClick={(year) => {
          setSelectedYear(year);
        }}
      />
    </Stack>
  );
};
