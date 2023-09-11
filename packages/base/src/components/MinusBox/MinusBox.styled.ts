import styled from '@emotion/styled';
import type { ColorTokens } from '../../styles';
import { borderRadiusTokens, colorTokens } from '../../styles';

export const Container = styled.div`
  width: 32px;
  height: 32px;
  padding: 7px;
`;

export const IconWrapper = styled.button<{ color: ColorTokens; hoverColor: ColorTokens }>`
  display: flex;
  width: 16px;
  height: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadiusTokens['borderRadius04']};
  border: none;
  background: ${({ color }) => colorTokens[color]};
  cursor: pointer;
  transition:
    transform 0.1s ease-out,
    background 0.1s ease;

  &:hover {
    background: ${({ hoverColor }) => colorTokens[hoverColor]};
  }
`;

export const Input = styled.input`
  display: none;
  position: absolute;
`;
