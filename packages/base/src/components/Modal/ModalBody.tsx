import React from 'react';
import { BodyContainer } from './Modal.styled';
import type { ModalBodyProps, ModalBodyType } from './Modal.types';
import { MODAL_BODY_KEY } from './Modal.types';

const ModalBody: ModalBodyType = ({ children, isIncludeHeader = false }: ModalBodyProps) => {
  return <BodyContainer isIncludeHeader={isIncludeHeader}>{children}</BodyContainer>;
};

ModalBody[MODAL_BODY_KEY] = true;

export default ModalBody;
