import { useEffect, useState } from 'react';
import type { DomainType } from '../types/Domain';

type UseDomainType = (domain?: DomainType) => [DomainType | undefined];

export const useDomain: UseDomainType = (domain = 'SHOPL') => {
  const [domainType, setDomainType] = useState<DomainType | undefined>(undefined);

  useEffect(() => {
    if (domain) {
      setDomainType(domain);
    }
  }, [domain]);

  useEffect(() => {
    if (!domainType) {
      return;
    }
    document.documentElement.dataset.shoplflow = domainType?.toLowerCase();
  }, [domainType]);

  return [domainType];
};

export const getDomain = () => {
  return document.documentElement.dataset.shoplflow as Lowercase<DomainType>;
};
