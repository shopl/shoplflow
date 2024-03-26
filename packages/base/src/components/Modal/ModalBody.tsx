import React, { useCallback, useMemo } from 'react';
import { BodyContainer, ModalBodyContainerInner, ModalBodyContent } from './Modal.styled';
import type { ModalBodyProps } from './Modal.types';
import { ScrollArea } from '../ScrollArea';
import { useViewportSizeObserver } from '../../hooks/useViewportSizeObserver';

const ModalBody = ({
  children,
  isIncludeHeader = false,
  isIncludeFooter = false,
  sizeVar,
  height: modalContainerHeight,
}: ModalBodyProps) => {
  const { height: windowHeight } = useViewportSizeObserver();

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
    if (sizeVar === 'FULL') {
      return windowHeight - topBottomMargin - headerFooterHeight;
    }
    if (modalContainerHeight) {
      if (modalContainerHeight <= 1200) {
        if (windowHeight < modalContainerHeight) {
          return windowHeight - topBottomMargin - headerFooterHeight;
        }
        return modalContainerHeight - topBottomMargin - headerFooterHeight;
      }
      return modalContainerHeight - topBottomMargin - headerFooterHeight;
    } else {
      return '100%';
    }
  };

  const setAutoHeightMax = () => {
    if (sizeVar === 'FULL') {
      return windowHeight;
    }
    if (modalContainerHeight) {
      if (modalContainerHeight > 1200) {
        return 1200 - topBottomMargin - headerFooterHeight;
      }
      if (modalContainerHeight <= 1200) {
        if (windowHeight < modalContainerHeight) {
          return windowHeight - topBottomMargin - headerFooterHeight;
        }
        return modalContainerHeight - topBottomMargin - headerFooterHeight;
      }
    }
    if (!modalContainerHeight) {
      const heightUnderMaxHeight = windowHeight - topBottomMargin - headerFooterHeight;

      const heightOverMaxHeight = 1200 - topBottomMargin - headerFooterHeight;

      return windowHeight > 1200 ? heightOverMaxHeight : heightUnderMaxHeight;
    }
    return 0;
  };

  const setContentHeightMax = () => {
    let autoHeightMax = setAutoHeightMax();

    // Content top padding 빼주기
    autoHeightMax = autoHeightMax - 24;

    if (isIncludeHeader) {
      autoHeightMax = autoHeightMax - 24;
    }

    if (!isIncludeHeader) {
      autoHeightMax = autoHeightMax - 16;
    }

    return autoHeightMax;
  };

  return (
    <BodyContainer
      isIncludeHeader={isIncludeHeader}
      sizeVar={sizeVar}
      minHeight={setAutoHeightMin()}
      maxHeight={setAutoHeightMax()}
    >
      <ScrollArea
        id={`scrollbar`}
        universal
        autoHeight={!modalContainerHeight}
        autoHeightMin={setAutoHeightMin()}
        autoHeightMax={setContentHeightMax()}
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
