import Dropdown from './Dropdown';
import type { DropdownProps } from './Dropdown.types';
import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { ComponentStage } from '../../styles/Box';
import { Text } from '../Text';
import { useSelect } from '@shoplflow/utils';

export default {
  title: 'COMPONENTS/Dropdown',
  component: Dropdown,
};

export const Playground: StoryFn<DropdownProps> = (args) => {
  const data = new Array(10).fill(0).map((_, i) => `name${i}`);

  const { selectedItem, handleToggleSelect } = useSelect<string>(data, 'MULTI');
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Dropdown
          {...args}
          option={'CLICK'}
          width={'100%'}
          trigger={<Dropdown.Button placeholder={'값이 없어요'} value={selectedItem.map((data) => data).join(',')} />}
          popper={
            <Dropdown.Content type={'FILL'}>
              {data.map((item) => (
                <Text key={item} onClick={() => handleToggleSelect(item)}>
                  {item}
                </Text>
              ))}
            </Dropdown.Content>
          }
        />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  trigger: <Dropdown.Button placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
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
  option: 'OUTSIDE_CLICK',
  trigger: <Dropdown.Button placeholder={'0'} sizeVar={'S'} />,
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
  trigger: <Dropdown.Button disabled placeholder={'Dropdown 안에 InputButton을 넣었어요.'} />,
  popper: <Dropdown.Content type={'FILL'}>Content</Dropdown.Content>,
};
