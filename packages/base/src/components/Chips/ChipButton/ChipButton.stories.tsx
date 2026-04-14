import type { Meta, StoryObj } from '@storybook/react-vite';
import ChipButton from './ChipButton';
import type { ChipButtonProps } from './ChipButton.types';
import { Stack } from '../../Stack';
import { ChipButtonSizeVariants, ChipButtonStyleVariants } from './ChipButton.types';
import { ComponentStage } from '../../../styles/Box';
import { colorTokens } from '../../../styles';
import { Text } from '../../Text';
import { Icon } from '../../Icon';
import { SearchIcon, EditIcon } from '@shoplflow/shopl-assets';

/** 스토리 컨트롤용 플레이스홀더(실제 토큰 키 아님). ChipButton에는 `undefined`로 넘김. */
const SELECT_COLOR_TOKEN_DEFAULT = '— 기본값 —' as const;

const chipButtonColorTokenSelectOptions = [
  SELECT_COLOR_TOKEN_DEFAULT,
  ...Object.keys(colorTokens).slice().sort(),
] as const;

type ChipButtonStoryArgs = Omit<ChipButtonProps, 'selectedBackground' | 'selectedBorderColor'> & {
  selectedBackground?: ChipButtonProps['selectedBackground'] | typeof SELECT_COLOR_TOKEN_DEFAULT;
  selectedBorderColor?: ChipButtonProps['selectedBorderColor'] | typeof SELECT_COLOR_TOKEN_DEFAULT;
  showLeftSource?: boolean;
  showRightSource?: boolean;
};

function resolveChipButtonColorStoryArgs(args: ChipButtonStoryArgs): ChipButtonProps {
  const toBackground = (v: ChipButtonStoryArgs['selectedBackground']): ChipButtonProps['selectedBackground'] => {
    if (v === undefined || v === SELECT_COLOR_TOKEN_DEFAULT) {
      return undefined;
    }
    return v;
  };

  const toBorder = (v: ChipButtonStoryArgs['selectedBorderColor']): ChipButtonProps['selectedBorderColor'] => {
    if (v === undefined || v === SELECT_COLOR_TOKEN_DEFAULT) {
      return undefined;
    }
    return v;
  };

  return {
    ...args,
    selectedBackground: toBackground(args.selectedBackground),
    selectedBorderColor: toBorder(args.selectedBorderColor),
  } as ChipButtonProps;
}

const meta = {
  title: 'COMPONENTS/Chips/ChipButton',
  component: ChipButton,
  argTypes: {
    text: {
      control: { type: 'text' },
      description: '칩 버튼에 표시할 텍스트를 설정합니다.',
      defaultValue: 'ChipButton',
    },
    onClick: {
      action: 'clicked',
      description: '칩 버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
    },
    styleVar: {
      options: Object.values(ChipButtonStyleVariants),
      control: 'select',
      description: '칩 버튼 스타일을 설정합니다. styleVar에 따라 기준 속성이 변경됩니다.',
      defaultValue: ChipButtonStyleVariants.LINE,
    },
    sizeVar: {
      options: Object.values(ChipButtonSizeVariants),
      control: 'select',
      description: '칩 버튼 사이즈를 설정합니다.',
      defaultValue: ChipButtonSizeVariants.S,
    },
    disabled: {
      control: { type: 'boolean' },
      description: '비활성화 여부를 설정합니다.',
      defaultValue: false,
    },
    isSelected: {
      control: { type: 'boolean' },
      description: '선택(pressed) 상태 스타일을 적용합니다.',
      defaultValue: false,
    },
    count: {
      control: { type: 'text' },
      description:
        '칩 옆에 표시할 카운트(숫자·문자열). 비우면 미표시. `children`이 있으면 ChipButton에서 카운트는 렌더되지 않습니다.',
    },
    selectedBackground: {
      options: [...chipButtonColorTokenSelectOptions],
      control: 'select',
      description:
        '선택 상태 배경색 토큰. 「기본값」이면 사이즈별 디자인 토큰. `isSelected`가 true일 때만 화면에 반영됩니다.',
    },
    selectedBorderColor: {
      options: [...chipButtonColorTokenSelectOptions],
      control: 'select',
      description: '선택 상태 테두리 색 토큰. 「기본값」이면 neutral300. `isSelected`가 true일 때만 화면에 반영됩니다.',
    },
    showLeftSource: {
      control: { type: 'boolean' },
      description:
        'Playground 전용: leftSource(ReactElement) 표시 여부를 토글합니다. 실제 ChipButton prop은 leftSource입니다.',
      table: { category: 'Playground (데모)' },
    },
    showRightSource: {
      control: { type: 'boolean' },
      description:
        'Playground 전용: rightSource(ReactElement) 표시 여부를 토글합니다. 실제 ChipButton prop은 rightSource입니다.',
      table: { category: 'Playground (데모)' },
    },
  },
} satisfies Meta<typeof ChipButton>;

