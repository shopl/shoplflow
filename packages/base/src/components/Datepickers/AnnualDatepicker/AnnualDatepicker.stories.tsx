import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import AnnualDatepicker from './AnnualDatepicker';
import type { AnnualDatepickerProps } from './AnnualDatepicker.types';

export default {
  title: 'COMPONENTS/Datepickers/AnnualDatepicker',
  component: AnnualDatepicker,
};

export const Playground: StoryFn<AnnualDatepickerProps> = (args) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  return (
    <Stack>
      <AnnualDatepicker
        {...args}
        currentYear={selectedYear}
        disabledYears={[2020, 2030, 2040]}
        handleYearClick={(year) => {
          setSelectedYear(year);
        }}
      />
    </Stack>
  );
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
