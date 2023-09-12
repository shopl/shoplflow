import React from 'react';
import { FooterContainer } from './Modal.styled';
import type { ModalFooterProps } from './Modal.types';

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default ModalFooter;
