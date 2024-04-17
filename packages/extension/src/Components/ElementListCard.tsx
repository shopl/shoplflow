import React from 'react';
import { ColorTokens, Stack, Text } from '@shoplflow/base';
interface ElementListCardProps {
  title: string;
  value: string;
  valueColor?: ColorTokens;
}

const ElementListCard = ({ title, value, valueColor }: ElementListCardProps) => {
  return (
    <Stack.Horizontal
      width={'100%'}
      height={'20px'}
      justify={'space-between'}
      align={'center'}
      spacing={'spacing04'}
      style={{
        padding: '16px 20px',
        boxSizing: 'border-box',
      }}>
      <Text
        typography={'body1_400'}
        lineClamp={1}
        color={valueColor}
        style={{
          width: '100px',
        }}>
        {title}
      </Text>
      <Text typography={'body1_700'}>{value}</Text>
    </Stack.Horizontal>
  );
};

export default ElementListCard;
