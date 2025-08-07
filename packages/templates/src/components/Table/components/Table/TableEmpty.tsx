import React from 'react';

type TableEmptyProps = {
  children?: React.ReactNode;
};

export const TableEmpty = ({ children }: TableEmptyProps) => {
  // 이 컴포넌트는 마커로만 사용되며 children을 그대로 반환합니다.
  // TableMain에서 이 컴포넌트의 존재 여부를 확인하고 적절히 처리합니다.
  return <>{children}</>;
};
