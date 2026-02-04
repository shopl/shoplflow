import Dropdown from './Dropdown';
import { DropdownOptionVariants, type DropdownProps, type DropdownSizeVariantType } from './Dropdown.types';
import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { ComponentStage } from '../../styles/Box';
import { useSelect } from '@shoplflow/utils';
import { Menu } from '../Menu';
import { Text } from '../Text';
import { JSONScrollView } from '../../styles/JSONScrollView';
import { IconButton } from '../Buttons';
import { Icon } from '../Icon';
import { EditIcon } from '@shoplflow/shopl-assets';
import { StackContainer } from '../StackContainer';
import { Tag } from '../Tag';

type DropdownMenuOption = { label: string; value: string };

const createDropdownMenuOptions = (count: number, labelFn?: (index: number) => string): DropdownMenuOption[] =>
  Array.from({ length: count }, (_, index) => ({
    label: labelFn ? labelFn(index) : `label${index}`,
    value: `value${index}`,
  }));

type DropdownMenuListProps = {
  data: DropdownMenuOption[];
  isItemSelected: (item: DropdownMenuOption) => boolean;
  onItemClick: (value: string) => void;
};

const DropdownMenuList = ({ data, isItemSelected, onItemClick }: DropdownMenuListProps) => (
  <Dropdown.Content type={'FILL'}>
    {data.map((item) => (
      <Menu key={item.value} isSelected={isItemSelected(item)} onClick={() => onItemClick(item.value)}>
        {item.label}
      </Menu>
    ))}
  </Dropdown.Content>
);

const meta: Meta<typeof Dropdown> = {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
  argTypes: {
    width: {
      control: { type: 'text' },
      defaultValue: '100%',
      description: 'Dropdown 너비',
    },
    option: {
      control: { type: 'select' },
      options: Object.values(DropdownOptionVariants),
      description: 'Dropdown 클릭 옵션',
    },
    trigger: { description: 'Dropdown Trigger Button' },
    popper: { description: 'Dropdown Popper' },
    offset: {
      control: { type: 'number' },
      defaultValue: 4,
      description: 'Dropdown 오프셋',
    },
    placement: {
      control: { type: 'select' },
      options: [
        'top',
        'right',
        'bottom',
        'left',
        'top-start',
        'top-end',
        'right-start',
        'right-end',
        'bottom-start',
        'bottom-end',
        'left-start',
        'left-end',
      ],
      defaultValue: 'bottom-start',
      description: 'Dropdown Content 위치',
    },
    isOpen: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '외부에서 Dropdown 열림 여부 제어',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Dropdown Button 비활성화 여부',
    },
  },
};

export default meta;

type PlaygroundArgs = DropdownProps & {
  sizeVar?: DropdownSizeVariantType;
  isError?: boolean;
  showRightSource?: boolean;
  showLeftSource?: boolean;
  hasOnClear?: boolean;
};

export const Playground: StoryFn<PlaygroundArgs> = (args) => {
  const data = createDropdownMenuOptions(10);

  const { selectedItem, handleToggleSelect, handleReset } = useSelect('MULTI', data, {
    key: 'value',
    max: 3,
  });

  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage justify={'start'}>
        <Dropdown
          {...args}
          disabled={args.disabled}
          option={args.option}
          width={args.width ?? '100%'}
          offset={args.offset}
          trigger={
            <Dropdown.Button
              disabled={args.disabled}
              sizeVar={args.sizeVar ?? 'M'}
              isError={args.isError}
              onClear={args.hasOnClear ? handleReset : undefined}
              placeholder={'값이 없어서 보이는 placeholder'}
              leftSource={
                args.showLeftSource ? (
                  <div style={{ width: '24px', height: '24px', background: '#FFEFEF' }} />
                ) : undefined
              }
              rightSource={
                args.showRightSource ? (
                  <Tag styleVar='TINT' sizeVar='XS' background='neutral150'>
                    +999
                  </Tag>
                ) : undefined
              }
              value={
                selectedItem.length > 0 && (
                  <Text typography='body1_400' color={'neutral700'} textOverflow={'ellipsis'} lineClamp={1}>
                    {selectedItem.map((data) => data.value).join(',')}
                  </Text>
                )
              }
            />
          }
          popper={
            <DropdownMenuList
              data={data}
              isItemSelected={(item) => selectedItem.some((selected) => selected.value === item.value)}
              onItemClick={handleToggleSelect}
            />
          }
        />
      </ComponentStage>
      <Stack.Vertical width={'400px'} height={'100%'} justify={'start'} align={'start'} spacing={'spacing12'}>
        <ComponentStage align={'start'} justify={'start'}>
          <Stack height={'24px'}>
            <Text typography={'body1_700'}>선택된 데이터</Text>
          </Stack>
          <JSONScrollView items={selectedItem} />
        </ComponentStage>
      </Stack.Vertical>
    </Stack.Horizontal>
  );
};

Playground.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  width: '100%',
  placement: 'bottom-start',
  offset: 4,

  sizeVar: 'M' as DropdownSizeVariantType,
  disabled: false,
  isError: false,
  showRightSource: false,
  showLeftSource: false,
  hasOnClear: true,
};

