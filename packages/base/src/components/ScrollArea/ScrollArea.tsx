import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import type { ScrollAreaProps, ScrollbarRefType } from './ScrollArea.types';
import Scrollbars from 'react-custom-scrollbars-2';
import { useMergeRefs } from '@shoplflow/utils';

const ScrollArea = forwardRef<ScrollbarRefType, ScrollAreaProps>(({ children, ...rest }, ref) => {
  const scrollRef = useRef<ScrollbarRefType>(null);

  const mergeRef = useMergeRefs(scrollRef, ref);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const onResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [onResize]);
  return (
    <>
      {Boolean(windowWidth) && Boolean(windowHeight) && (
        <Scrollbars
          {...rest}
          ref={mergeRef}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          data-shoplflow={'ScrollArea'}
        >
          {children}
        </Scrollbars>
      )}
    </>
  );
});

export default ScrollArea;
