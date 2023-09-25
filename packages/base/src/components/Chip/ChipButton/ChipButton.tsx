import type { MouseEvent } from 'react';
import React from 'react';

import { getLineTypographyBySizeVar, StyledChipButton } from './ChipButton.styled';
import type { ChipButtonProps } from './ChipButton.types';
import { Text } from '../../Text';
import { noop } from '@shoplflow/utils';

const ChipButton = ({
  styleVar = 'LINE',
  color = 'neutral200',
  sizeVar = 'S',
  text,
  onClick = noop,
  disabled = false,
  ...rest
}: ChipButtonProps) => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    disabled && onClick(e);
  };

  return (
    <StyledChipButton styleVar={styleVar} color={color} {...rest} onClick={handleOnClick}>
      <Text typography={getLineTypographyBySizeVar(sizeVar)}>{text}</Text>
    </StyledChipButton>
  );
};

export default ChipButton;
