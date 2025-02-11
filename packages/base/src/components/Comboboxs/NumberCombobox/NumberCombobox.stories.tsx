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
    floatingZIndex: { control: { type: 'number' }, description: '커스텀 Popover z-index' },
    maxLength: { control: { type: 'number' }, description: '최대 길이' },
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

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=8305-405&m=dev',
  },
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
