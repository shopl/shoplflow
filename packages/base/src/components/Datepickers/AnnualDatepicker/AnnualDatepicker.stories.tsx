import { useState } from 'react';

import type { StoryFn, Meta } from '@storybook/react-vite';
import { Stack } from '../../Stack';
import AnnualDatepicker from './AnnualDatepicker';
import type { AnnualDatepickerProps } from './AnnualDatepicker.types';

const meta: Meta = {
  title: 'COMPONENTS/Datepickers/AnnualDatepicker',
  component: AnnualDatepicker,
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
};

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
