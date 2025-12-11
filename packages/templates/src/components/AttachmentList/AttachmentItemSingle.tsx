import React from 'react';
import { Text, IconButton, Icon, StackContainer } from '@shoplflow/base';
import type { AttachmentItemSingleProps } from './AttachmentList.types';
import { DeleteIcon } from '@shoplflow/shopl-assets';
import { StyledSeparator } from './AttachmentList.styled';

const AttachmentItemSingle: React.FC<AttachmentItemSingleProps> = ({ item, onClick, onDelete, lineClamp = 1 }) => {
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
      <StackContainer.Horizontal
        align='center'
        spacing='spacing04'
        onClick={onClick}
        style={onClick ? { cursor: 'pointer' } : undefined}
      >
        <Text typography='body2_400' color='neutral700' lineClamp={lineClamp} textOverflow='ellipsis'>
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
            <Text typography='body2_400' color='neutral400' whiteSpace='nowrap'>
              {formatFileSize(item.size)}
            </Text>
          </>
        )}
      </StackContainer.Horizontal>
      {onDelete && (
        <IconButton sizeVar='S' styleVar='GHOST'>
          <Icon
            iconSource={DeleteIcon}
            sizeVar='S'
            color='neutral350'
            onClick={(e: React.MouseEvent<unknown>) => onDelete?.(e as React.MouseEvent<HTMLButtonElement>)}
          />
        </IconButton>
      )}
    </StackContainer.Horizontal>
  );
};

export default AttachmentItemSingle;
