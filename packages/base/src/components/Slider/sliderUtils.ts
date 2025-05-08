import type { SliderBounds } from './Slider.types';

/**
 * 선택된 값을 bounds 범위 내에서 step에 맞게 조정합니다.
 * @param value - 조정할 원본 값
 * @param bounds - 슬라이더의 최소값과 최대값
 * @param step - 값의 증분 단위
 * @returns 범위와 단계에 맞게 조정된 값
 */
export const getAdjustedValue = (value: number, bounds: SliderBounds, step: number): number => {
  const { min, max } = bounds;
  const snappedValue = Math.round((value - min) / step) * step + min;
  return Math.max(min, Math.min(max, snappedValue));
};

/**
 * thumb의 위치를 퍼센트로 변환합니다.
 * 이 값은 thumb의 위치 계산에 사용됩니다.
 *
 * @param index - 위치를 계산할 썸의 인덱스 (0: 첫 번째, 1: 두 번째)
 * @param selectedRange - 슬라이더의 현재 선택 범위 배열 [min, max]
 * @param bounds - 슬라이더의 최소값과 최대값
 * @returns 전체 폭 대비 썸의 위치를 나타내는 퍼센트 값 (0-100)
 *
 * @example
 * // 50(%) 반환 (0-100 범위에서 50 위치)
 * getPositionPercentage(0, [50, 75], 0, 100);
 */
export const getPositionPercentage = (index: number, selectedRange: [number, number], bounds: SliderBounds): number => {
  const { min, max } = bounds;
  return Math.trunc(((selectedRange[index] - min) / (max - min)) * 100);
};

/**
 * 슬라이더 트랙 위치의 퍼센트 값을 실제 값으로 변환합니다.
 * 클릭이나 드래그 위치를 값으로 변환할 때 사용됩니다.
 *
 * @param percentage - 변환할 퍼센트 값 (0-100)
 * @param bounds - 슬라이더의 최소값과 최대값
 * @param step - 값의 증분 단위
 * @returns 퍼센트에 해당하는 실제 값 (step에 맞게 조정됨)
 */
export const getValueFromPercentage = (percentage: number, bounds: SliderBounds, step: number): number => {
  const { min, max } = bounds;
  const rawValue = min + (percentage / 100) * (max - min);
  return getAdjustedValue(rawValue, bounds, step);
};

/**
 * 범위와 step에 따라 균등하게 표시할 눈금점 배열을 생성합니다.
 * @param bounds - 슬라이더의 최소값과 최대값
 * @param step - 값의 증분 단위
 * @param maxSteps - 생성할 최대 눈금 수 (기본값: 21)
 * @returns 슬라이더에 표시할 눈금점 값의 배열
 */
export const generateSteps = (bounds: SliderBounds, step: number, maxSteps = 21): number[] => {
  const { min, max } = bounds;
  const totalSteps = Math.floor((max - min) / step) + 1;
  const stepInterval = totalSteps > maxSteps ? Math.ceil(totalSteps / maxSteps) : 1;
  const tickValues: number[] = [];

  for (let i = 0; i < totalSteps; i += stepInterval) {
    const value = min + i * step;
    if (value <= max) {
      tickValues.push(value);
    }
  }

  if (tickValues.length > 0 && tickValues[tickValues.length - 1] !== max) {
    tickValues.push(max);
  }

  return tickValues;
};

/**
 * Slider의 전체 범위와 초기 선택 범위가 유효한지 확인합니다.
 * 범위가 유효하지 않을 경우 에러를 발생시킵니다.
 *
 * @param min - 슬라이더의 최소값
 * @param max - 슬라이더의 최대값
 * @param range - 슬라이더의 선택 범위 { min, max }
 */
export const validateRange = ({
  min,
  max,
  range,
}: {
  min: number;
  max: number;
  range: { min: number; max: number };
}) => {
  if (range.min < min || range.max > max) {
    throw new Error('range가 Slider의 전체 범위를 벗어납니다.');
  }
  if (range.min > range.max) {
    throw new Error('range가 올바르지 않습니다. 다시 확인해주세요.');
  }
};

/**
 * Slider의 step이 양수이며, Slider의 전체 범위 내에 있는지 확인합니다.
 * 범위가 유효하지 않을 경우 에러를 발생시킵니다.
 *
 * @param min - 슬라이더의 최소값
 * @param max - 슬라이더의 최대값
 * @param step - 검증할 증분 단위
 */
export const validateStep = ({ min, max, step }: { min: number; max: number; step: number }) => {
  if (step <= 0) {
    throw new Error('step은 0보다 커야 합니다.');
  }
  if (step > max || step < min || step > max - min) {
    throw new Error('step이 Slider의 전체 범위를 벗어납니다.');
  }
};
