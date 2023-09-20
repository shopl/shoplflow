import React from 'react';
import { getLineTypographyBySizeVar, StyledChip } from '../Chip.styled';
import type { ChipProps } from '../Chip.types';
import { ChipStyleVariants } from '../Chip.types';
import { Text } from '../../Text';

const ChipButton = ({
  text,
  color = 'neutral600',
  styleVar = ChipStyleVariants.SOLID,
  sizeVar,
  leftSource,
  rightSource,
  ...rest
}: ChipProps) => {
  return (
    <StyledChip {...rest} styleVar={styleVar} sizeVar={sizeVar}>
      {leftSource}
      <Text typography={getLineTypographyBySizeVar(sizeVar)} color={color}>
        {text}
      </Text>
      {rightSource}
    </StyledChip>
  );
};

export default ChipButton;
