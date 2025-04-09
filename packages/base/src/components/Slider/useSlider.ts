import { useState, useRef, useCallback } from 'react';
import { getPositionPercentage, getValueFromPercentage } from './sliderUtils';
import type { SliderBounds } from './Slider.types';

interface UseSliderProps {
  bounds: SliderBounds;
  step: number;
  defaultRange: { min: number; max: number };
  handleRange?: (range: { min: number; max: number }) => void;
  isDisabled?: boolean;
}

export const useSlider = ({ bounds, step, defaultRange, handleRange, isDisabled = false }: UseSliderProps) => {
  const { min, max } = bounds;
  // 초기값 유효성 검증
  if (defaultRange.min < min || defaultRange.max > max) {
    throw new Error(`초기값으로 설정된 범위가 Slider의 선택 가능한 범위를 벗어납니다.`);
  }
  if (defaultRange.min > defaultRange.max) {
    throw new Error(`초기값으로 설정된 범위가 올바르지 않습니다. 최소값과 최대값을 다시 확인해주세요.`);
  }
  if (step > max) {
    throw new Error(`증분 단위(step)가 Slider의 최대값보다 큽니다.`);
  }

  const [range, setRange] = useState<[number, number]>([defaultRange.min, defaultRange.max]);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateRange = useCallback(
    (index: number, newValue: number) => {
      setRange((prev) => {
        const newRange = [...prev] as [number, number];

        // 첫 번째 thumb가 두 번째 thumb를 넘어가지 않도록 처리
        if (index === 0) {
          newRange[0] = Math.min(newValue, newRange[1]);
        }
        // 두 번째 thumb가 첫 번째 thumb 아래로 내려가지 않도록 처리
        else if (index === 1) {
          newRange[1] = Math.max(newValue, newRange[0]);
        }

        return newRange;
      });

      // 새로운 값을 사용하여 콜백 호출
      handleRange?.({ min: range[0], max: range[1] });
    },
    [range, handleRange],
  );

  // 드래그 이벤트 처리
  const handleMouseDown = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      if (isDisabled) {
        return;
      }
      e.preventDefault();

      const handleMouseMove = (moveEvent: MouseEvent) => {
        if (!trackRef.current) {
          return;
        }

        const rect = trackRef.current.getBoundingClientRect();
        const offsetX = moveEvent.clientX - rect.left;
        const percentage = Math.min(Math.max((offsetX / rect.width) * 100, 0), 100);

        const newValue = getValueFromPercentage(percentage, { min, max }, step);
        updateRange(index, newValue);
      };

      const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [isDisabled, min, max, step, updateRange],
  );

  const handleClickTrack = useCallback(
    (e: React.MouseEvent) => {
      if (isDisabled || !trackRef.current) {
        return;
      }

      const rect = trackRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = (offsetX / rect.width) * 100;
      const newValue = getValueFromPercentage(percentage, { min, max }, step);

      // 클릭한 위치가 어떤 썸에 더 가까운지 결정
      const distanceToStart = Math.abs(getPositionPercentage(0, range, { min, max }) - percentage);
      const distanceToEnd = Math.abs(getPositionPercentage(1, range, { min, max }) - percentage);

      if (distanceToStart <= distanceToEnd) {
        updateRange(0, newValue);
      } else {
        updateRange(1, newValue);
      }
    },
    [isDisabled, min, max, step, range, updateRange],
  );

  // 위치 계산
  const startPosition = getPositionPercentage(0, range, { min, max });
  const endPosition = getPositionPercentage(1, range, { min, max });
  const width = endPosition - startPosition;

  return {
    range,
    trackRef,
    handleMouseDown,
    handleClickTrack,
    positions: {
      start: startPosition,
      end: endPosition,
      width,
    },
  };
};
