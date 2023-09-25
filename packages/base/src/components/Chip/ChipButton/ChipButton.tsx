import React from 'react';

import { StyledChipButton } from './ChipButton.styled';
import type { ChipButtonProps } from './ChipButton.types';

const ChipButton = ({ ...rest }: ChipButtonProps) => {
  return <StyledChipButton {...rest}>aa</StyledChipButton>;
};

export default ChipButton;
