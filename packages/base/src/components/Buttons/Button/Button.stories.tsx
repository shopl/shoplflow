import type { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import { ButtonSizeVariants, ButtonStyleVariants } from './Button.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { colorTokens } from '../../../styles';
import { Icon } from '../../../components/Icon';
import { EditIcon } from '@shoplflow/shopl-assets';

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  argTypes: {
    styleVar: {
      options: Object.values(ButtonStyleVariants),
      control: { type: 'select' },
      description: '버튼 타입',
      defaultValue: 'primary',
    },
    sizeVar: {
      options: Object.values(ButtonSizeVariants),
      control: { type: 'radio' },
      description: '버튼 사이즈',
      defaultValue: 'M',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      defaultValue: 'primary400',
    },
    onClick: { action: 'clicked' },
    lineClamp: {
      control: { type: 'number' },
      defaultValue: undefined,
    },
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

export const Primary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Primary.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const Secondary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Secondary.args = {
  styleVar: 'SECONDARY',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const Solid: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Solid.args = {
  styleVar: 'SOLID',
  sizeVar: 'M',
  children: '버튼',
  color: 'neutral300',
  disabled: false,
  leftSource: <Icon sizeVar='S' iconSource={EditIcon} />,
};

export const Ghost: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Ghost.args = {
  styleVar: 'GHOST',
  sizeVar: 'M',
  children: '버튼',
  disabled: false,
};

export const SmallSize: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

SmallSize.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'S',
  children: '버튼',
  disabled: false,
  leftSource: <Icon sizeVar='XS' iconSource={EditIcon} />,
};
