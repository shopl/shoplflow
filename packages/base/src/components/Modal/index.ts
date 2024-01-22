// SHOPLFLOW_DOCS_IGNORE
import ModalContainer from './ModalContainer';
import ModalFooter from './ModalFooter';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';

export const Modal = {
  Container: ModalContainer,
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
};

export * from './Modal.types';

export * from './hooks/useModalValue';
export * from './hooks/useHandleModal';

export * from './providers/ModalContext';
export * from './providers/ModalProvider';
