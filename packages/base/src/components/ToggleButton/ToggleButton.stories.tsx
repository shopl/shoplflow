import type React from 'react';
import { useEffect, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Stack } from '../Stack';
import ToggleButton from './ToggleButton';
import { ToggleButtonSizeVariants } from './ToggleButton.types';
import type { ToggleButtonProps } from './ToggleButton.types';
import { Text } from '../Text';

const FIGMA_URL = 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=14526-5026';

const DEMO_VALUES = ['value1', 'value2', 'value3'] as const;

const meta: Meta<typeof ToggleButton> = {
  title: 'COMPONENTS/ToggleButton',
  component: ToggleButton,
  argTypes: {
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(ToggleButtonSizeVariants),
      description: '토글 버튼의 사이즈를 설정합니다.',
      table: { type: { summary: Object.values(ToggleButtonSizeVariants).join(' | ') } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '그룹 전체의 비활성화 여부를 설정합니다.',
    },
    fixedWidth: {
      control: { type: 'number' },
      description: '각 아이템의 고정 너비(px)를 설정합니다.',
    },
  },
  args: {
    onChange: action('on-change'),
  },
};

export default meta;

type PlaygroundArgs = ToggleButtonProps & {
  demoSelectedValue?: (typeof DEMO_VALUES)[number];
  firstItemLabel?: string;
};

export const Playground: StoryFn<PlaygroundArgs> = (args) => {
  const { demoSelectedValue, firstItemLabel, ...componentProps } = args;
  const [selectedValue, setSelectedValue] = useState<string>(demoSelectedValue ?? 'value1');

  useEffect(() => {
    if (demoSelectedValue !== undefined) {
      setSelectedValue(demoSelectedValue);
    }
  }, [demoSelectedValue]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedValue(event.target.value);
    componentProps.onChange?.(event);
  };

  return (
    <Stack spacing='spacing16'>
      <Text>선택된 된 값: {selectedValue}</Text>

      <ToggleButton
        {...componentProps}
        selectedValue={selectedValue}
        onChange={handleChange}
        targetName='playground-group'
      >
        <ToggleButton.InnerRadio value='value1' label={firstItemLabel ?? 'Toggle1'} id='playground-1' />
        <ToggleButton.InnerRadio value='value2' label='Toggle2' id='playground-2' />
        <ToggleButton.InnerRadio value='value3' label='Toggle3' id='playground-3' />
      </ToggleButton>
    </Stack>
  );
};

Playground.args = {
  sizeVar: 'S',
  disabled: false,
  fixedWidth: 80,
  firstItemLabel: 'Toggle1',
};

Playground.argTypes = {
  demoSelectedValue: {
    control: { type: 'select' },
    options: [...DEMO_VALUES],
    description: 'Playground 전용: selectedValue(string)를 외부에서 설정합니다. 실제 prop은 selectedValue입니다.',
    table: {
      category: 'Playground (데모 전용)',
      type: { summary: DEMO_VALUES.join(' | ') },
    },
  },
  firstItemLabel: {
    control: { type: 'text' },
    description: 'Playground 전용: 첫 번째 아이템의 label을 설정합니다. 실제 prop은 InnerRadio의 label입니다.',
    table: {
      category: 'Playground (데모 전용)',
    },
  },
};

Playground.parameters = {
  controls: {
    include: ['sizeVar', 'disabled', 'fixedWidth', 'demoSelectedValue', 'firstItemLabel'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Disabled: StoryFn<ToggleButtonProps> = (args) => (
  <Stack>
    <ToggleButton {...args} targetName='disabled-group'>
      <ToggleButton.InnerRadio value='value1' label='Toggle1' id='disabled-1' />
      <ToggleButton.InnerRadio value='value2' label='Toggle2' id='disabled-2' />
      <ToggleButton.InnerRadio value='value3' label='Toggle3' id='disabled-3' />
    </ToggleButton>
  </Stack>
);

Disabled.args = {
  sizeVar: 'S',
  disabled: true,
  fixedWidth: 80,
  selectedValue: 'value1',
};

Disabled.parameters = {
  controls: {
    include: ['sizeVar'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const ItemDisabled: StoryFn<ToggleButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string>('value1');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedValue(event.target.value);
    args.onChange?.(event);
  };

  return (
    <Stack>
      <ToggleButton {...args} selectedValue={selectedValue} onChange={handleChange} targetName='item-disabled-group'>
        <ToggleButton.InnerRadio value='value1' label='Toggle1' id='item-disabled-1' />
        <ToggleButton.InnerRadio value='value2' label='Toggle2' id='item-disabled-2' disabled />
        <ToggleButton.InnerRadio value='value3' label='Toggle3' id='item-disabled-3' />
      </ToggleButton>
    </Stack>
  );
};

ItemDisabled.args = {
  sizeVar: 'S',
  fixedWidth: 80,
  selectedValue: 'value1',
};

ItemDisabled.parameters = {
  controls: {
    include: ['sizeVar'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
