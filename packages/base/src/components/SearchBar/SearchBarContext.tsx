import React, { createContext, useContext } from 'react';

interface SearchBarContextValue {
  useFlexibleWidth?: boolean;
  isSelected?: boolean;
  noAnimate?: boolean;
}

const SearchBarContext = createContext<SearchBarContextValue>({});

export const useSearchBarContext = () => useContext(SearchBarContext);

export const SearchBarProvider: React.FC<SearchBarContextValue & { children: React.ReactNode }> = ({
  children,
  useFlexibleWidth,
  isSelected,
  noAnimate,
}) => {
  return (
    <SearchBarContext.Provider value={{ useFlexibleWidth, isSelected, noAnimate }}>
      {children}
    </SearchBarContext.Provider>
  );
};
