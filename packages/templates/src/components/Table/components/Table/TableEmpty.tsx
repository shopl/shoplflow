import type React from 'react';

import { StackContainer } from '@shoplflow/base';

type TableEmptyProps = {
  children?: React.ReactNode;
  minHeight?: string;
};

export const TableEmpty = ({ children, minHeight }: TableEmptyProps) => {
  // 이 컴포넌트는 마커로만 사용되며 children을   그대로 반환합니다.
  // TableMain에서 이 컴포넌트의 존재 여부를 확인하고 적절히 처리합니다.
  return (
    <StackContainer width='100%' minHeight={minHeight} height='max-content' align='center' justify='center'>
      {children}
    </StackContainer>
  );
};
