import React from 'react';

import { useDomain } from '../hooks/useDomain';
import type { DomainType } from '../types/Domain';
import ModalPortal from '../portal/ModalPortal';
import ModalProvider from './ModalProvider';
import PopperPortal from '../portal/PopperPortal';

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

      {children}
    </ModalProvider>
  );
};

export default ShoplflowProvider;
