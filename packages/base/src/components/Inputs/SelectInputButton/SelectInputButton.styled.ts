import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';

export const StyledSelectInputButton = styled.div<{
  disabled?: boolean;
  sizeVar: 'S' | 'M';
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ disabled }) => (disabled ? colorTokens.neutral100 : colorTokens.neutral0)};
  gap: 4px;
  padding: ${({ sizeVar }) => (sizeVar === 'M' ? '4px 4px 4px 12px' : '0 8px')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
