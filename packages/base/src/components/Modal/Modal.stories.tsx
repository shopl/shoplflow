import type { Meta, StoryFn } from '@storybook/react';
import { Box } from '../../styles/Box';
import { Modal } from './index';
import type { ModalContainerProps } from './Modal.types';
import ModalContainer from './ModalContainer';
import React from 'react';
import { Text } from '../Text';
import { Stack } from '../Stack';

export default {
  title: 'COMPONENTS/Modal',
  component: ModalContainer,
} as Meta;

const mockBoxs = new Array(10).fill(<Box background={'primary100'} width={'100%'} />);

export const Primary: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Header>
      <Text typography={'title1_700'}>모달 헤더 영역</Text>
    </Modal.Header>
    <Modal.Body>
      <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
    </Modal.Body>
    <Modal.Footer>
      <Text typography={'body1_400'}>버튼이 들어가는데 버튼을 아직 안만들었어요.</Text>
    </Modal.Footer>
  </Modal.Container>
);

export const HeaderBody: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Header>
      <Text typography={'title1_700'}>모달 헤더 영역</Text>
    </Modal.Header>
    <Modal.Body>
      <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
    </Modal.Body>
  </Modal.Container>
);

export const BodyFooter: StoryFn<ModalContainerProps> = (args) => (
  <Modal.Container {...args}>
    <Modal.Body>
      <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
    </Modal.Body>
    <Modal.Footer>
      <Text typography={'body1_400'}>버튼이 들어가는데 버튼을 아직 안만들었어요.</Text>
    </Modal.Footer>
  </Modal.Container>
);
