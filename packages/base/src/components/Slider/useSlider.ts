import { useRef, useCallback, useMemo } from 'react';
import { getPositionPercentage, getValueFromPercentage, validateRange, validateStep } from './sliderUtils';
import type { SliderBounds } from './Slider.types';

interface UseSliderProps {
  bounds: SliderBounds;
  step: number;
  range: { min: number; max: number };
  handleRange?: (range: { min: number; max: number }) => void;
  isDisabled?: boolean;
}

export const useSlider = ({ bounds, step, range, handleRange, isDisabled = false }: UseSliderProps) => {
  const { min, max } = bounds;
  // 유효성 검증
  validateRange({ min, max, range });
  validateStep({ min, max, step });

  const trackRef = useRef<HTMLDivElement>(null);

  const updateRange = useCallback(
    (index: number, newValue: number) => {
      const newRange = [range.min, range.max] as [number, number];
      if (index === 0) {
        newRange[0] = Math.min(newValue, newRange[1]);
      } else if (index === 1) {
        newRange[1] = Math.max(newValue, newRange[0]);
      }
      handleRange?.({ min: newRange[0], max: newRange[1] });
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
      const distanceToStart = Math.abs(getPositionPercentage(0, [range.min, range.max], { min, max }) - percentage);
      const distanceToEnd = Math.abs(getPositionPercentage(1, [range.min, range.max], { min, max }) - percentage);

      if (distanceToStart <= distanceToEnd) {
        updateRange(0, newValue);
      } else {
        updateRange(1, newValue);
      }
    },
    [isDisabled, min, max, step, range, updateRange],
  );

  // 위치 계산을 useMemo로 감싸서 range가 변경될 때마다 다시 계산되도록 수정
  const positions = useMemo(() => {
    const startPosition = getPositionPercentage(0, [range.min, range.max], { min, max });
    const endPosition = getPositionPercentage(1, [range.min, range.max], { min, max });
    const width = endPosition - startPosition;

    return {
      start: startPosition,
      end: endPosition,
      width,
    };
  }, [range, min, max]);

  return {
    selectedRange: [range.min, range.max],
    trackRef,
    handleMouseDown,
    handleClickTrack,
    positions,
  };
};
