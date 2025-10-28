import React, { createContext, useContext } from 'react';
import type { StackContainerOptionProps } from '@shoplflow/base';
import { StackContainer } from '@shoplflow/base';
import type { AttachmentListProps } from './AttachmentList.types';

interface AttachmentListContextValue {
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
}

const AttachmentListContext = createContext<AttachmentListContextValue>({});

export const useAttachmentListContext = () => {
  const context = useContext(AttachmentListContext);
  return context;
};

const AttachmentList: React.FC<AttachmentListProps & Pick<StackContainerOptionProps, 'width'>> = ({
  onDelete,
  children,
  ...rest
}) => {
  const contextValue: AttachmentListContextValue = {
    onDelete,
  };

  return (
    <AttachmentListContext.Provider value={contextValue}>
      <StackContainer.Horizontal spacing='spacing08' {...rest}>
        {children}
      </StackContainer.Horizontal>
    </AttachmentListContext.Provider>
  );
};

export default AttachmentList;
