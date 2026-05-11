import { useContext, useEffect } from 'react';
import BackDrop from '../components/BackDrop/BackDrop';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import styled from '@emotion/styled';
import { ModalContext, ModalOutsideClickContext } from '../components';

export const SpaceMarginWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  z-index: 101;
  //padding: 32px 20px;
  width: 100%;
  height: 100%;
`;

const ModalPortal = () => {
  const modal = useContext(ModalContext);
  const dismissRegistry = useContext(ModalOutsideClickContext);

  useEffect(() => {
    if (!dismissRegistry) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }
      if (modal.length === 0) {
        return;
      }
      event.preventDefault();
      dismissRegistry.requestOutsideClick();
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [dismissRegistry, modal.length]);

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {modal.map((item, index) => (
            <BackDrop key={index} zIndex={item.zIndex}>
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
