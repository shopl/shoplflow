import React from 'react';
import type { ModalHeaderProps, ModalHeaderType } from './Modal.types';
import { HeaderContainer } from './Modal.styled';
import { MODAL_HEADER_KEY } from './Modal.types';

const ModalHeader: ModalHeaderType = ({ children }: ModalHeaderProps) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};

ModalHeader[MODAL_HEADER_KEY] = true;

export default ModalHeader;
