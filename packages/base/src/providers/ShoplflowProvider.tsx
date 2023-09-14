import React from 'react';

import { useDomain } from '../hooks/useDomain';
import type { DomainType } from '../types/Domain';
import ModalPortal from '../portal/ModalPortal';

export interface ShoplflowProviderProps {
  domain?: DomainType;
  children: React.ReactNode;
}

const ShoplflowProvider = ({ children, domain = 'SHOPL' }: ShoplflowProviderProps) => {
  useDomain({
    domain,
  });

  return (
    <>
      <ModalPortal />
      {children}
    </>
  );
};

export default ShoplflowProvider;
