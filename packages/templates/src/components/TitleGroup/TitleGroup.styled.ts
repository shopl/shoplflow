import styled from '@emotion/styled';
import { colorTokens, type ColorTokens, type TextOptionProps } from '@shoplflow/base';

export const getTypographyAndColor = (
  depth: number,
): { typography: TextOptionProps['typography']; color: ColorTokens } => {
  switch (depth) {
    case 1:
      return { typography: 'title2_700', color: 'neutral700' };
    case 2:
    default:
      return { typography: 'body1_700', color: 'neutral700' };
    case 3:
      return { typography: 'body1_700', color: 'neutral500' };
  }
};

export const StyledRequired = styled.div`
  color: ${colorTokens.red300};
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  padding-top: 1px;
`;
