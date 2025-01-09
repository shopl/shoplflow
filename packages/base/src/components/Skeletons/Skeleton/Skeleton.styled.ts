import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';

const animation = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(200%);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: ${colorTokens.neutral200};
  overflow: hidden;

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
