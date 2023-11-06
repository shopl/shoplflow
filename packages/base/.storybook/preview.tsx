import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import type { Decorator, Preview } from '@storybook/react';
import { Button, ShoplflowProvider } from '../src';
import './index.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';


const ThemeButton  = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px
`;


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


export const decorator: Decorator = (Story, context) => {
  const [domain, setDomain] = useState<'HADA'|'SHOPL'| null>(null);

  useEffect(() => {
    const domain = localStorage.getItem('domain');
    if (domain) {
      setDomain(domain as 'HADA'|'SHOPL');
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

  return (
    <>
      <ShoplflowProvider domain={domain}>
        <ThemeButton><Button onClick={handleToggleTheme} sizeVar={'S'}>{domain}</Button></ThemeButton>
        <Story />
      </ShoplflowProvider>
    </>
  )
}


export const decorators:Decorator[] = [decorator];


export default preview;
