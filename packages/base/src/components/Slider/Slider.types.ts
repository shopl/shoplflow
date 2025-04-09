import type { ColorTokens } from '../../styles';

export interface SliderProps {
  /**
   * 선택 가능한 최소값
   */
  min: number;
  /**
   * 선택 가능한 최대값
   */
  max: number;
  /**
   * 증분 단위
   */
  step?: number;
  /**
   * 초기 선택 범위
   */
  defaultRange?: { min: number; max: number };
  /**
   * 선택 범위가 변경될 때 실행할 함수
   */
  handleRange?: (range: { min: number; max: number }) => void;
  /**
   * 비활성화 여부
   */
  isDisabled?: boolean;
  /**
   * 선택된 범위에 적용될 색상
   */
  selectedColor?: ColorTokens;
}

export type SliderBounds = {
  min: number;
  max: number;
};

export const SLIDER_Z_INDEX = {
  THUMB_BUTTON: 10,
} as const;
