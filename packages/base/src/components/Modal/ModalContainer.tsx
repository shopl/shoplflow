import type { ReactNode } from 'react';
import React, { Children, useRef } from 'react';

import { Container } from './Modal.styled';
import type { ModalBodyProps, ModalContainerProps } from './Modal.types';
import { MODAL_HEADER_KEY } from './Modal.types';
import useOutsideClick from '../../hooks/useOutsideClick';
import { noop } from '../../utils/noop';

const ModalContainer = ({ children, outsideClick = noop, ...rest }: ModalContainerProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick<HTMLDivElement>(outsideClick, ref);

  const childrenArray = React.Children.toArray(children) as ReactNode[];
  const isIncludeHeader = useRef(false);

  const addPropInChildren = Children.map(childrenArray, (child: ReactNode) => {
    if (!React.isValidElement(child)) {
      return child;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore Symbol 타입을 직접 할당하여 Header를 감지하기 때문에 무시
    if (child.type[MODAL_HEADER_KEY]) {
      isIncludeHeader.current = true;
    }
    if (isIncludeHeader) {
      return React.cloneElement(child, {
        isIncludeHeader: isIncludeHeader.current,
        sizeVar: rest.sizeVar,
        height: rest.height,
      } as React.HTMLAttributes<HTMLElement> & ModalBodyProps);
    }
    return child;
  });

  return (
    <Container ref={ref} {...rest}>
      {addPropInChildren}
    </Container>
  );
};

export default ModalContainer;
