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

  const showHandler = useCallback(() => {
    setIsOpen(true);
  }, []);

  const hideHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Popper offset={offset} placement={placement} middlewares={[flip(), shift({ padding: 5 })]} {...popperProps}>
      <Popper.Trigger
        ref={triggerRef}
        isOpen={isOpen}
        onMouseOver={showHandler}
        onMouseLeave={hideHandler}
        onFocus={showHandler}
        onBlur={hideHandler}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {trigger}
      </Popper.Trigger>
      <Popper.Portal ref={portalRef}>{popper}</Popper.Portal>
    </Popper>
  );
};

Tooltip.Content = TooltipContent;

export default Tooltip;
