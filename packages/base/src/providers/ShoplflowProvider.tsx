import React from 'react';

import { useDomain } from '../hooks/useDomain';
import type { DomainType } from '../types/Domain';
import ModalPortal from '../portal/ModalPortal';
import PopperPortal from '../portal/PopperPortal';
import ModalProvider from '../components/Modal/providers/ModalProvider';
import { domAnimation, LazyMotion } from 'framer-motion';

export interface ShoplflowProviderProps {
  domain?: DomainType;
  children: React.ReactNode;
}

const ShoplflowProvider = ({ children, domain = 'SHOPL' }: ShoplflowProviderProps) => {
  useDomain(domain);

  return (
    <ModalProvider>
      <PopperPortal />
      <ModalPortal />
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ModalProvider>
  );
};

export default ShoplflowProvider;