Playground.argTypes = {
  sizeVar: {
    control: { type: 'select' },
    options: ['S', 'M', 'L'],
  },
  isError: {
    control: { type: 'boolean' },
    description: 'Dropdown Button 에러 상태',
  },
  showRightSource: {
    control: { type: 'boolean' },
    description:
      'Playground 전용: rightSource(ReactElement) 표시 여부를 토글합니다. 실제 Dropdown.Button prop은 rightSource입니다.',
    table: {
      category: 'Playground (Trigger Button 데모)',
    },
  },
  showLeftSource: {
    control: { type: 'boolean' },
    description:
      'Playground 전용: leftSource(ReactElement) 표시 여부를 토글합니다. 실제 Dropdown.Button prop은 leftSource입니다.',
    table: {
      category: 'Playground (Trigger Button 데모)',
    },
  },
  hasOnClear: {
    control: { type: 'boolean' },
    description:
      'Playground 전용: onClear(() => void) 핸들러 표시 여부를 토글합니다. 실제 Dropdown.Button prop은 onClear입니다.',
    table: {
      category: 'Playground (Trigger Button 데모)',
    },
  },
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/-v2.0--Shopl-Flow?node-id=407-5154&m=dev',
  },
};

type SmallMediumArgs = DropdownProps & {
  sizeVar?: DropdownSizeVariantType;
  isError?: boolean;
  showRightSource?: boolean;
};

export const SmallMedium: StoryFn<SmallMediumArgs> = (args) => {
  const data = createDropdownMenuOptions(5, (i) => `Option ${i + 1}`);
  const { selectedItem, handleToggleSelect } = useSelect('SINGLE', data, { key: 'value' });

  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown
          {...args}
          width={args.width ?? '200px'}
          option={args.option}
          disabled={args.disabled}
          trigger={
            <Dropdown.Button
              placeholder={'placeholder'}
              sizeVar={args.sizeVar ?? 'S'}
              isError={args.isError}
              disabled={args.disabled}
              value={
                selectedItem && (
                  <Text typography='body1_400' color={'neutral700'} textOverflow={'ellipsis'} lineClamp={1}>
                    {selectedItem.label}
                  </Text>
                )
              }
            />
          }
          popper={
            <DropdownMenuList
              data={data}
              isItemSelected={(item) => selectedItem?.value === item.value}
              onItemClick={handleToggleSelect}
            />
          }
        />
      </ComponentStage>
    </Stack>
  );
};

SmallMedium.args = {
  isOpen: false,
  width: '200px',
  option: 'OUTSIDE_CLICK',
  disabled: false,
  sizeVar: 'S' as DropdownSizeVariantType,
  isError: false,
};

SmallMedium.argTypes = {
  option: {
    control: { type: 'select' },
    options: Object.values(DropdownOptionVariants),
  },
  sizeVar: {
    control: { type: 'select' },
    options: ['S', 'M'],
  },
  isError: {
    control: { type: 'boolean' },
  },
  showRightSource: {
    control: { type: 'boolean' },
  },
};

SmallMedium.parameters = {
  controls: {
    include: ['isOpen', 'width', 'sizeVar', 'option', 'disabled', 'isError'],
  },
};

export const Large: StoryFn<DropdownProps> = (args) => {
  return (
    <StackContainer.Vertical width={'500px'} background='shopl100'>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </StackContainer.Vertical>
  );
};

Large.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  width: '200px',
  trigger: (
    <Dropdown.Button
      placeholder={'placeholder'}
      sizeVar={'L'}
      leftSource={
        <IconButton sizeVar='S' styleVar='GHOST'>
          <Icon iconSource={EditIcon} />
        </IconButton>
      }
    />
  ),
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};

type WithClearButtonArgs = DropdownProps & {
  sizeVar?: DropdownSizeVariantType;
  isError?: boolean;
  showRightSource?: boolean;
};

export const WithClearButton: StoryFn<WithClearButtonArgs> = (args) => {
  const data = createDropdownMenuOptions(5, (i) => `Option ${i + 1}`);

  const { selectedItem, handleToggleSelect, handleReset } = useSelect('SINGLE', data, {
    key: 'value',
  });

  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage justify={'start'}>
        <Dropdown
          {...args}
          disabled={args.disabled}
          option={args.option}
          width={'300px'}
          trigger={
            <Dropdown.Button
              disabled={args.disabled}
              sizeVar={args.sizeVar ?? 'S'}
              isError={args.isError}
              placeholder={'옵션을 선택하세요'}
              onClear={handleReset}
              rightSource={
                args.showRightSource ? (
                  <Tag styleVar='TINT' sizeVar='XS' background='neutral150'>
                    +999
                  </Tag>
                ) : undefined
              }
              value={
                selectedItem && (
                  <Text typography='body1_400' color={'neutral700'} textOverflow={'ellipsis'} lineClamp={1}>
                    {selectedItem.label}
                  </Text>
                )
              }
            />
          }
          popper={
            <DropdownMenuList
              data={data}
              isItemSelected={(item) => selectedItem?.value === item.value}
              onItemClick={handleToggleSelect}
            />
          }
        />
      </ComponentStage>
      <Stack.Vertical width={'400px'} height={'100%'} justify={'start'} align={'start'} spacing={'spacing12'}>
        <ComponentStage align={'start'} justify={'start'}>
          <Stack height={'24px'}>
            <Text typography={'body1_700'}>선택된 데이터</Text>
          </Stack>
          <JSONScrollView items={selectedItem ? [selectedItem] : []} />
        </ComponentStage>
      </Stack.Vertical>
    </Stack.Horizontal>
  );
};

WithClearButton.args = {
  sizeVar: 'S' as DropdownSizeVariantType,
  option: 'OUTSIDE_CLICK',
  disabled: false,
  isError: false,
  showRightSource: false,
};

WithClearButton.argTypes = {
  sizeVar: {
    control: { type: 'select' },
    options: ['S', 'M', 'L'],
  },
  option: {
    control: { type: 'select' },
    options: Object.values(DropdownOptionVariants),
  },
  isError: {
    control: { type: 'boolean' },
  },
  showRightSource: {
    control: { type: 'boolean' },
  },
};

WithClearButton.parameters = {
  controls: {
    include: ['sizeVar', 'option', 'disabled', 'isError', 'showRightSource'],
  },
};
