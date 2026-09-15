import { useEffect, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import Combobox from './Combobox';
import {
  ComboboxInputModeVariants,
  ComboboxSizeVariants,
  ComboboxTextAlignVariants,
  type ComboboxItem,
  type ComboboxProps,
} from './Combobox.types';
import { Stack } from '../../Stack';
import { Text } from '../../Text';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

const FIGMA_URL = 'https://www.figma.com/design/O5f0hLoAbhxCFPhj6wWC1X/Sprint--10?node-id=499-7863&m=dev';

const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '2.0', date: '2026-09-01', changes: ['Combobox 신규 추가. 기존 NumberCombobox는 유지'] },
];

const TEXT_ITEMS: ComboboxItem[] = [
  { label: 'Option A', value: 'option-a' },
  { label: 'Option B', value: 'option-b' },
  { label: 'Option C', value: 'option-c' },
];

const NUMBER_ITEMS: ComboboxItem[] = Array.from({ length: 12 }, (_, index) => {
  const value = String(index).padStart(2, '0');
  return { label: value, value };
});

const meta: Meta<typeof Combobox> = {
  title: 'COMPONENTS/Comboboxs/Combobox',
  component: Combobox,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary:
            '목록에서 선택하거나 직접 입력할 수 있는 Combobox입니다. 텍스트/숫자 입력, 좌우 정렬, 선택적 태그 영역을 지원합니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  args: {
    onChange: action('on-change'),
    onSelect: action('on-select'),
  },
  argTypes: {
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(ComboboxSizeVariants),
      description: '필드 높이를 설정합니다.',
      table: { type: { summary: Object.values(ComboboxSizeVariants).join(' | ') } },
    },
    inputMode: {
      control: { type: 'select' },
      options: Object.values(ComboboxInputModeVariants),
      description: '입력 모드입니다. numeric이면 숫자만 입력됩니다.',
      table: { type: { summary: Object.values(ComboboxInputModeVariants).join(' | ') } },
    },
    textAlign: {
      control: { type: 'select' },
      options: Object.values(ComboboxTextAlignVariants),
      description: '입력 텍스트 정렬입니다.',
      table: { type: { summary: Object.values(ComboboxTextAlignVariants).join(' | ') } },
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부를 설정합니다.',
    },
    isError: {
      control: { type: 'boolean' },
      description: '에러 상태 여부를 설정합니다.',
    },
    width: {
      control: { type: 'text' },
      description: '필드 너비입니다. 태그 영역은 포함하지 않습니다.',
    },
    placeholder: {
      control: { type: 'text' },
      description: '플레이스홀더입니다.',
    },
    maxLength: {
      control: { type: 'number' },
      description: '최대 입력 길이입니다.',
    },
    floatingZIndex: {
      control: { type: 'number' },
      description: '팝오버 z-index입니다.',
    },
    tag: { description: '필드 바깥 오른쪽에 렌더링할 ReactNode입니다.' },
    items: { description: '드롭다운 항목 배열입니다.' },
    value: { description: '제어 입력값입니다.' },
  },
};

export default meta;

type PlaygroundArgs = ComboboxProps & {
  showTag?: boolean;
};

export const Playground: StoryFn<PlaygroundArgs> = (args) => {
  const { showTag, tag, value: valueArg, onChange, items, ...componentProps } = args;
  const [value, setValue] = useState(String(valueArg ?? ''));

  useEffect(() => {
    if (valueArg !== undefined) {
      setValue(String(valueArg));
    }
  }, [valueArg]);

  const handleChange = (next: string) => {
    setValue(next);
    onChange?.(next);
  };

  const resolvedItems = items ?? (componentProps.inputMode === 'numeric' ? NUMBER_ITEMS : TEXT_ITEMS);

  return (
    <Stack>
      <Combobox
        {...componentProps}
        items={resolvedItems}
        value={value}
        onChange={handleChange}
        tag={showTag ? <Text typography='caption_700'>단위</Text> : tag}
      />
    </Stack>
  );
};

