import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Tag from './Tag';
import { TagSizeVariants, TagStyleVariants } from './Tag.types';
import { colorTokens } from '../../styles';

const meta = {
  title: 'COMPONENTS/Tag',
  component: Tag,
  argTypes: {
    sizeVar: {
      options: Object.values(TagSizeVariants),
      control: { type: 'select' },
      description: '태그의 크기를 설정합니다.',
      defaultValue: 'M',
    },
    styleVar: {
      options: Object.values(TagStyleVariants),
      control: { type: 'select' },
      description: '태그의 스타일을 설정합니다.',
      defaultValue: 'SOLID',
    },
    color: {
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      description: '태그의 색상을 설정합니다. (styleVar에 따라 적용)',
    },
    children: {
      control: { type: 'text' },
      description: '태그에 표시할 내용을 설정합니다.',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;

export const Playground: Story = {
  args: {
    sizeVar: 'M',
    styleVar: 'SOLID',
    children: '태그에요',
  },
  render: (args) => (
    <Stack>
      <Tag {...args} />
    </Stack>
  ),
};

export const Solid: Story = {
  args: {
    sizeVar: 'M',
    styleVar: 'SOLID',
    children: 'SOLID',
  },
  render: (args) => (
    <Stack>
      <Tag {...args} />
    </Stack>
  ),
};

export const Tint: Story = {
  args: {
    sizeVar: 'M',
    styleVar: 'TINT',
    children: 'TINT',
  },
  render: (args) => (
    <Stack>
      <Tag {...args} />
    </Stack>
  ),
};

export const Line: Story = {
  args: {
    sizeVar: 'M',
    styleVar: 'LINE',
    children: 'LINE',
  },
  render: (args) => (
    <Stack>
      <Tag {...args} />
    </Stack>
  ),
};

export const SmallSize: Story = {
  args: {
    sizeVar: 'S',
    styleVar: 'SOLID',
    children: 'Small',
  },
  render: (args) => (
    <Stack>
      <Tag {...args} />
    </Stack>
  ),
};

export const ExtraSmallSize: Story = {
  args: {
    sizeVar: 'XS',
    styleVar: 'TINT',
    children: 'XS',
  },
  render: (args) => (
    <Stack>
      <Tag {...args} />
    </Stack>
  ),
};
