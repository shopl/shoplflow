import React from 'react';

import type { StoryFn, Meta } from '@storybook/react';
import { Stack } from '../../Stack';
import SelectInputButton from './SelectInputButton';
import type { SelectInputButtonProps } from './SelectInputButton.types';
import { useSelect } from '@shoplflow/utils';
import List from '../../List/List';
import { Checkbox } from '../../ControlButtons';
import { Text } from '../../Text';
import { Icon } from '../../Icon';
import { IconButton } from '../../Buttons';
import { RightArrowIcon } from '@shoplflow/shopl-assets';
import { ComponentStage } from '../../../styles/Box';

const meta: Meta<typeof SelectInputButton> = {
  title: 'COMPONENTS/Inputs/SelectInputButton',
  component: SelectInputButton,
  argTypes: {
    sizeVar: {
      options: ['S', 'M'],
      control: { type: 'radio' },
      description: '컴포넌트의 사이즈를 설정합니다.',
      defaultValue: 'M',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '컴포넌트의 비활성화 여부를 설정합니다.',
      defaultValue: false,
    },
    isSelected: {
      control: { type: 'boolean' },
      description: '컴포넌트의 선택 상태를 설정합니다.',
      defaultValue: false,
    },
    placeholder: {
      control: { type: 'text' },
      description: '입력 필드의 placeholder를 설정합니다.',
    },
    label: {
      control: { type: 'text' },
      description: '받은 value 중 label로 보여줄 값을 설정합니다.',
    },
    width: {
      control: { type: 'text' },
      description: '컴포넌트의 너비를 설정합니다.',
      defaultValue: '100%',
    },
    onClick: {
      action: 'clicked',
      description: '컴포넌트를 클릭했을 때 실행되는 함수를 설정합니다.',
    },
    onClear: {
      action: 'cleared',
      description: '값이 삭제될 때 실행되는 함수를 설정합니다.',
    },
    onMouseEnter: {
      action: 'mouse entered',
      description: '마우스가 컴포넌트 위로 올라갔을 때 실행되는 함수를 설정합니다.',
    },
    onMouseLeave: {
      action: 'mouse left',
      description: '마우스가 컴포넌트에서 벗어났을 때 실행되는 함수를 설정합니다.',
    },
  },
};

export default meta;

export const Playground: StoryFn<SelectInputButtonProps> = (args) => {
  const newArray: Array<{ title: string; subTitle: string; other: string }> = new Array(10)
    .fill(0)
    .map((item, index) => {
      return {
        title: '제목' + index,
        subTitle: '서브 타이틀' + index,
        other: '다른 데이터' + index,
      };
    });
  const { selectedItem, handleToggleSelect } = useSelect('MULTI', newArray, {
    key: 'title',
  });
  return (
    <Stack width={'400px'}>
      <ComponentStage>
        <SelectInputButton
          {...args}
          value={selectedItem}
          label={'title'}
          rightSource={
            <IconButton styleVar={'GHOST'} sizeVar={'S'}>
              <Icon iconSource={RightArrowIcon} color={'neutral350'} />
            </IconButton>
          }
        />
      </ComponentStage>
      <Stack as={'ul'} width={'100%'}>
        {newArray.map((item, index) => {
          const isSelected = selectedItem.some((selected) => selected.title === item.title);
          return (
            <List
              key={index}
              isSelected={isSelected}
              onClick={() => {
                handleToggleSelect(item.title);
              }}
              leftSource={<Checkbox />}
              rightSource={<Text whiteSpace={'nowrap'}>{item.other}</Text>}
            >
              <Stack height={'32px'} width={'32px'} background={'neutral300'} radius={'borderRadius16'} />
              <List.Text2Rows title={item.title} subTitle={item.subTitle} />
            </List>
          );
        })}
      </Stack>
    </Stack>
  );
};

Playground.args = {
  placeholder: 'placeholder',
  sizeVar: 'M',
  disabled: false,
  isSelected: false,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/Shopl-Flow?node-id=2566-9420&t=ADdPrJFiu8paA5bB-4',
  },
};
