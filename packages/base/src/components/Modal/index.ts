// SHOPLFLOW_DOCS_IGNORE
import ModalContainer from './ModalContainer';
import ModalFooter from './ModalFooter';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTop from './ModalTop';
import { ModalBottom } from './ModalBottom';

export const Modal = {
  Container: ModalContainer,
  Header: ModalHeader,
  Top: ModalTop,
  Body: ModalBody,
  Bottom: ModalBottom,
  Footer: ModalFooter,
};

export * from './Modal.types';

export * from './hooks/useModalValue';
export * from './hooks/useHandleModal';

export * from './providers/ModalContext';
export * from './providers/ModalProvider';
export * from './version';
