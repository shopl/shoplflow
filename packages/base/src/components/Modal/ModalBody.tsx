import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BodyContainer, ModalBodyContainerInner, ModalBodyContent } from './Modal.styled';
import type { ModalBodyProps } from './Modal.types';
import { useResizeObserver } from '@shoplflow/utils';
import { ScrollArea } from '../ScrollArea';

const ModalBody = ({
  children,
  isIncludeHeader = false,
  isIncludeFooter = false,
  sizeVar,
  height: modalContainerHeight,
}: ModalBodyProps) => {
  const { height } = useResizeObserver(document.body, {
    trackHeight: true,
  });

  const [windowHeight, setWindowHeight] = useState(0);

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

  useEffect(() => {
    if (height) {
      setWindowHeight(window.innerHeight);
    }
  }, [height]);

  return (
    <BodyContainer isIncludeHeader={isIncludeHeader} height={setAutoHeightMin()}>
      <ScrollArea
        id={`scrollbar`}
        universal
        autoHeight={!modalContainerHeight}
        autoHeightMin={setAutoHeightMin()}
        autoHeightMax={windowHeight > 1200 ? heightOverMaxHeight : heightUnderMaxHeight}
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
      </ScrollArea>
    </BodyContainer>
  );
};

export default ModalBody;
