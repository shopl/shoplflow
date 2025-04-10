import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { SLIDER_Z_INDEX } from './Slider.types';
import type { ColorTokens } from '../../styles';
import { colorTokens } from '../../styles';

export const SliderContainer = styled.div<{ isDisabled: boolean }>`
  position: relative;
  width: 100%;
  padding: 0 12px;
  user-select: none;
  background-color: ${colorTokens.neutral200};
  border-radius: 16px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

// 전체 슬라이더 트랙 (회색 배경)
export const SliderTrack = styled.div`
  width: 100%; // SliderContainer의 padding 영역 내에서 100%
  height: 24px;
  position: relative;
  overflow: visible;
  margin: 0;
`;

// 선택된 영역 트랙 (파란색)
export const SelectedTrack = styled.div<{
  selectedColor: ColorTokens;
  startPosition: string;
  width: string;
}>`
  position: absolute;
  height: 100%;
  border-radius: 16px;
  background-color: ${({ selectedColor }) => colorTokens[selectedColor]};
  top: 0;
  left: ${({ startPosition }) => startPosition};
  width: ${({ width }) => width};
`;

// 눈금 점들을 위한 컨테이너
export const StepsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

// 눈금 점
export const Steps = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: transparent;

  &[data-edge='true'] {
    width: 16px;
    height: 16px;
  }
`;

// 썸 버튼
export const ThumbButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  border: none;
  padding: 0;
  outline: none;
  z-index: ${SLIDER_Z_INDEX.THUMB_BUTTON}; // thumb를 track보다 위에 위치시킴
`;

// 썸 원형
export const ThumbCircle = styled.div<{ isDisabled: boolean; selectedColor: ColorTokens }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 0.5px solid transparent; // 자연스러운 transition을 위한 초기 border 설정
  background-color: ${colorTokens.neutral0};
  transition:
    transform 0.15s ease,
    border 0.15s ease;
  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'grab')};

  ${({ isDisabled, selectedColor }) =>
    !isDisabled &&
    css`
      &:active {
        border: 3px solid ${colorTokens[selectedColor]};
      }

      &:hover {
        border: 3px solid ${colorTokens[selectedColor]};
      }
    `}
`;
