import styled from '@emotion/styled';
import type { IconButtonOptionProps } from './IconButton.types';
import { colorTokens } from '../../styles';

export const StyledIconButton = styled.button<IconButtonOptionProps>`
  display: flex;
  flex-shrink: 0;
  width: ${({ sizeVar }) => {
    switch (sizeVar) {
      case 'm':
        return '40px';
      case 's':
        return '32px';
      default:
        return '40px';
    }
  }};
  height: ${({ sizeVar }) => {
    switch (sizeVar) {
      case 'm':
        return '40px';
      case 's':
        return '32px';
      default:
        return '40px';
    }
  }};

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => disabled && '0.5'};

  justify-content: center;
  align-items: center;
  background-color: ${colorTokens.neutral0};
  ${({ styleVar }) => {
    if (!styleVar) {
      return;
    }
    if (styleVar === 'solid') {
      return `
				border: 1px solid ${colorTokens.neutral200}
			`;
    }
  }};

  &:hover {
    background-color: ${({ styleVar, disabled }) => {
      if (disabled) {
        return;
      }
      switch (styleVar) {
        case 'solid':
          return colorTokens.neutral100;
        case 'ghost':
          return colorTokens.neutral400_5;
        default:
          return colorTokens.neutral100;
      }
    }};
  }
`;
