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
    if (!domainType) {
      return;
    }
    document.documentElement.dataset.shoplflow = domainType?.toLowerCase();
  }, [domainType]);
};
