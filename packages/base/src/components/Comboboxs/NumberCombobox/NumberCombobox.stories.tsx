import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../../Stack';
import NumberCombobox from './NumberCombobox';
import { NumberComboboxSizeVariants, type NumberComboboxProps } from './NumberCombobox.types';
import { HOURS, MINUTES } from './NumberComboboxLists';

const meta: Meta<typeof NumberCombobox> = {
  title: 'COMPONENTS/Comboboxs/NumberCombobox',
  component: NumberCombobox,
  argTypes: {
    value: { control: { type: 'text' } },
    onChange: { action: 'onChange' },
    onSelect: { action: 'onSelect' },
    disabled: { control: { type: 'boolean' }, defaultValue: false },
    autoFocus: { control: { type: 'boolean' }, defaultValue: false },
    floatingZIndex: { control: { type: 'number' }, description: 'Popover z-index' },
    width: { control: { type: 'text' }, description: '넓이' },
    sizeVar: {
      options: Object.values(NumberComboboxSizeVariants),
      control: { type: 'radio' },
      description: '사이즈',
      defaultValue: 'M',
    },
  },
};

export default meta;

export const Playground: StoryFn<NumberComboboxProps> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Stack>
      <NumberCombobox
        {...args}
        items={HOURS}
        value={value}
        onChange={(event) => {
          setValue(event.target.value.replace(/\D/g, ''));
        }}
        onSelect={(value) => {
          setValue(value);

          return;
        }}
      />
    </Stack>
  );
};

Playground.args = {
  value: '12',
  disabled: false,
  autoFocus: false,
  floatingZIndex: 2005,
  width: '90px',
  sizeVar: 'M',
};

export const Disabled: StoryFn<NumberComboboxProps> = (args) => {
  return (
    <Stack>
      <NumberCombobox {...args} items={HOURS} />
    </Stack>
  );
};

Disabled.args = {
  disabled: true,
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
