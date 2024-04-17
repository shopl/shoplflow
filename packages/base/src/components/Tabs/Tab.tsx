import { useTabs } from './useTabs';
import type { MouseEvent } from 'react';
import { useCallback, useState } from 'react';
import type { TabProps } from './Tabs.types';

import { StyledTabText, StyledTab } from './Tabs.styled';

import type { TypographyTokens } from '../../styles';
import { Indicator } from './Indicator';

export const Tab = ({
  value,
  label,
  leftSource,
  rightSource,
  as,
  styleVar = 'NORMAL',
  sizeVar = 'L',
  onClick,
  activeColor,
  ...args
}: TabProps) => {
  const { activeTab, setActiveTab } = useTabs();

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

  let typography: TypographyTokens = 'title1_700';

  if (styleVar === 'INFO') {
    typography = 'body1_700';
  }

  if (styleVar === 'NORMAL' && sizeVar === 'M') {
    typography = 'title2_700';
  }

  return (
    <StyledTab
      isActive={isActive}
      as={as}
      onClick={clickHandler}
      onMouseOver={hoverHandler}
      onMouseLeave={unhoverHandler}
      onFocus={hoverHandler}
      onBlur={unhoverHandler}
      isHover={isHover}
      styleVar={styleVar}
      {...args}
    >
      {leftSource}
      <StyledTabText
        isHover={isHover}
        lineClamp={2}
        typography={`${typography}`}
        isActive={isActive}
        activeColor={activeColor}
        styleVar={styleVar}
      >
        {label}
      </StyledTabText>
      {rightSource}
      {styleVar === 'INFO' && isActive && <Indicator layoutId='underline' />}
    </StyledTab>
  );
};
