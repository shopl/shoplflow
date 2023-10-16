import styled from '@emotion/styled';
import type { ColorTokens } from '../../styles';
import { borderRadiusTokens, colorTokens } from '../../styles';
import { getNextColor } from '../../utils/getNextColor';

export const Container = styled.div`
  width: 32px;
  height: 32px;
  padding: 7px;
`;

export const IconButton = styled.button<{ color: ColorTokens }>`
  display: flex;
  width: 16px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadiusTokens.borderRadius04};
  border: none;
  background: ${({ color }) => colorTokens[color]};
  cursor: pointer;
  transition:
    transform 0.1s ease-out,
    background 0.1s ease;

  &:hover {
    background: ${({ color }) => colorTokens[getNextColor(color!, 1)]};
  }
`;
