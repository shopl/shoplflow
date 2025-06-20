import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens, spacingTokens } from '../../styles';
import type { ToggleButtonSizeVariantType } from './ToggleButton.types';
import { css } from '@emotion/react';

const getLabelStyleByStatus = (selected: boolean, disabled: boolean) => {
  if (disabled && selected) {
    return css`
      background-color: ${colorTokens.neutral0};
      cursor: not-allowed;
    `;
  }

  if (disabled) {
    return css`
      cursor: not-allowed;
      opacity: 0.5;
    `;
  }

  if (selected) {
    return css`
      cursor: default;
      background-color: ${colorTokens.neutral0};
    `;
  }
};

const getLabelStyleBySizeVar = (sizeVar: ToggleButtonSizeVariantType) => {
  switch (sizeVar) {
    case 'S': {
      return css`
        padding: 4px 8px;
      `;
    }

    case 'M': {
      return css`
        padding: 8px;
      `;
    }

    default: {
      return;
    }
  }
};

export const StyledToggleButton = styled.div`
  display: flex;
  padding: ${spacingTokens.spacing04};
  align-items: stretch;
  background-color: ${colorTokens.neutral150};
  border-radius: ${borderRadiusTokens.borderRadius06};
`;

export const StyledToggleInner = styled.button<{
  width: number;
  disabled?: boolean;
  selected: boolean;
  sizeVar: ToggleButtonSizeVariantType;
}>`
  width: fit-content;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ width }) => `${width}px`};
  padding: 0 12px;
  border-radius: 6px;
  background-color: transparent;
  ${({ disabled, selected }) => getLabelStyleByStatus(selected, Boolean(disabled))}
  ${({ sizeVar }) => getLabelStyleBySizeVar(sizeVar)}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      css`
        cursor: pointer;
        background-color: ${colorTokens.neutral400_5};
      `}
  }
`;

export const StyledToggleInnerLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

export const StyledToggleInnerInput = styled.input`
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
`;
