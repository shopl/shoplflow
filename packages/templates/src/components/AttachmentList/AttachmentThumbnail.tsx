import React from 'react';
import { Icon, StackContainer } from '@shoplflow/base';
import type { AttachmentThumbnailProps } from './AttachmentList.types';

const AttachmentThumbnail: React.FC<AttachmentThumbnailProps> = ({ iconSource, url }) => {
  if (url) {
    return (
      <StackContainer
        width='32px'
        height='32px'
        radius='borderRadius04'
        style={{
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={url}
          alt='thumbnail'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </StackContainer>
    );
  }

  return (
    <StackContainer
      direction='row'
      align='center'
      justify='center'
      width='32px'
      height='32px'
      background='neutral0'
      radius='borderRadius04'
      style={{
        border: '1px solid var(--neutral200)',
        flexShrink: 0,
      }}
    >
      <Icon iconSource={iconSource} sizeVar='S' color='neutral700' />
    </StackContainer>
  );
};

export default AttachmentThumbnail;
