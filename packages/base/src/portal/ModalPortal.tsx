import React from 'react';
import { useModalStore } from '../hooks';
import BackDrop from '../components/BackDrop/BackDrop';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';

const ModalPortal = () => {
  const modal = useModalStore((state) => state.modal);

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {modal.map((item, index) => (
            <BackDrop key={index}>{item.component}</BackDrop>
          ))}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default ModalPortal;
