import React from 'react';
import type { BackDropProps } from './BackDrop.types';
import { fadeInOut } from '../../animation/fadeInOut';
import { BackDropStyled } from './BackDrop.styled';

const BackDrop = ({ children }: BackDropProps) => {
  return (
    <BackDropStyled
      variants={fadeInOut}
      initial={'initial'}
      animate={'animate'}
      exit={'exit'}
      data-shoplflow={'BackDrop'}
    >
      {children}
    </BackDropStyled>
  );
};

export default BackDrop;
