import React from 'react';

import { useDomain } from '../hooks/useDomain';
import type { DomainType } from '../types/Domain';

export interface ShoplflowProviderProps {
  domain?: DomainType;
  children: React.ReactNode;
}

const ShoplflowProvider = ({ children, domain = 'SHOPL' }: ShoplflowProviderProps) => {
  useDomain({
    domain,
  });
  return <>{children}</>;
};

export default ShoplflowProvider;
