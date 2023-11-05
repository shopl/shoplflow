import type { MouseEvent } from 'react';
import React from 'react';

import { Text } from '../../Text';

import { useOnToggle } from '../../../hooks/useOnToggle';
import type { ChipToggleProps } from './ChipToggle.types';
import { ChipToggleStyleVariants } from './ChipToggle.types';
import { getLineTypographyBySizeVar, StyledChip } from './ChipToggle.styled';
import { noop } from '@shoplflow/utils';

const ChipToggle = ({
  text,
  isSelected,
  defaultSelected,
  color = 'neutral600',
  styleVar = ChipToggleStyleVariants.SOLID,
  sizeVar,
  leftSource,
  rightSource,
  onClick = noop,
  disabled = false,
  ...rest
}: ChipToggleProps) => {
  const [isToggled, handleToggle] = useOnToggle(isSelected, defaultSelected);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    !disabled && handleToggle();
    !disabled && onClick && onClick(e);
  };

  return (
    <StyledChip
      {...rest}
      color={color}
      isSelected={isToggled}
      styleVar={styleVar}
      sizeVar={sizeVar}
      onClick={handleClick}
      disabled={disabled}
      data-shoplflow={'chip-toggle'}
    >
      {leftSource}
      <Text typography={getLineTypographyBySizeVar(sizeVar)}>{text}</Text>
      {rightSource}
    </StyledChip>
  );
};

export default ChipToggle;
