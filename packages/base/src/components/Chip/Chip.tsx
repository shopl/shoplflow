import React from 'react';
import { getTypographyDefault, StyledChip } from './Chip.styled';
import type { ChipProps } from './Chip.types';
import { ChipStyleVariants } from './Chip.types';
import classNames from 'classnames';

const Chip = ({
  children,
  // background,
  styleVar = ChipStyleVariants.PILL,
  leftSource,
  rightSource,
  ...rest
}: ChipProps) => {
  const setVariantInChildren = (children: React.ReactNode) => {
    const text = classNames(getTypographyDefault(styleVar));
    return React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          className: text,
        });
      }
      return child;
    });
  };

  return (
    <StyledChip {...rest} className={classNames(getTypographyDefault(styleVar))} styleVar={styleVar}>
      {leftSource}
      {setVariantInChildren(children)}
      {rightSource}
    </StyledChip>
  );
};

export default Chip;
