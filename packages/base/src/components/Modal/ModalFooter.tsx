import React from 'react';
import { FooterContainer } from './Modal.styled';
import type { ModalFooterProps, ModalFooterType } from './Modal.types';
import { MODAL_FOOTER_KEY } from './Modal.types';

const ModalFooter: ModalFooterType = ({ children }: ModalFooterProps) => {
  return <FooterContainer>{children}</FooterContainer>;
};

ModalFooter[MODAL_FOOTER_KEY] = true;

export default ModalFooter;