export default meta;

type Story = StoryObj<typeof ChipButton>;

const WithStage = ({ children }: { children: React.ReactNode }) => (
  <Stack width='200px'>
    <ComponentStage>{children}</ComponentStage>
  </Stack>
);

export const Playground: Story = {
  args: {
    text: '샤플플로우',
    disabled: false,
    styleVar: 'LINE',
    sizeVar: 'S',
    selectedBackground: SELECT_COLOR_TOKEN_DEFAULT,
    selectedBorderColor: SELECT_COLOR_TOKEN_DEFAULT,
    showLeftSource: false,
    showRightSource: false,
    count: '',
  } as Story['args'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=14505-5698&m=dev',
    },
  },
  render: (args) => {
    const { showLeftSource, showRightSource, ...rest } = args as ChipButtonStoryArgs;
    return (
      <WithStage>
        <ChipButton
          {...resolveChipButtonColorStoryArgs(rest)}
          leftSource={showLeftSource ? <Icon iconSource={SearchIcon} sizeVar='S' /> : undefined}
          rightSource={showRightSource ? <Icon iconSource={EditIcon} sizeVar='XS' /> : undefined}
        />
      </WithStage>
    );
  },
};

export const Line: Story = {
  args: {
    text: 'LINE',
    styleVar: 'LINE',
    sizeVar: 'S',
    disabled: false,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)} />
    </WithStage>
  ),
};

export const SizeXS: Story = {
  args: {
    text: 'Size XS',
    styleVar: 'LINE',
    sizeVar: 'XS',
    disabled: false,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)} />
    </WithStage>
  ),
};

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    styleVar: 'LINE',
    sizeVar: 'S',
    disabled: true,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)} />
    </WithStage>
  ),
};

export const Selected: Story = {
  args: {
    text: '선택됨',
    styleVar: 'LINE',
    sizeVar: 'S',
    isSelected: true,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)} />
    </WithStage>
  ),
};

export const SelectedXS: Story = {
  args: {
    text: '선택 XS',
    styleVar: 'LINE',
    sizeVar: 'XS',
    isSelected: true,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)} />
    </WithStage>
  ),
};

export const SelectedCustomColors: Story = {
  args: {
    text: '커스텀 선택',
    styleVar: 'LINE',
    sizeVar: 'S',
    isSelected: true,
    selectedBackground: 'ocean100',
    selectedBorderColor: 'ocean300',
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)} />
    </WithStage>
  ),
};

export const WithCustomChildren: Story = {
  args: {
    styleVar: 'LINE',
    sizeVar: 'S',
    isSelected: false,
  },
  render: (args) => (
    <WithStage>
      <ChipButton {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)}>
        <Text typography='body2_400'>커스텀 children</Text>
      </ChipButton>
    </WithStage>
  ),
};

export const WithLeftRightSource: Story = {
  args: {
    styleVar: 'LINE',
    sizeVar: 'S',
    text: '아이콘 포함',
  },
  render: (args) => (
    <WithStage>
      <ChipButton
        {...resolveChipButtonColorStoryArgs(args as ChipButtonStoryArgs)}
        leftSource={<Icon iconSource={SearchIcon} sizeVar='S' />}
        rightSource={<Icon iconSource={EditIcon} sizeVar='XS' />}
      />
    </WithStage>
  ),
};
