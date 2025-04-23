import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import { Stack } from '../Stack';
import { SearchBar } from './SearchBar';
import type { SearchBarProps, DropdownItem, MemoizedSearchBarComponent } from './SearchBar.types';

const meta: Meta<MemoizedSearchBarComponent> = {
  title: 'COMPONENTS/SearchBar',
  component: SearchBar as unknown as MemoizedSearchBarComponent,
  argTypes: {
    width: {
      control: { type: 'text' },
      description: '너비',
      defaultValue: '100%',
    },
    height: {
      control: { type: 'text' },
      description: '높이',
      defaultValue: '32px',
    },
    useFlexibleWidth: {
      control: { type: 'boolean' },
      description: '유연한 너비 사용 여부',
      defaultValue: false,
    },
    debounceTime: {
      control: { type: 'number' },
      description: '디바운스 시간 (ms)',
      defaultValue: 300,
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'real-time'],
      description: '검색 타입',
      defaultValue: 'default',
    },
  },
} as any;
export default meta;

export const Playground: StoryFn<SearchBarProps & { debounceTime: number; type: 'default' | 'real-time' }> = (args) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItem | undefined>({ label: '전체', value: 'all' });
  const [searchValue, setSearchValue] = useState('');

  const handleDropdownSelect = (item: DropdownItem) => {
    setSelectedItem(item);
  };

  const handleSearch = (value: string) => {
    // eslint-disable-next-line no-console
    console.log('Search:', value, 'at:', new Date().toISOString());
  };

  return (
    <Stack width='500px'>
      <SearchBar {...args}>
        <SearchBar.Category
          dropdownWidth='136px'
          dropdownItems={[
            { label: '전체', value: 'all' },
            { label: '상품', value: 'product' },
            { label: '주문', value: 'order' },
          ]}
          selectedDropdownItem={selectedItem}
          onDropdownSelect={handleDropdownSelect}
          isSelected={true}
        />
        <SearchBar.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
          type={args.type}
          placeholder='검색어를 입력하세요'
          debounceTime={args.debounceTime}
        />
      </SearchBar>
    </Stack>
  );
};

Playground.args = {
  width: '100%',
  height: '32px',
  useFlexibleWidth: false,
  debounceTime: 300,
  type: 'real-time',
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/Shopl-Flow?node-id=5699-10351&p=f&m=dev',
  },
};

Playground.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('textbox');

  // 기본 입력 테스트
  await userEvent.type(input, '테스트 검색어');
  expect(input).toHaveValue('테스트 검색어');
};

export const Default: StoryFn<SearchBarProps & { debounceTime: number }> = (args) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack width='500px'>
      <SearchBar {...args}>
        <SearchBar.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='기본 검색바'
          type='default'
          debounceTime={args.debounceTime}
        />
      </SearchBar>
    </Stack>
  );
};

export const RealTime: StoryFn<SearchBarProps & { debounceTime: number }> = (args) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack width='500px'>
      <SearchBar {...args}>
        <SearchBar.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='실시간 검색'
          type='real-time'
          debounceTime={args.debounceTime}
        />
      </SearchBar>
    </Stack>
  );
};

export const WithCategory: StoryFn<SearchBarProps & { debounceTime: number }> = (args) => {
  const [selectedItem, setSelectedItem] = useState<DropdownItem>({ label: '전체', value: 'all' });
  const [searchValue, setSearchValue] = useState('');

  const handleDropdownSelect = (item: DropdownItem) => {
    setSelectedItem(item);
  };

  return (
    <Stack width='500px'>
      <SearchBar {...args} useFlexibleWidth>
        <SearchBar.Category
          dropdownWidth='136px'
          dropdownItems={[
            { label: '전체', value: 'all' },
            { label: '상품', value: 'product' },
            { label: '주문', value: 'order' },
          ]}
          selectedDropdownItem={selectedItem}
          onDropdownSelect={handleDropdownSelect}
          isSelected={true}
        />
        <SearchBar.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='카테고리 검색'
          debounceTime={args.debounceTime}
        />
      </SearchBar>
    </Stack>
  );
};

WithCategory.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole('textbox');

  // 검색창 클릭하여 카테고리 버튼이 나타나도록 함
  await userEvent.click(input);

  // 카테고리 버튼이 나타날 때까지 기다림
  const categoryButton = await canvas.findByText('전체').then((text) => {
    const button = text.closest('button');
    if (!button) {
      throw new Error('Button not found');
    }
    return button;
  });

  // 카테고리 선택 테스트
  await userEvent.click(categoryButton);
  const productOption = within(document.body).getByText('상품');
  await userEvent.click(productOption);
  expect(categoryButton).toHaveTextContent('상품');

  // 검색어 입력 테스트
  await userEvent.type(input, '상품');
  expect(input).toHaveValue('상품');
};

export const FlexibleWidth: StoryFn<SearchBarProps & { debounceTime: number }> = (args) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack width='500px'>
      <SearchBar {...args} useFlexibleWidth width='500px'>
        <SearchBar.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='유연한 너비'
          debounceTime={args.debounceTime}
        />
      </SearchBar>
    </Stack>
  );
};

export const Disabled: StoryFn<SearchBarProps & { debounceTime: number }> = (args) => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack width='500px'>
      <SearchBar {...args}>
        <SearchBar.Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder='비활성화된 검색바'
          disabled
          debounceTime={args.debounceTime}
        />
      </SearchBar>
    </Stack>
  );
};
