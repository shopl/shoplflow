import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { borderRadiusTokens, colorTokens } from '../../styles';

export const PaginationWrapper = styled.div<{ $centerNav?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  /* Shopl: 좌/우 아이템 폭과 개수와 무관하게 네비를 고정 중앙에 둔다. */
  ${({ $centerNav }) =>
    $centerNav &&
    css`
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      align-items: center;
      column-gap: 8px;

      & > *:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 0;
        overflow: hidden;
      }
      & > *:nth-child(2) {
        justify-self: center;
      }
      & > *:nth-child(3) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-width: 0;
        overflow: hidden;
      }
    `}

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
