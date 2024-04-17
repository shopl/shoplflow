import { TabsContext } from './useTabs';
import { LayoutGroup, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { TabsProps } from './Tabs.types';
import { Tab } from './Tab';

const Tabs = ({ children, initialTab, onChange }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (!onChange || !activeTab) {
      return;
    }

    onChange(activeTab);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      <LayoutGroup>
        <AnimatePresence>{children}</AnimatePresence>
      </LayoutGroup>
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;

export default Tabs;
