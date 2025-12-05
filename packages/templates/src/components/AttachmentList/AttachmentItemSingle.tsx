import React from 'react';
import { Text, IconButton, Icon, StackContainer } from '@shoplflow/base';
import type { AttachmentItemSingleProps } from './AttachmentList.types';
import { DeleteIcon } from '@shoplflow/shopl-assets';
import { StyledSeparator } from './AttachmentList.styled';

const AttachmentItemSingle: React.FC<AttachmentItemSingleProps> = ({ item, onDelete }) => {
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
    <StackContainer.Horizontal width='inherit' align='center' padding='0'>
      <StackContainer.Horizontal align='center' spacing='spacing04'>
        <Text typography='body2_400' color='neutral700' lineClamp={1} textOverflow='ellipsis' whiteSpace='nowrap'>
          {item.name}
        </Text>
        {item.extension && (
          <>
            <StyledSeparator />
            <Text typography='body2_400' color='neutral400'>
              {item.extension}
            </Text>
          </>
        )}
        {item.size && (
          <>
            <StyledSeparator />
            <Text typography='body2_400' color='neutral400'>
              {formatFileSize(item.size)} adsfasdf
            </Text>
          </>
        )}
      </StackContainer.Horizontal>
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

export default AttachmentItemSingle;
