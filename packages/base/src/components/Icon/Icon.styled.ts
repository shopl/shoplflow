import styled from '@emotion/styled';
import { colorTokens } from '../../styles';
import type { IconOptionProps, IconSizeVariantsType } from './Icon.types';
import { IconSizeVariants } from './Icon.types';

const getIconSize = (size: IconSizeVariantsType) => {
  switch (size) {
    case IconSizeVariants.X_SMALL:
      return '12px';
    case IconSizeVariants.SMALL:
      return '20px';
    case IconSizeVariants.MEDIUM:
      return '24px';
    case IconSizeVariants.LARGE:
      return '30px';
    case IconSizeVariants.X_LARGE:
      return '36px';
    default:
      return '24px';
  }
};

export const StyledIcon = styled.svg<IconOptionProps>`
  width: ${({ sizeVar }) => sizeVar && getIconSize(sizeVar)};
  min-width: ${({ sizeVar }) => sizeVar && getIconSize(sizeVar)};
  height: ${({ sizeVar }) => sizeVar && getIconSize(sizeVar)};
  min-height: ${({ sizeVar }) => sizeVar && getIconSize(sizeVar)};

  & > path {
    fill: ${({ color }) => color && colorTokens[color]};
  }
`;
