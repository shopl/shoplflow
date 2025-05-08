import React from 'react';
import { Steps, StepsContainer } from './Slider.styled';
import { generateSteps } from './sliderUtils';
import type { SliderBounds } from './Slider.types';

interface SliderStepsProps {
  bounds: SliderBounds;
  step: number;
  maxSteps?: number;
}

export const SliderSteps: React.FC<SliderStepsProps> = ({ bounds, step, maxSteps = 21 }) => {
  const steps = generateSteps(bounds, step, maxSteps);
  const { min, max } = bounds;

  return (
    <StepsContainer>
      {steps.map((stepValue) => {
        const position = ((stepValue - min) / (max - min)) * 100;
        return (
          <Steps
            key={stepValue}
            style={{
              left: `${position}%`,
            }}
          />
        );
      })}
    </StepsContainer>
  );
};
