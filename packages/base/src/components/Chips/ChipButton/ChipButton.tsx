import type { MouseEvent, ReactElement } from 'react';

import { getLineTypographyBySizeVar, StyledChipButton } from './ChipButton.styled';
import type { ChipButtonProps } from './ChipButton.types';
import { Text } from '../../Text';
import { noop } from '@shoplflow/utils';
import { ChipButtonSizeVariants, ChipButtonStyleVariants } from './ChipButton.types';

const ChipButton = ({
  styleVar = ChipButtonStyleVariants.LINE,
  color = 'neutral200',
  sizeVar = ChipButtonSizeVariants.S,
  text,
  children,
  leftSource,
  rightSource,
  onClick = noop,
  disabled = false,
  isSelected = false,
  selectedBackground,
  selectedBorderColor,
  ...rest
}: ChipButtonProps): ReactElement => {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    !disabled && onClick(e);
  };

  return (
    <StyledChipButton
      styleVar={styleVar}
      color={color}
      {...rest}
      $isSelected={isSelected}
      $selectedBackground={selectedBackground}
      $selectedBorderColor={selectedBorderColor}
      onClick={handleOnClick}
      disabled={disabled}
      data-shoplflow={'ChipButton'}
    >
      {leftSource}
      {children || <Text typography={getLineTypographyBySizeVar(sizeVar)}>{text}</Text>}
      {rightSource}
    </StyledChipButton>
  );
};

export default ChipButton;
