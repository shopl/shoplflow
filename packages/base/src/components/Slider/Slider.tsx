import React from 'react';
import type { SliderProps } from './Slider.types';
import { SliderContainer, SliderTrack, SelectedTrack } from './Slider.styled';
import { SliderSteps } from './SliderSteps';
import { SliderThumbs } from './SliderThumbs';
import { useSlider } from './useSlider';

const Slider: React.FC<SliderProps> = ({
  min = 0,
  max,
  step = 1,
  defaultRange = { min: 0, max: 0 },
  handleRange,
  isDisabled = false,
  selectedColor = 'shopl300',
}) => {
  const { range, trackRef, handleMouseDown, handleClickTrack, positions } = useSlider({
    bounds: { min, max },
    step,
    defaultRange,
    handleRange,
    isDisabled,
  });

  return (
    <SliderContainer isDisabled={isDisabled}>
      <SliderTrack ref={trackRef} onClick={handleClickTrack}>
        <SliderSteps bounds={{ min, max }} step={step} range={range} />
        <SelectedTrack
          selectedColor={selectedColor}
          startPosition={`calc(${positions.start}% - 12px)`} //thumb을 완전히 감싸는 UI 구현을 위해 -12px
          width={`calc(${positions.width}% + 24px)`} //thumb을 완전히 감싸는 UI 구현을 위해 +24px
        />
        <SliderThumbs
          positions={[positions.start, positions.end]}
          isDisabled={isDisabled}
          selectedColor={selectedColor}
          onMouseDown={handleMouseDown}
          values={range}
        />
      </SliderTrack>
    </SliderContainer>
  );
};

export default Slider;
