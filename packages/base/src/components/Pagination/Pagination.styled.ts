import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens } from '../../styles';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const StyledPagination = styled.nav`
  display: flex;
  align-items: center;
`;

export const PageItem = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: ${borderRadiusTokens.borderRadius08};
  background-color: ${({ isActive }) => (isActive ? colorTokens.neutral300 : colorTokens.neutral0)};
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? colorTokens.neutral300 : colorTokens.neutral100)};
  }
`;

export const Ellipsis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
