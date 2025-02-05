import React from 'react';

import type { StoryFn } from '@storybook/react';
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

export default {
  title: 'COMPONENTS/Inputs/SelectInputButton',
  component: SelectInputButton,
};

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
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=2566-9420&m=dev',
  },
};
