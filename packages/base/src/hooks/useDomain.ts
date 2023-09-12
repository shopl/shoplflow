import { useEffect, useState } from 'react';
import type { DomainType } from '../types/Domain';

type UseDomainProps = {
  domain?: DomainType;
};

export const useDomain = ({ domain = 'SHOPL' }: UseDomainProps) => {
  const [domainType, setDomainType] = useState<DomainType | undefined>(undefined);

  useEffect(() => {
    if (domain) {
      setDomainType(domain);
    }
  }, [domain]);

  useEffect(() => {
    document.documentElement.dataset.shoplflow = domainType;
    if (domainType === 'SHOPL') {
      document.documentElement.dataset.shoplflow = 'shopl';
    }
    if (domainType === 'HADA') {
      document.documentElement.dataset.shoplflow = 'hada';
    }
  }, [domainType]);
  return null;
};
