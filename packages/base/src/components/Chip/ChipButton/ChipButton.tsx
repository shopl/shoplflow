import React from 'react';
import { getTypographyDefault, StyledChip } from '../Chip.styled';
import type { ChipProps } from '../Chip.types';
import { ChipStyleVariants } from '../Chip.types';
import { Text } from '../../Text';

const ChipButton = ({
  text,
  background = 'neutral0',
  color = 'neutral600',
  styleVar = ChipStyleVariants.SOLID,
  sizeVar,
  leftSource,
  rightSource,
  ...rest
}: ChipProps) => {
  return (
    <StyledChip {...rest} styleVar={styleVar} background={background} sizeVar={sizeVar}>
      {leftSource}
      <Text typography={getTypographyDefault(styleVar, sizeVar)} color={color}>
        {text}
      </Text>
      {rightSource}
    </StyledChip>
  );
};

export default ChipButton;
