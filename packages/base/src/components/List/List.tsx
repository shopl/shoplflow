import React from 'react';
import { StyledList, StyledText2Rows } from './List.styled';
import type { ListProps, ListText2RowsProps } from './List.types';
import { Stack } from '../Stack';
import { Text } from '../Text';

const List = ({ children, leftSource, rightSource, ...rest }: ListProps) => {
  const LeftSourceClone = leftSource
    ? React.cloneElement(leftSource as React.ReactElement, {
        ...rest,
      })
    : leftSource;

  if (!children && rightSource) {
    throw new Error('RightSource는 children이 필수로 포함되어야합니다.');
  }

  return (
    <StyledList data-shoplflow={'List'} {...rest}>
      {LeftSourceClone && LeftSourceClone}
      <Stack.Horizontal height={'30px'} width={'100%'} spacing={'spacing08'} align={'center'}>
        {children}
      </Stack.Horizontal>
      {rightSource && rightSource}
    </StyledList>
  );
};

export const Text2Rows = ({ title, subTitle }: ListText2RowsProps) => {
  return (
    <StyledText2Rows>
      <Text typography={'body1_500'} color={'neutral700'} lineClamp={1} wordBreak={'break-all'}>
        {title}
      </Text>
      {subTitle && (
        <Text typography={'body2_400'} color={'neutral400'} lineClamp={1} wordBreak={'break-all'}>
          {subTitle}
        </Text>
      )}
    </StyledText2Rows>
  );
};

List.Text2Rows = Text2Rows;

export default List;
