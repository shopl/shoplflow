import { useState, useRef, useCallback } from 'react';
import { getPositionPercentage, getValueFromPercentage, validateRange, validateStep } from './sliderUtils';
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
  // 유효성 검증
  validateRange({ min, max, defaultRange });
  validateStep({ min, max, step });

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
        handleRange?.({ min: newRange[0], max: newRange[1] });
        return newRange;
      });
    },
    [handleRange],
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
