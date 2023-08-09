import React, { createContext } from 'react';

export type Context = {};

export const ThemeContext = createContext<Context>({});

const ThemeProvider = () => {
  return <ThemeContext.Provider value={{}}>ThemeProvider</ThemeContext.Provider>;
};

export default ThemeProvider;
