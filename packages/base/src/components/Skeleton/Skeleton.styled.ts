import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colorTokens } from '../../styles';
import type { SkeletonProps } from './Skeleton.types';

const animation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(200%);
  }
`;

// 기존 getSkeletonStyles 함수 그대로 유지
const getSkeletonStyles = (width: string, height: string, styleVar: SkeletonProps['styleVar']) => {
  switch (styleVar) {
    case 'circle':
      return css`
        width: ${width};
        height: ${width};
        border-radius: 50%;
      `;
    case 'rectangle':
      return css`
        width: ${width};
        height: ${height};
      `;
  }
};

export const Container = styled.div<{
  styleVar: SkeletonProps['styleVar'];
  width: string;
  height: string;
}>`
  position: relative;
  border-radius: 8px;
  background-color: ${colorTokens.neutral200};
  overflow: hidden;

  ${({ styleVar, width, height }) => getSkeletonStyles(width, height, styleVar)};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    transform: translateX(-100%);
    animation: ${animation} 2s infinite;
  }
`;
