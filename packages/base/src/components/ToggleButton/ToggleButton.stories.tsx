import type React from 'react';
import { useEffect, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import { Stack } from '../Stack';
import ToggleButton from './ToggleButton';
import { ToggleButtonSizeVariants } from './ToggleButton.types';
import type { ToggleButtonProps } from './ToggleButton.types';
import { Text } from '../Text';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

const FIGMA_URL = 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=14526-5026';

const DEMO_VALUES = ['value1', 'value2', 'value3'] as const;

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  {
    version: '1.1',
    date: '2026-06-23',
    changes: [
      'fullWidth prop 추가: Wrapper를 부모 너비 100%로 채우고 각 아이템을 동일 비율(flex:1)로 분배',
      'fixedWidth를 fullWidth와 배타적으로 변경(fullWidth가 true면 선택, 아니면 필수)',
      'buttonLineClamp prop 추가: 각 InnerRadio 라벨 텍스트를 지정한 줄 수로 제한(line-clamp)하고 말줄임 처리',
    ],
  },
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta: Meta<typeof ToggleButton> = {
  title: 'COMPONENTS/ToggleButton',
  component: ToggleButton,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'ToggleButton 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
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
      description: '각 아이템의 고정 너비(px)를 설정합니다. (fullWidth가 false일 때 필수)',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description:
        'true이면 Wrapper가 부모 가용 너비를 100% 채우고 각 아이템을 동일 비율(flex:1)로 분배합니다. 이 경우 fixedWidth는 무시됩니다.',
    },
    buttonLineClamp: {
      control: { type: 'number' },
      description:
        '값이 있으면 각 InnerRadio 라벨 텍스트를 해당 줄 수로 제한하고 말줄임(…) 처리합니다. 너비가 제약되는 fullWidth 모드에서 가장 잘 동작합니다.',
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
    include: ['sizeVar', 'disabled', 'fixedWidth', 'fullWidth', 'demoSelectedValue', 'firstItemLabel'],
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

export const FullWidth: StoryFn<ToggleButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string>('value1');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedValue(event.target.value);
    args.onChange?.(event);
  };

  return (
    <Stack spacing='spacing16'>
      <Text>fullWidth=true: 부모 너비를 100% 채우고 각 아이템이 동일 비율(flex:1)로 분배됩니다.</Text>

      {/* 부모 너비를 제한해 100% 채움을 시각적으로 확인하기 위한 컨테이너 */}
      <div style={{ width: 480, border: '1px dashed #ccc' }}>
        <ToggleButton
          {...args}
          fullWidth
          selectedValue={selectedValue}
          onChange={handleChange}
          targetName='full-width-group'
        >
          <ToggleButton.InnerRadio value='value1' label='Toggle1Toggle1Toggle1Toggle1' id='full-width-1' />
          <ToggleButton.InnerRadio value='value2' label='Toggle2 Toggle2Toggle2Toggle2' id='full-width-2' />
          <ToggleButton.InnerRadio value='value3' label='Toggle3' id='full-width-3' />
        </ToggleButton>
      </div>
    </Stack>
  );
};

FullWidth.args = {
  sizeVar: 'S',
};

FullWidth.parameters = {
  controls: {
    include: ['sizeVar', 'buttonLineClamp'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const ButtonLineClamp: StoryFn<ToggleButtonProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<string>('value1');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setSelectedValue(event.target.value);
    args.onChange?.(event);
  };

  return (
    <Stack spacing='spacing16'>
      <Text>
        buttonLineClamp: 라벨이 길어도 지정한 줄 수까지만 표시하고 말줄임(…) 처리합니다. (fullWidth와 함께 사용)
      </Text>

      <div style={{ width: 360, border: '1px dashed #ccc' }}>
        <ToggleButton
          {...args}
          fullWidth
          selectedValue={selectedValue}
          onChange={handleChange}
          targetName='line-clamp-group'
        >
          <ToggleButton.InnerRadio
            value='value1'
            label='아주 긴 라벨 텍스트 예시 첫번째 항목입니다'
            id='line-clamp-1'
          />
          <ToggleButton.InnerRadio value='value2' label='두번째 항목도 라벨이 꽤 길어요' id='line-clamp-2' />
          <ToggleButton.InnerRadio value='value3' label='짧은' id='line-clamp-3' />
        </ToggleButton>
      </div>
    </Stack>
  );
};

ButtonLineClamp.args = {
  sizeVar: 'S',
  buttonLineClamp: 1,
};

ButtonLineClamp.parameters = {
  controls: {
    include: ['sizeVar', 'buttonLineClamp'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
