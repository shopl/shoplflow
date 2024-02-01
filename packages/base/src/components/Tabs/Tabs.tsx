import { TabsContext } from './useTabs';

import { useEffect, useState } from 'react';
import type { TabsProps } from './Tabs.types';
import { Tab } from './Tab';
import { SwitchCase } from './SwitchCase';

const Tabs = ({ children, initialTab, level, onChange }: TabsProps) => {
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
        level,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.SwitchCase = SwitchCase;

export default Tabs;
