import { createContext, useContext } from 'react';

export type TabsContextType = {
  activeTab: string | null;
  setActiveTab: (tab: string) => void;
};

export const TabsContext = createContext<TabsContextType | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error('useTabs should be used in Tabs');
  }
  return context;
};
