import React, { forwardRef, useEffect, useState } from 'react';
import { StyledPopper } from './Popper.styled';
import type { PopperProps, PopperTriggerProps, PopperPortalProps } from './Popper.types';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '../../animation/fadeInOut';

import { useFloating } from '@floating-ui/react-dom';
import { autoPlacement, autoUpdate, FloatingPortal, offset } from '@floating-ui/react';
import { PopperContext, usePopper } from './usePopper';
import { useMergeRefs } from '../../hooks/useMergeRef';

const Popper = ({
  placement,
  offset: initialOffset = 0,
  autoPlacement: initialAutoPlacement,
  strategy = 'absolute',
  middlewares,
  children,
}: PopperProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, ...floating } = useFloating({
    strategy,
    placement,
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

  return (
    <PopperContext.Provider
      value={{ isOpen, setIsOpen, ...floating, ...refs, floatingStyles: { ...floatingStyles, zIndex: 20002 } }}
    >
      {children}
    </PopperContext.Provider>
  );
};

export const PopperTrigger = forwardRef<HTMLDivElement, PopperTriggerProps>(
  ({ children, isOpen = false, ...rest }, ref) => {
    const { setReference, setIsOpen } = usePopper();

    const refs = useMergeRefs(ref, setReference);

    useEffect(() => {
      setIsOpen(isOpen);
    }, [isOpen, setIsOpen]);

    return (
      <StyledPopper ref={refs} data-shoplflow={'Popper'} {...rest}>
        {children}
      </StyledPopper>
    );
  },
);

export const PopperPortal = forwardRef<HTMLDivElement, PopperPortalProps>(
  ({ children, animation: initialAnimation, zIndex }, ref) => {
    const { floatingStyles, setFloating, isOpen } = usePopper();
    const animation = initialAnimation ?? fadeInOut;

    const refs = useMergeRefs(ref, setFloating);

    let _floatingStyles = { ...floatingStyles };

    if (zIndex) {
      _floatingStyles = { ...floatingStyles, zIndex };
    }

    if (!isOpen) {
      return null;
    }

    return (
      <FloatingPortal>
        <AnimatePresence>
          <motion.div
            initial={animation.initial}
            animate={animation.animate}
            exit={animation.exit}
            ref={refs}
            style={_floatingStyles}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </FloatingPortal>
    );
  },
);

Popper.Trigger = PopperTrigger;
Popper.Portal = PopperPortal;

export default Popper;
