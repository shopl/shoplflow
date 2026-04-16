import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { borderRadiusTokens, colorTokens } from '../../styles';

export const PaginationWrapper = styled.div<{ $centerNav?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  /* Shopl: Figma pagenation bar — 양끝은 흐름 배치, 네비는 바 전체 기준 absolute 중앙 (node 13760:25910) */
  ${({ $centerNav }) =>
    $centerNav &&
    css`
      position: relative;
      justify-content: space-between;

      /* div → nav → div 이므로 nth-of-type(2)는 두 번째 div(우측)만 잡힘 → 반드시 nth-child */
      & > *:nth-child(1) {
        position: relative;
        z-index: 2;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
      & > *:nth-child(2) {
        position: absolute;
        left: 50%;
        top: 50%;
        z-index: 1;
        transform: translate(-50%, -50%);
        width: max-content;
        max-width: 100%;
        pointer-events: none;

        & > * {
          pointer-events: auto;
        }
      }
      & > *:nth-child(3) {
        position: relative;
        z-index: 2;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
