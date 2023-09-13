import React from 'react';
import { BodyContainer, BodyContainerInner } from './Modal.styled';
import type { ModalBodyProps, ModalBodyType } from './Modal.types';
import { MODAL_BODY_KEY } from './Modal.types';
import Scrollbars from 'react-custom-scrollbars-2';
import { useResizeObserver } from '../../hooks/useResizeObserver';

const ModalBody: ModalBodyType = ({
  children,
  isIncludeHeader = false,
  height: modalContainerHeight,
}: ModalBodyProps) => {
  const { height: windowHeight } = useResizeObserver(document.body);

  const gap = 76 + 76;

  const contentRef = React.useRef<HTMLDivElement>(null);

  const setAutoHeightMin = () => {
    if (modalContainerHeight) {
      return modalContainerHeight - gap;
    } else {
      return '100%';
    }
  };

  return (
    <Scrollbars
      id={`scrollbar`}
      universal
      autoHeight={!modalContainerHeight}
      autoHeightMin={setAutoHeightMin()}
      autoHeightMax={windowHeight - gap - 64}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={200}
      style={{
        height: '100%',
        overflow: 'hidden',
      }}
    >
      <BodyContainer isIncludeHeader={isIncludeHeader}>
        <BodyContainerInner ref={contentRef}>{children}</BodyContainerInner>
      </BodyContainer>
    </Scrollbars>
  );
};

ModalBody[MODAL_BODY_KEY] = true;

export default ModalBody;
