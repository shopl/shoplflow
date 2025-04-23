import React, { createContext, useContext } from 'react';

type SearchBarContextValue = {
  useFlexibleWidth?: boolean;
  isSelected?: boolean;
};

const SearchBarContext = createContext<SearchBarContextValue>({});

export const useSearchBarContext = () => useContext(SearchBarContext);

export const SearchBarProvider: React.FC<SearchBarContextValue & { children: React.ReactNode }> = ({
  children,
  useFlexibleWidth,
  isSelected,
}) => {
  return <SearchBarContext.Provider value={{ useFlexibleWidth, isSelected }}>{children}</SearchBarContext.Provider>;
};
