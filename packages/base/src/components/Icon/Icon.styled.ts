import styled from '@emotion/styled';
import { colorTokens } from '../../styles';
import type { IconOptionProps, IconSizeVariantsType } from './Icon.types';
import { IconSizeVariants } from './Icon.types';

const getIconSize = (size: IconSizeVariantsType) => {
  switch (size) {
    case IconSizeVariants.XS:
      return '12px';
    case IconSizeVariants.S:
      return '20px';
    case IconSizeVariants.M:
      return '24px';
    case IconSizeVariants.L:
      return '30px';
    case IconSizeVariants.XL:
      return '36px';
    default:
      return 'fit-content';
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
