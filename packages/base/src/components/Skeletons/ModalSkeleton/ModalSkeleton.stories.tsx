import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Modal } from '.././../Modal';
import ModalSkeleton from './ModalSkeleton';
import type { ModalSkeletonProps } from './ModalSkeleton.types';

export default {
  title: 'COMPONENTS/Skeletons/ModalSkeleton',
  component: ModalSkeleton,
};

export const Playground: StoryFn<ModalSkeletonProps> = (args) => {
  return (
    <Modal.Container>
      <ModalSkeleton {...args} />
    </Modal.Container>
  );
};
