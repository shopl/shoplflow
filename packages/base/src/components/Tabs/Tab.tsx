import { useTabs } from './useTabs';
import type { MouseEvent } from 'react';
import { useCallback, useState } from 'react';
import type { TabProps } from './Tabs.types';

import { StyledTabText, StyledTab } from './Tabs.styled';

import type { TypographyTokens } from '../../styles';

export const Tab = ({ value, label, leftSource, rightSource, as, onClick, ...args }: TabProps) => {
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
    <StyledTab
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
      <StyledTabText isHover={isHover} levelVar={level} lineClamp={2} typography={`${typography}`} isActive={isActive}>
        {label}
      </StyledTabText>
      {rightSource}
    </StyledTab>
  );
};
