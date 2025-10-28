import React from 'react';
import { Text, IconButton, Icon, StackContainer } from '@shoplflow/base';
import type { AttachmentItemMultiProps } from './AttachmentList.types';
import { DeleteIcon } from '@shoplflow/shopl-assets';

const AttachmentItemMulti: React.FC<AttachmentItemMultiProps> = ({ item, children, thumbnail, onDelete }) => {
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <StackContainer.Horizontal
      align='center'
      width='inherit'
      minHeight='48px'
      padding='8px'
      spacing='spacing08'
      radius='borderRadius08'
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(153, 153, 153, 0.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      {thumbnail}
      <StackContainer.Vertical flex='1' align='flex-start' height='100%'>
        {item ? (
          <>
            <Text typography='body1_400' color='neutral700' lineClamp={1} textOverflow='ellipsis' whiteSpace='nowrap'>
              {item.name}
            </Text>
            <Text typography='caption_400' color='neutral400'>
              {formatFileSize(item.size)}
            </Text>
          </>
        ) : (
          children
        )}
      </StackContainer.Vertical>

      <IconButton sizeVar='S' styleVar='GHOST'>
        <Icon
          iconSource={DeleteIcon}
          sizeVar='S'
          color='neutral350'
          onClick={(e: React.MouseEvent<unknown>) => onDelete?.(e as React.MouseEvent<HTMLButtonElement>)}
        />
      </IconButton>
    </StackContainer.Horizontal>
  );
};

export default AttachmentItemMulti;
