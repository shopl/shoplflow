import { TabsContext, useTabs } from './useTabs';
import type { MouseEvent } from 'react';
import { useCallback, useEffect, useState } from 'react';
import type { TabsProps, TabTriggerProps, TabsPanelProps } from './Tabs.types';

import { StyledTabTriggerText, StyledTabTrigger, StyledTabPanel } from './Tabs.styled';
import type { TypographyTokens } from 'src/styles';

const Tabs = ({ children, initialTab, level, onChangeTab }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(initialTab || null);

  useEffect(() => {
    if (!onChangeTab || !activeTab) {
      return;
    }

    onChangeTab(activeTab);
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

export const TabTrigger = ({ value, label, leftSource, rightSource, as, onClick, ...args }: TabTriggerProps) => {
  const { activeTab, setActiveTab, level } = useTabs();

  const [isHover, setIsHover] = useState(false);

  const isActive = value === activeTab;

  const hoverHandler = useCallback(() => {
    setIsHover(true);
  }, []);
  const unhoverHandler = useCallback(() => {
    setIsHover(false);
  }, []);

  const clickHandler = (event: MouseEvent<HTMLElement>) => {
    onClick?.(event);
    setActiveTab(value);
  };

  let typography: TypographyTokens = 'title2_700';

  if (level === 'level2' || level === 'level3') {
    typography = 'title1_700';
  }

  return (
    <StyledTabTrigger
      levelVar={level}
      isActive={isActive}
      as={as}
      onClick={clickHandler}
      onMouseOver={hoverHandler}
      onMouseLeave={unhoverHandler}
      onFocus={hoverHandler}
      onBlur={unhoverHandler}
      isHover={isHover}
      {...args}
    >
      {leftSource}
      <StyledTabTriggerText
        isHover={isHover}
        levelVar={level}
        lineClamp={2}
        typography={`${typography}`}
        isActive={isActive}
      >
        {label}
      </StyledTabTriggerText>
      {rightSource}
    </StyledTabTrigger>
  );
};

export const TabPanel = ({ value, children, ...args }: TabsPanelProps) => {
  const context = useTabs();

  const isSelected = value === context.activeTab;

  if (!isSelected) {
    return null;
  }

  return <StyledTabPanel {...args}>{children}</StyledTabPanel>;
};

Tabs.Trigger = TabTrigger;
Tabs.Panel = TabPanel;

export default Tabs;
