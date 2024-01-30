import { useCallback, useState } from 'react';
import { Popper } from '../Popper';
import type { TooltipProps } from './Tooltip.types';
import { TooltipContent } from './TooltipContent';
import { flip, shift } from '@floating-ui/core';

const Tooltip = ({
  trigger,
  popper,
  placement = 'bottom-start',
  offset = 4,
  triggerRef,
  portalRef,
  ...popperProps
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const show = useCallback(() => {
    setIsOpen(true);
  }, []);

  const hide = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Popper offset={offset} placement={placement} middlewares={[flip(), shift({ padding: 5 })]} {...popperProps}>
      <Popper.Trigger
        ref={triggerRef}
        isOpen={isOpen}
        onMouseOver={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {trigger}
      </Popper.Trigger>
      <Popper.Portal ref={portalRef}>{popper}</Popper.Portal>
    </Popper>
  );
};

Tooltip.Content = TooltipContent;

export default Tooltip;
