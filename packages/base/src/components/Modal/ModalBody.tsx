import React, { useCallback, useMemo } from 'react';
import { BodyContainer, ModalBodyContainerInner, ModalBodyContent } from './Modal.styled';
import type { ModalBodyProps } from './Modal.types';
import { ScrollArea } from '../ScrollArea';
import { useViewportSizeObserver } from '../../hooks/useViewportSizeObserver';
import { useModalOption } from './hooks/useModalOption';

const ModalBody = ({
  children,
  isIncludeHeader = false,
  isIncludeFooter = false,
  sizeVar,
  height: modalContainerHeight,
  padding,
}: ModalBodyProps) => {
  const { height: windowHeight } = useViewportSizeObserver();
  const { topHeight, bottomHeight } = useModalOption();
  const heightToDeduct = topHeight + bottomHeight;

  const headerHeight = 64;
  const footerHeight = 72;

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
      return windowHeight - headerFooterHeight - heightToDeduct;
    }
    if (modalContainerHeight) {
      if (modalContainerHeight <= 1200) {
        if (windowHeight < modalContainerHeight) {
          return windowHeight - topBottomMargin - headerFooterHeight - heightToDeduct;
        }
        return modalContainerHeight - topBottomMargin - headerFooterHeight - heightToDeduct;
      }
      return modalContainerHeight - topBottomMargin - headerFooterHeight - heightToDeduct;
    } else {
      return '100%';
    }
  };

  // 가능한 최고 높이
  const setAutoHeightMax = () => {
    // 전체 화면일 경우에는 window height
    if (sizeVar === 'FULL') {
      return windowHeight;
    }

    // 지정된 높이가 있는 케이스
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
    let autoHeightMax = setAutoHeightMax() - 24;

    if (padding) {
      return autoHeightMax;
    }

    // Content top padding 빼주기
    if (isIncludeHeader) {
      autoHeightMax = autoHeightMax - 24;
    }

    if (isIncludeFooter) {
      autoHeightMax = autoHeightMax - 16;
    }

    return autoHeightMax;
  };

  const autoHeightMin = setAutoHeightMin();

  return (
    <BodyContainer
      isIncludeHeader={isIncludeHeader}
      sizeVar={sizeVar}
      minHeight={autoHeightMin}
      maxHeight={setAutoHeightMax() - heightToDeduct}
      padding={padding}
    >
      <ScrollArea
        id={`scrollbar`}
        universal
        autoHeight={!modalContainerHeight}
        autoHeightMin={autoHeightMin}
        autoHeightMax={setContentHeightMax() - heightToDeduct}
        style={{}}
      >
        <ModalBodyContainerInner>
          <ModalBodyContent isIncludeHeader={isIncludeHeader} sizeVar={sizeVar} padding={padding}>
            {children}
          </ModalBodyContent>
        </ModalBodyContainerInner>
      </ScrollArea>
    </BodyContainer>
  );
};

export default ModalBody;
