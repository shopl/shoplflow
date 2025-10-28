import React from 'react';
import AttachmentItemSingle from './AttachmentItemSingle';
import AttachmentItemMulti from './AttachmentItemMulti';
import AttachmentThumbnail from './AttachmentThumbnail';
import type { AttachmentItemProps } from './AttachmentList.types';

const AttachmentItem: React.FC<AttachmentItemProps> & {
  Single: typeof AttachmentItemSingle;
  Multi: typeof AttachmentItemMulti;
  Thumbnail: typeof AttachmentThumbnail;
} = ({ children }) => {
  return <>{children}</>;
};

AttachmentItem.Single = AttachmentItemSingle;
AttachmentItem.Multi = AttachmentItemMulti;
AttachmentItem.Thumbnail = AttachmentThumbnail;

export default AttachmentItem;
