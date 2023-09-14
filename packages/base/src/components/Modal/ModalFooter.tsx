import React from 'react';
import { FooterContainer } from './Modal.styled';
import type { ModalFooterProps, ModalFooterType } from './Modal.types';

const ModalFooter: ModalFooterType = ({ children }: ModalFooterProps) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default ModalFooter;
