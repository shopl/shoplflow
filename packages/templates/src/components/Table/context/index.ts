import { createContext, useContext } from 'react';
import type { TableContextType } from '../types';

const TableContext = createContext<TableContextType<any> | undefined>(undefined);

export const useTable = <T extends object>() => {
  const context = useContext(TableContext) as TableContextType<T>;
  if (!context) {
    throw new Error('useTable must be used within a TableProvider');
  }

  return context;
};

export const TableProvider = TableContext.Provider;
