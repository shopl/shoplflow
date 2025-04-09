import React from 'react';
import { Steps, StepsContainer } from './Slider.styled';
import { getPositionPercentage } from './sliderUtils';
import type { SliderBounds } from './Slider.types';

interface SliderStepsProps {
  bounds: SliderBounds;
  step: number;
  range: [number, number];
  maxSteps?: number;
}

export const SliderSteps: React.FC<SliderStepsProps> = ({ bounds, step, maxSteps = 21 }) => {
  const { min, max } = bounds;
  const totalSteps = Math.floor((max - min) / step) + 1;
  const stepInterval = totalSteps > maxSteps ? Math.ceil(totalSteps / maxSteps) : 1;
  const steps: number[] = [];

  for (let i = 0; i < totalSteps; i += stepInterval) {
    const value = min + i * step;
    if (value <= max) {
      steps.push(value);
    }
  }

  if (steps[steps.length - 1] !== max) {
    steps.push(max);
  }

  return (
    <StepsContainer>
      {steps.map((_, i) => {
        return (
          <Steps
            key={i}
            style={{
              left: `${getPositionPercentage(i, [min, max], bounds)}%`,
            }}
          />
        );
      })}
    </StepsContainer>
  );
};
