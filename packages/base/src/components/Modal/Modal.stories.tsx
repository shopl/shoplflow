import type { Meta, StoryFn } from '@storybook/react';
import { Box } from '../../styles/Box';
import { Modal } from './index';
import type { ModalContainerProps } from './Modal.types';
import ModalContainer from './ModalContainer';
import React from 'react';
import { Stack } from '../Stack';

export default {
  title: 'COMPONENTS/Modal',
  component: ModalContainer,
} as Meta;

const mockBoxs = new Array(5).fill(<Box background={'primary100'} width={'100%'} />);

export const Primary: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Header>
      <span className={'title1_700'}>하이하이</span>
    </Modal.Header>
    <Modal.Body>
      <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
    </Modal.Body>
    <Modal.Footer>aaaaaaa</Modal.Footer>
  </Modal.Container>
);

export const BodyFooter: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Body>테수트</Modal.Body>
    <Modal.Footer>aaaaaaa</Modal.Footer>
  </Modal.Container>
);
