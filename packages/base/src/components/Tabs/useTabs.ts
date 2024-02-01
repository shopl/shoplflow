import { createContext, useContext } from 'react';
import type { TabsLevel } from './Tabs.types';

export type TabsContextType = {
  activeTab: string | null;
  setActiveTab: (tab: string) => void;
  level: TabsLevel;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error('useTabs should be used in Tabs');
  }
  return context;
};
