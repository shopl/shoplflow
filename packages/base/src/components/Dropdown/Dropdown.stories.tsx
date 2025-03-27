import Dropdown from './Dropdown';
import { DropdownOptionVariants, type DropdownProps } from './Dropdown.types';
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

const meta: Meta<typeof Dropdown> = {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
  argTypes: {
    width: {
      control: { type: 'text' },
      description: 'Dropdown width',
      defaultValue: '100%',
    },
    option: {
      control: { type: 'select' },
      description: 'Dropdown options',
      options: Object.values(DropdownOptionVariants),
    },
    trigger: {
      description: 'Dropdown trigger 컴포넌트',
    },
    popper: {
      description: 'Dropdown popper 컴포넌트',
    },
    disabled: {
      description: 'Dropdown trigger 비활성화 여부',
    },
  },
};

export default meta;

export const Playground: StoryFn<DropdownProps> = (args) => {
  const data = new Array(10).fill(0).map((_, index) => {
    return {
      label: `label${index}`,
      value: `value${index}`,
    };
  });

  const { selectedItem, handleToggleSelect } = useSelect('MULTI', data, {
    key: 'value',
    max: 3,
  });

  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage justify={'start'}>
        <Dropdown
          {...args}
          disabled={args.disabled}
          option={'OUTSIDE_CLICK'}
          width={'100%'}
          trigger={
            <Dropdown.Button
              disabled={args.disabled}
              placeholder={'값이 없어요'}
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
            <Dropdown.Content type={'FILL'}>
              {data.map((item) => {
                const isSelected = selectedItem.some((selected) => selected.value === item.value);
                return (
                  <Menu key={item.value} isSelected={isSelected} onClick={() => handleToggleSelect(item.value)}>
                    {item.label}
                  </Menu>
                );
              })}
            </Dropdown.Content>
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
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  disabled: false,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-4435&m=dev',
  },
};

export const FillContent: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

FillContent.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};

export const Small: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Small.args = {
  isOpen: false,
  width: '200px',
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'0'} sizeVar={'S'} />,
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
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

export const Disabled: StoryFn<DropdownProps> = (args) => {
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown {...args} />
      </ComponentStage>
    </Stack>
  );
};

Disabled.args = {
  isOpen: false,
  option: 'OUTSIDE_CLICK',
  trigger: (
    <Dropdown.Button
      disabled
      placeholder={'Dropdown 안에 InputButton을 넣었어요.'}
      leftSource={
        <IconButton sizeVar='S' styleVar='GHOST'>
          <Icon iconSource={EditIcon} />
        </IconButton>
      }
    />
  ),
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};
