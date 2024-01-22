import React from 'react';
import type { ScrollAreaProps } from './ScrollArea.types';
import Scrollbars from 'react-custom-scrollbars-2';

const ScrollArea = ({ children, ...rest }: ScrollAreaProps) => {
  return (
    <Scrollbars autoHide autoHideTimeout={1000} autoHideDuration={200} {...rest} data-shoplflow={'ScrollArea'}>
      {children}
    </Scrollbars>
  );
};

export default ScrollArea;
