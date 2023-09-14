import React from 'react';
import { BodyContainer, ModalBodyContent } from './Modal.styled';
import type { ModalBodyProps, ModalBodyType } from './Modal.types';
import { MODAL_BODY_KEY } from './Modal.types';
import Scrollbars from 'react-custom-scrollbars-2';
import { useResizeObserver } from '../../hooks';

const ModalBody: ModalBodyType = ({
  children,
  isIncludeHeader = false,
  sizeVar,
  height: modalContainerHeight,
}: ModalBodyProps) => {
  const { height: windowHeight } = useResizeObserver(document.body);

  const headerHeight = 64;
  const footerHeight = 64;
  const gap = headerHeight + footerHeight;
  const topBottomGap = 64;

  const setAutoHeightMin = () => {
    if (modalContainerHeight) {
      return modalContainerHeight - gap;
    } else {
      return '100%';
    }
  };

  return (
    <BodyContainer isIncludeHeader={isIncludeHeader} height={setAutoHeightMin()}>
      <Scrollbars
        id={`scrollbar`}
        universal
        autoHeight
        autoHeightMin={setAutoHeightMin()}
        autoHeightMax={windowHeight - topBottomGap}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <ModalBodyContent isIncludeHeader={isIncludeHeader} sizeVar={sizeVar}>
          {children}
        </ModalBodyContent>
      </Scrollbars>
    </BodyContainer>
  );
};

ModalBody[MODAL_BODY_KEY] = true;

export default ModalBody;
