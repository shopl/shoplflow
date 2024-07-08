import React from 'react';
import type { BackDropProps } from './BackDrop.types';
import { fadeInOut } from '../../animation/fadeInOut';
import { BackDropStyled } from './BackDrop.styled';

const BackDrop = ({ children, zIndex }: BackDropProps) => {
  return (
    <BackDropStyled
      variants={fadeInOut}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      data-shoplflow={'BackDrop'}
      zIndex={zIndex}
    >
      {children}
    </BackDropStyled>
  );
};

export default BackDrop;
