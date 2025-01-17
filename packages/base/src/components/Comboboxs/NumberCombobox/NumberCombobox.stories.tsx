import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import NumberCombobox from './NumberCombobox';
import type { NumberComboboxProps } from './NumberCombobox.types';
import { HOURS, MINUTES } from './NumberComboboxLists';

export default {
  title: 'COMPONENTS/Comboboxs/NumberCombobox',
  component: NumberCombobox,
};

export const Playground: StoryFn<NumberComboboxProps> = (args) => {
  const [value, setValue] = useState('');

  return (
    <Stack>
      <NumberCombobox
        {...args}
        items={HOURS}
        value={value}
        autoFocus={false}
        width='90px'
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onSelect={(value) => {
          console.info('value : ', value);
          return;
        }}
        floatingZIndex={2005}
      />
    </Stack>
  );
};

export const Disabled: StoryFn<NumberComboboxProps> = (args) => {
  return (
    <Stack>
      <NumberCombobox {...args} items={HOURS} disabled />
    </Stack>
  );
};

export const Minutes: StoryFn<NumberComboboxProps> = (args) => {
  const [value, setValue] = useState('');
  const [isError, setIsError] = useState(false);
  return (
    <Stack>
      <NumberCombobox
        {...args}
        value={value}
        items={MINUTES}
        isError={isError}
        onChange={(event) => {
          setValue(event.target.value);
          if (!isError) {
            return;
          }

          setIsError(false);
        }}
        maxLength={99}
        onSelect={(value) => {
          // Check if the input value is a number
          if (/^\d*$/.test(value)) {
            const numberValue = parseInt(value, 10);

            if (numberValue <= 60) {
              setValue(String(numberValue).padStart(2, '0'));
              return;
            }
            setValue('');
            setIsError(true);
            alert('60 넘게 입력 불가!');
          }
        }}
      />
    </Stack>
  );
};

export const InitValue: StoryFn<NumberComboboxProps> = (args) => {
  const [value, setValue] = useState('20');
  const [isError, setIsError] = useState(false);
  return (
    <Stack>
      <NumberCombobox
        {...args}
        value={value}
        items={MINUTES}
        isError={isError}
        onChange={(event) => {
          setValue(event.target.value);
          if (!isError) {
            return;
          }

          setIsError(false);
        }}
        maxLength={99}
        onSelect={(value) => {
          // Check if the input value is a number
          if (/^\d*$/.test(value)) {
            const numberValue = parseInt(value, 10);

            if (numberValue <= 60) {
              setValue(String(numberValue).padStart(2, '0'));
              return;
            }
            setValue('');
            setIsError(true);
            alert('60 넘게 입력 불가!');
          }
        }}
      />
    </Stack>
  );
};
