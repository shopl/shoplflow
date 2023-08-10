import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { hadaTheme, shoplTheme } from '../styles';

interface ShoplflowProviderProps {
  domain?: 'HADA' | 'SHOPL';
  children: React.ReactNode;
}

const ShoplflowProvider = ({ children, domain = 'HADA' }: ShoplflowProviderProps) => {
  const theme = domain === 'HADA' ? hadaTheme : shoplTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ShoplflowProvider;
