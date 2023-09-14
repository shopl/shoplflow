import { useEffect, useState } from 'react';
import type { DomainType } from '../types/Domain';

type UseDarkModeProps = {
  domain: DomainType;
};

export function useDomain({ domain = 'SHOPL' }: UseDarkModeProps) {
  const [domainType, setDomainType] = useState<DomainType | undefined>(undefined);

  useEffect(() => {
    if (domain) {
      setDomainType(domain);
    }
  }, [domain]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // const domain = localStorage.getItem('domain');
      // setDomainType(domain ? (domain as DomainType) : 'SHOPL');
    }
  }, []);

  useEffect(() => {
    if (!domainType) {
      return;
    }

    document.documentElement.dataset.shoplflow = domainType;
    if (domainType === 'SHOPL') {
      document.documentElement.dataset.shoplflow = 'shopl';
      // localStorage.setItem('domain', domainType);
    } else {
      document.documentElement.dataset.shoplflow = 'hada';
      // localStorage.setItem('domain', domainType);
    }
  }, [domainType]);
}
