import React from 'react';
import { useModalStore } from '../hooks';
import BackDrop from '../components/BackDrop/BackDrop';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';

export const SpaceMarginWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  z-index: 101;
  padding: 32px 20px;
  width: 100%;
  height: 100%;
`;

const ModalPortal = () => {
  const modal = useModalStore((state) => state.modal);
  return (
    <>
      {createPortal(
        <AnimatePresence>
          {modal.map((item, index) => (
            <BackDrop key={index}>
              <SpaceMarginWrapper>{item.component}</SpaceMarginWrapper>
            </BackDrop>
          ))}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default ModalPortal;
