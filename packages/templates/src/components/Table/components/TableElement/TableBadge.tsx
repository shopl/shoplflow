import { StackContainer, Text } from '@shoplflow/base';
import type { ReactNode } from 'react';

type TableBadgeProps = {
  children: ReactNode;
};

export const TableBadge = ({ children }: TableBadgeProps) => {
  return (
    <StackContainer radius={'borderRadius04'} background={'neutral150'} padding={'2px 4px'}>
      <Text typography={'body2_400'}>{children}</Text>
    </StackContainer>
  );
};
