import type { Meta, StoryFn } from '@storybook/react';
import { Modal } from './index';
import type { ModalContainerProps } from './Modal.types';
import ModalContainer from './ModalContainer';

export default {
  title: 'COMPONENTS/Modal',
  component: ModalContainer,
} as Meta;

export const Primary: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Header>
      <span className={'title1_700'}>하이하이</span>
    </Modal.Header>
    <Modal.Body>테수트</Modal.Body>
    <Modal.Footer>aaaaaaa</Modal.Footer>
  </Modal.Container>
);

export const BodyFooter: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Body>테수트</Modal.Body>
    <Modal.Footer>aaaaaaa</Modal.Footer>
  </Modal.Container>
);
