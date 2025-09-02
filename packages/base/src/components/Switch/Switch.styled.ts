import styled from '@emotion/styled';
import type { ColorTokens } from '../../styles';
import { borderRadiusTokens, colorTokens } from '../../styles';
import type { SwitchSizeVariantType } from './Switch.types';
import { css } from '@emotion/react';

const getContainerStylesBySizeVar = (sizeVar: SwitchSizeVariantType) => {
  switch (sizeVar) {
    case 'S':
      return css`
        width: 24px;
        height: 24px;
        border-radius: ${borderRadiusTokens.borderRadius04};
      `;
    case 'M':
      return css`
        border-radius: ${borderRadiusTokens.borderRadius06};
        width: 32px;
        height: 32px;
      `;
  }
};

export const SwitchContainer = styled.div<{ isDisabled: boolean; sizeVar: SwitchSizeVariantType }>`
  ${({ sizeVar }) => getContainerStylesBySizeVar(sizeVar)}

  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isDisabled }) => isDisabled && 0.3};

  &:hover {
    background: ${({ isDisabled }) => !isDisabled && colorTokens.neutral400_5};
  }
`;

export const getCircleStylesBySizeVar = (sizeVar: SwitchSizeVariantType) => {
  switch (sizeVar) {
    case 'S':
      return css`
        width: 12px;
        height: 12px;
        aspect-ratio: 1/1;
        border-radius: ${borderRadiusTokens.borderRadius04};
      `;

    case 'M':
      return css`
        width: 14px;
        height: 14px;
        border-radius: 50%;
      `;
  }
};

const getSwitchStylesBySizeVar = (sizeVar: SwitchSizeVariantType) => {
  switch (sizeVar) {
    case 'S':
      return css`
        border-radius: ${borderRadiusTokens.borderRadius06};
        width: 24px;
        height: 16px;
      `;
    case 'M':
      return css`
        border-radius: 12px;
        width: 28px;
        height: 18px;
      `;
  }
};

export const StyledSwitch = styled.input<{ activeColor: ColorTokens; sizeVar: SwitchSizeVariantType }>`
  appearance: none;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  background: ${colorTokens.neutral350};
  padding: 2px;
  margin: 0;

  ${({ sizeVar }) => getSwitchStylesBySizeVar(sizeVar)}

  // slider
  &:before {
    content: '';
    left: 2px;
    display: block;
    position: absolute;
    ${({ sizeVar }) => getCircleStylesBySizeVar(sizeVar)}
    background: ${colorTokens.neutral0};
    transition: left 0.2s ease-in-out;
  }

  // selected
  &:checked {
    background: ${({ activeColor }) => colorTokens[activeColor]};
    &:before {
      left: ${({ sizeVar }) => (sizeVar === 'S' ? '10px' : '12px')};
    }
  }

  // disabled
  &:disabled {
    cursor: auto;
  }
`;
