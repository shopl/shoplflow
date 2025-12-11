import React from 'react';
import type { StoryFn } from '@storybook/react';
import { AttachmentList, AttachmentItem } from './index';
import { AttachmentIcon as AttachmentIcon } from '@shoplflow/shopl-assets';

export default {
  title: 'Components/AttachmentList',
  component: AttachmentList,
  argTypes: {
    onDelete: { action: 'deleted' },
  },
};

const mockItem = {
  name: 'Schedule_Bulk_20241015145927',
  extension: 'Excel',
  size: 1363148, // 1.3MB
};

const mockPdfItem = {
  name: '20220722.pdf',
  extension: 'PDF',
  size: 1258291, // 1.2MB
};

const Template: StoryFn<typeof AttachmentList> = (args) => (
  <AttachmentList {...args}>
    <AttachmentItem.Single item={mockItem} />
  </AttachmentList>
);

export const Playground: StoryFn<typeof AttachmentList> = Template.bind({});

export const SingleVariant: StoryFn<typeof AttachmentList> = (args) => {
  const { filename, lineClamp, extension, size } = args as any;
  const item = {
    name: filename || mockItem.name,
    extension: extension || mockItem.extension,
    size: size || mockItem.size,
  };

  return (
    <div style={{ width: '500px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      <AttachmentList>
        <AttachmentItem.Single item={item} lineClamp={lineClamp} />
      </AttachmentList>
    </div>
  );
};

SingleVariant.argTypes = {
  filename: {
    control: { type: 'text' },
    description: '파일명을 설정합니다.',
    defaultValue: 'Schedule_Bulk_20241015145927',
  },
  lineClamp: {
    control: { type: 'number', min: 1, max: 5, step: 1 },
    description: '파일명을 표시할 최대 줄 수를 설정합니다.',
    defaultValue: 1,
  },
  extension: {
    control: { type: 'text' },
    description: '파일 확장자를 설정합니다.',
    defaultValue: 'Excel',
  },
  size: {
    control: { type: 'number' },
    description: '파일 크기를 바이트 단위로 설정합니다.',
    defaultValue: 1363148,
  },
} as any;

SingleVariant.args = {
  filename: 'Schedule_Bulk_20241015145927',
  lineClamp: 1,
  extension: 'Excel',
  size: 1363148,
} as any;

export const MultiVariant: StoryFn<typeof AttachmentList> = () => (
  <AttachmentList>
    <AttachmentItem.Multi thumbnail={<AttachmentItem.Thumbnail iconSource={AttachmentIcon} />} item={mockPdfItem} />
  </AttachmentList>
);

export const WithImageThumbnail: StoryFn<typeof AttachmentList> = () => (
  <AttachmentList>
    <AttachmentItem.Multi
      thumbnail={
        <AttachmentItem.Thumbnail url='https://media.istockphoto.com/id/1973365581/ko/%EB%B2%A1%ED%84%B0/%EC%83%98%ED%94%8C-%EC%9E%89%ED%81%AC-%EA%B3%A0%EB%AC%B4-%EC%8A%A4%ED%83%AC%ED%94%84.jpg?s=612x612&w=0&k=20&c=XyLVT-DEy5Ng5gWvABamABg0CPbPHhs-XUQf6NivaBM=' />
      }
      item={mockItem}
    />
  </AttachmentList>
);

export const WithChildren: StoryFn<typeof AttachmentList> = () => (
  <AttachmentList>
    <AttachmentItem.Multi thumbnail={<AttachmentItem.Thumbnail iconSource={AttachmentIcon} />}>
      <div style={{ padding: '4px 0' }}>
        <div style={{ fontSize: '14px', color: '#333', marginBottom: '2px' }}>Custom Content</div>
        <div style={{ fontSize: '12px', color: '#999' }}>This is custom children content</div>
      </div>
    </AttachmentItem.Multi>
  </AttachmentList>
);
