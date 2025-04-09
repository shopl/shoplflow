import React from 'react';
import { Tooltip } from '../Tooltip';
import { ThumbButton, ThumbCircle } from './Slider.styled';
import type { ColorTokens } from '../../styles';

interface SliderThumbsProps {
  positions: number[]; // 퍼센트 위치 배열
  isDisabled: boolean;
  selectedColor: ColorTokens;
  onMouseDown: (index: number) => (e: React.MouseEvent) => void;
}

export const SliderThumbs: React.FC<SliderThumbsProps> = ({ positions, isDisabled, selectedColor, onMouseDown }) => {
  return (
    <>
      {positions.map((position, index) => (
        <ThumbButton key={index} style={{ left: `${position}%` }} onMouseDown={onMouseDown(index)}>
          <Tooltip
            trigger={<ThumbCircle isDisabled={isDisabled} selectedColor={selectedColor} />}
            popper={!isDisabled && <Tooltip.Content content={position.toString()} />}
          />
        </ThumbButton>
      ))}
    </>
  );
};