Playground.args = {
  value: 'Option A',
  disabled: false,
  isError: false,
  sizeVar: 'M',
  inputMode: 'text',
  textAlign: 'left',
  width: '160px',
  placeholder: '선택하거나 입력하세요',
  showTag: false,
  floatingZIndex: 2005,
};

Playground.argTypes = {
  showTag: {
    control: { type: 'boolean' },
    description: 'Playground 전용: tag(ReactNode) 표시 여부를 토글합니다. 실제 prop은 tag입니다.',
    table: { category: 'Playground (데모 전용)' },
  },
};

Playground.parameters = {
  controls: {
    include: [
      'sizeVar',
      'inputMode',
      'textAlign',
      'disabled',
      'isError',
      'width',
      'placeholder',
      'maxLength',
      'showTag',
      'floatingZIndex',
    ],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Disabled: StoryFn<ComboboxProps> = (args) => (
  <Stack>
    <Combobox {...args} items={TEXT_ITEMS} value='Option A' disabled />
  </Stack>
);

Disabled.args = {
  sizeVar: 'M',
  inputMode: 'text',
  textAlign: 'left',
  width: '160px',
};

Disabled.parameters = {
  controls: {
    include: ['sizeVar', 'inputMode', 'textAlign', 'width'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Error: StoryFn<ComboboxProps> = (args) => (
  <Stack>
    <Combobox {...args} items={TEXT_ITEMS} value='Option A' isError />
  </Stack>
);

Error.args = {
  sizeVar: 'M',
  inputMode: 'text',
  textAlign: 'left',
  width: '160px',
};

Error.parameters = {
  controls: {
    include: ['sizeVar', 'inputMode', 'textAlign', 'width'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const TextAlign: StoryFn<ComboboxProps> = (args) => (
  <Stack.Horizontal spacing='spacing12'>
    <Combobox {...args} items={TEXT_ITEMS} value='Option A' textAlign='left' />
    <Combobox {...args} items={TEXT_ITEMS} value='Option A' textAlign='right' />
  </Stack.Horizontal>
);

TextAlign.args = {
  sizeVar: 'M',
  inputMode: 'text',
  width: '160px',
};

TextAlign.parameters = {
  controls: {
    include: ['sizeVar', 'inputMode', 'disabled', 'isError', 'width'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const Numeric: StoryFn<ComboboxProps> = (args) => {
  const [value, setValue] = useState('08');

  return (
    <Stack>
      <Combobox
        {...args}
        items={NUMBER_ITEMS}
        inputMode='numeric'
        value={value}
        onChange={setValue}
        onSelect={setValue}
      />
    </Stack>
  );
};

Numeric.args = {
  sizeVar: 'M',
  textAlign: 'right',
  width: '90px',
  placeholder: 'Enter',
};

Numeric.parameters = {
  controls: {
    include: ['sizeVar', 'textAlign', 'disabled', 'isError', 'width'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};

export const WithTag: StoryFn<ComboboxProps> = (args) => {
  const [hours, setHours] = useState('08');
  const [minutes, setMinutes] = useState('00');

  return (
    <Stack.Horizontal spacing='spacing12'>
      <Combobox
        {...args}
        items={NUMBER_ITEMS}
        inputMode='numeric'
        value={hours}
        onChange={setHours}
        onSelect={setHours}
        tag={<Text typography='caption_700'>시간</Text>}
      />
      <Combobox
        {...args}
        items={NUMBER_ITEMS}
        inputMode='numeric'
        value={minutes}
        onChange={setMinutes}
        onSelect={setMinutes}
        tag={<Text typography='caption_700'>분</Text>}
      />
    </Stack.Horizontal>
  );
};

WithTag.args = {
  sizeVar: 'M',
  textAlign: 'right',
  width: '90px',
};

WithTag.parameters = {
  controls: {
    include: ['sizeVar', 'textAlign', 'disabled', 'isError', 'width'],
  },
  design: {
    type: 'figma',
    url: FIGMA_URL,
  },
};
