import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens } from '../../styles';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  &.hada-responsive {
    @media (max-width: 720px) {
      justify-content: space-between;
    }
  }
`;

export const StyledPagination = styled.nav`
  display: flex;
  align-items: center;

  &.hada-responsive {
    @media (max-width: 720px) {
      margin-left: auto;
    }
  }
`;

export const PageItem = styled.button<{ isActive: boolean; sizeVar: 'S' | 'XS' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ sizeVar }) => (sizeVar === 'XS' ? '24px' : '32px')};
  height: ${({ sizeVar }) => (sizeVar === 'XS' ? '24px' : '32px')};
  border-radius: ${borderRadiusTokens.borderRadius08};
  background-color: ${({ isActive }) => (isActive ? colorTokens.neutral300 : colorTokens.neutral0)};
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? colorTokens.neutral300 : colorTokens.neutral100)};
  }

  &.hada-responsive {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const Ellipsis = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;

  &.hada-responsive {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;

export const RightSourceWrapper = styled.div`
  &.hada-responsive {
    @media (max-width: 720px) {
      display: none;
    }
  }
`;
