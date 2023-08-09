import React, { createContext } from 'react';

export type ShoplOrHada = 'shopl' | 'hada';

export type Context = {
  domain: ShoplOrHada;
} | null;

export const ThemeContext = createContext<Context>(null);

export type ShoplOrHadaProviderProps = {
  domain: ShoplOrHada;
};

const ShoplOrHadaProvider = ({ domain }: ShoplOrHadaProviderProps) => {
  return (
    <ThemeContext.Provider
      value={{
        domain,
      }}
    >
      ThemeProvider
    </ThemeContext.Provider>
  );
};

export default ShoplOrHadaProvider;
