import React from 'react';
import { createPortal } from 'react-dom';

const PopperPortal = () => {
  return (
    <>
      {createPortal(
        <div
          id={'popper-portal-key'}
          style={{
            zIndex: 20001,
            position: 'relative',
          }}
        />,
        document.body,
      )}
    </>
  );
};

export default PopperPortal;
