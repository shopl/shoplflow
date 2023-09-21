import type { MouseEvent } from 'react';
import React from 'react';
import { getLineTypographyBySizeVar, StyledChip } from '../Chip.styled';
import { Text } from '../../Text';
import type { ChipProps } from '../Chip.types';
import { ChipStyleVariants } from '../Chip.types';
import { useOnToggle } from '../../../hooks/useOnToggle';

const ChipToggle = ({
  text,
  isSelected,
  defaultSelected,
  color = 'neutral600',
  styleVar = ChipStyleVariants.SOLID,
  sizeVar,
  leftSource,
  rightSource,
  onClick,
  ...rest
}: ChipProps) => {
  const [isToggled, handleToggle] = useOnToggle(isSelected, defaultSelected);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleToggle();
    onClick && onClick(e);
  };

  return (
    <StyledChip
      {...rest}
      color={color}
      isSelected={isToggled}
      styleVar={styleVar}
      sizeVar={sizeVar}
      onClick={handleClick}
    >
      {leftSource}
      <Text typography={getLineTypographyBySizeVar(sizeVar)}>{text}</Text>
      {rightSource}
    </StyledChip>
  );
};

export default ChipToggle;
