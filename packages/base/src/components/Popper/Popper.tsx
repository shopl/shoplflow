import React from 'react';
import { StyledPopper } from './Popper.styled';
import type { PopperProps } from './Popper.types';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '../../animation/fadeInOut';

import { useFloating } from '@floating-ui/react-dom';
import { autoPlacement, autoUpdate, FloatingPortal, offset } from '@floating-ui/react';

const Popper = ({
  trigger,
  popper,
  isOpen = false,
  placement,
  offset: initialOffset = 0,
  autoPlacement: initialAutoPlacement,
  strategy = 'absolute',
  middlewares,
  animation: initialAnimation,
  ...rest
}: PopperProps) => {
  const { refs, floatingStyles } = useFloating({
    strategy,
    placement: placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(initialOffset),
      initialAutoPlacement &&
        autoPlacement({
          crossAxis: false,
          ...initialAutoPlacement,
        }),
      ...(middlewares ?? []),
    ],
  });

  const animation = initialAnimation ?? fadeInOut;

  return (
    <>
      <StyledPopper ref={refs.setReference} data-shoplflow={'Popper'} {...rest}>
        {trigger}
      </StyledPopper>
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={animation.initial}
              animate={animation.animate}
              exit={animation.exit}
              ref={refs.setFloating}
              style={floatingStyles}
            >
              {popper}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
};

export default Popper;
