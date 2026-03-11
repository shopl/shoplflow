import styled from '@emotion/styled';

import { colorTokens } from '../../styles';
import type { ColorTokens } from '../../styles';

export const StyledHelperText = styled.div``;

export const BulletDot = styled.span<{ color?: ColorTokens }>`
  margin-top: 8px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${({ color = 'neutral700' }) => colorTokens[color]};
`;
