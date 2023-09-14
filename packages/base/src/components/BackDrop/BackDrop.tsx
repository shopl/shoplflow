import React from 'react';
import { Container } from './BackDrop.styled';
import type { BackDropProps } from './BackDrop.types';
import { fadeInOut } from '../../animation/fadeInOut';

const BackDrop = ({ children }: BackDropProps) => {
  return (
    <Container variants={fadeInOut} initial={'initial'} animate={'animate'} exit={'exit'}>
      {children}
    </Container>
  );
};

export default BackDrop;
