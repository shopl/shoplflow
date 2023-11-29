import React, { useCallback, useMemo } from 'react';
import { BodyContainer, ModalBodyContainerInner, ModalBodyContent } from './Modal.styled';
import type { ModalBodyProps } from './Modal.types';
import Scrollbars from 'react-custom-scrollbars-2';
import { useResizeObserver } from '@shoplflow/utils';

const ModalBody = ({
  children,
  isIncludeHeader = false,
  isIncludeFooter = false,
  sizeVar,
  height: modalContainerHeight,
}: ModalBodyProps) => {
  const { height: windowHeight } = useResizeObserver(document.body, {
    trackHeight: true,
  });

  const headerHeight = 64;
  const footerHeight = 64;

  const topBottomMargin = 64;
  const getHeaderFooterHeight = useCallback(() => {
    let result = 0;
    if (isIncludeHeader) {
      result += headerHeight;
    }
    if (isIncludeFooter) {
      result += footerHeight;
    }
    return result;
  }, [isIncludeFooter, isIncludeHeader]);

  const headerFooterHeight = useMemo(() => getHeaderFooterHeight(), [getHeaderFooterHeight]);

  const setAutoHeightMin = () => {
    if (modalContainerHeight) {
      return modalContainerHeight - headerFooterHeight;
    } else {
      return '100%';
    }
  };

  const heightUnderMaxHeight = windowHeight - topBottomMargin - headerFooterHeight;

  const heightOverMaxHeight = 1200 - topBottomMargin - headerFooterHeight;

  return (
    <BodyContainer isIncludeHeader={isIncludeHeader} height={setAutoHeightMin()}>
      <Scrollbars
        id={`scrollbar`}
        universal
        autoHeight={!modalContainerHeight}
        autoHeightMin={setAutoHeightMin()}
        autoHeightMax={windowHeight > 1200 ? heightOverMaxHeight : heightUnderMaxHeight}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <ModalBodyContainerInner>
          <ModalBodyContent isIncludeHeader={isIncludeHeader} sizeVar={sizeVar}>
            {children}
          </ModalBodyContent>
        </ModalBodyContainerInner>
      </Scrollbars>
    </BodyContainer>
  );
};

export default ModalBody;
