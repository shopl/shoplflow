import type { ReactNode } from 'react';
import React, { Children } from 'react';

import { Container } from './Modal.styled';
import type { ModalBodyProps, ModalContainerProps } from './Modal.types';
import { MODAL_FOOTER_KEY, MODAL_HEADER_KEY } from './Modal.types';
import useOutsideClick from '../../hooks/useOutsideClick';
import { noop } from '../../utils/noop';

const ModalContainer = ({ children, outsideClick = noop, ...rest }: ModalContainerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick<HTMLDivElement>(outsideClick, ref);

  const childrenArray = React.Children.toArray(children) as ReactNode[];

  const findHeader = childrenArray.find((child: ReactNode) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Symbol 타입을 직접 할당하여 Header를 감지하기 때문에 무시
    if (child.type[MODAL_HEADER_KEY]) {
      return child;
    }
  });

  const findFooter = childrenArray.find((child: ReactNode) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Symbol 타입을 직접 할당하여 Footer를 감지하기 때문에 무시
    if (child.type[MODAL_FOOTER_KEY]) {
      return child;
    }
  });

  const addPropInChildren = Children.map(childrenArray, (child: ReactNode) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    return React.cloneElement(child, {
      isIncludeHeader: Boolean(findHeader),
      isIncludeFooter: Boolean(findFooter),
      sizeVar: rest.sizeVar,
      height: rest.height,
    } as React.HTMLAttributes<HTMLElement> & ModalBodyProps);
  });

  return (
    <Container ref={ref} {...rest}>
      {addPropInChildren}
    </Container>
  );
};

export default ModalContainer;
