import type { IconSource } from '@shoplflow/shopl-assets';

export interface AttachmentItemData {
  name: string;
  extension?: string;
  size?: number; // bytes
}

export interface AttachmentListProps {
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface AttachmentItemSingleProps {
  item: AttachmentItemData;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AttachmentItemMultiProps {
  item?: AttachmentItemData | null;
  thumbnail?: React.ReactNode;
  children?: React.ReactNode;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AttachmentThumbnailProps {
  iconSource?: IconSource;
  url?: string;
  onDelete?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface AttachmentItemProps {
  children: React.ReactNode;
}
