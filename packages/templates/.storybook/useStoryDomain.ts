import { createContext, useContext, useEffect, useState } from 'react';
import { DomainType } from '@shoplflow/base';

export type StoryDomainType = {
  domain: DomainType | undefined;
  handleToggleTheme: () => void;
}

export const StoryDomainContext = createContext<StoryDomainType>({
  domain: 'SHOPL',
  handleToggleTheme: () => {}
})

export const useStoryDomain = () => {
  const [domain, setDomain] = useState<DomainType | undefined>();

  useEffect(() => {
    const domain = localStorage.getItem('domain');
    if (domain) {
      setDomain(domain as DomainType);
    } else {
      setDomain('HADA');
    }
  }, [])
  useEffect(() => {
    if (domain) {
      localStorage.setItem('domain', domain);
    }
  }, [domain]);
  const handleToggleTheme = () => {
    setDomain(domain === 'HADA' ? 'SHOPL' : 'HADA')
  }

  return {
    domain,
    handleToggleTheme
  }
}