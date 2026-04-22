import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import { Text } from '../Text';
import Menu from './Menu';
import { MenuSizeVariants, type MenuProps } from './Menu.types';
import { ComponentStage } from '../../styles/Box';
import {
  buildComponentDocsMarkdown,
  getLatestComponentVersion,
  useSelect,
  type ComponentChangelogEntry,
} from '@shoplflow/utils';
import { Checkbox } from '../ControlButtons';
import { JSONScrollView } from '../../styles/JSONScrollView';
import { ScrollArea } from '../ScrollArea';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Menu',
  component: Menu,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Menu 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    sizeVar: {
      control: 'select',
      options: Object.values(MenuSizeVariants),
    },
  },
} satisfies Meta<typeof Menu>;

export default meta;

export const Playground: StoryFn<MenuProps> = (args) => {
  const newArray: Array<{ name: string }> = new Array(10).fill(0).map((item, index) => {
    return {
      name: '메뉴메뉴' + index,
      other: '다른 데이터' + index,
    };
  });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'name',
  });
  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage>
        <ScrollArea>
          <Stack as={'ul'} width={'100%'}>
            {newArray.map((item, index) => {
              return (
                <Menu {...args} onClick={() => handleToggleSelect(item.name)} key={index}>
                  {item.name}
                </Menu>
              );
            })}
          </Stack>
        </ScrollArea>
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
  disabled: false,
  sizeVar: 'XS',
};

export const WithControls: StoryFn<MenuProps> = (args) => {
  const newArray: Array<{ name: string }> = new Array(10).fill(0).map((item, index) => {
    return {
      name: '메뉴' + index,
    };
  });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'name',
  });
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            const isSelected = selectedItem.some((selectedItem) => selectedItem.name === item.name);
            return (
              <Menu
                {...args}
                isSelected={isSelected}
                key={index}
                onClick={() => handleToggleSelect(item.name)}
                leftSource={<Stack width={'24px'} height={'24px'} background={'red200'} />}
              >
                {item.name}
              </Menu>
            );
          })}
        </Stack>
      </ComponentStage>
    </Stack>
  );
};

WithControls.args = {
  disabled: false,
  sizeVar: 'XS',
};

export const WithCheckbox: StoryFn<MenuProps> = (args) => {
  const newArray: Array<{ name: string }> = new Array(10).fill(0).map((item, index) => {
    return {
      name: '메뉴' + index,
    };
  });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'name',
  });
  return (
    <Stack width={'500px'}>
      <ComponentStage>
        <Stack as={'ul'} width={'100%'}>
          {newArray.map((item, index) => {
            const isSelected = selectedItem.some((selectedItem) => selectedItem.name === item.name);
            return (
              <Menu
                {...args}
                isSelected={isSelected}
                key={index}
                onClick={() => handleToggleSelect(item.name)}
                leftSource={<Checkbox />}
              >
                {item.name}
              </Menu>
            );
          })}
        </Stack>
      </ComponentStage>
    </Stack>
  );
};

WithCheckbox.args = {
  disabled: false,
  sizeVar: 'XS',
};
