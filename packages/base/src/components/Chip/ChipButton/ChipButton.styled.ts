import styled from '@emotion/styled';
import type { ChipToggleProps } from '../ChipToggle/ChipToggle.types';
import type { TypographyTokens } from '../../../styles';

export const getLineTypographyBySizeVar = (sizeVar: ChipToggleProps['sizeVar']): TypographyTokens => {
  switch (sizeVar) {
    case 'XS':
      return 'body3_400';
    case 'S':
      return 'body2_400';
    default:
      return 'body2_400';
  }
};

export const StyledChipButton = styled.button``;
