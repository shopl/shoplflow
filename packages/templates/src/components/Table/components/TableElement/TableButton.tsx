import type { ReactNode, ButtonHTMLAttributes } from 'react';
import { Text } from '@shoplflow/base';
import { TableBtn } from './TableElement.styled';

type TableButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // 모든 버튼 속성을 포함
  leftSource?: ReactNode;
  children: string;
  rightSource?: ReactNode;
};

export const TableButton = ({ children, leftSource, rightSource, ...buttonProps }: TableButtonProps) => {
  return (
    <TableBtn {...buttonProps}>
      {leftSource && leftSource}
      <Text typography='body2_500' lineClamp={2}>
        {children}
      </Text>
      {rightSource && rightSource}
    </TableBtn>
  );
};
