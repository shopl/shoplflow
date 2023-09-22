import styled from '@emotion/styled';
import type { ButtonOptionProps } from './Button.types';
import { borderRadiusTokens, spacingTokens, colorTokens } from '../../styles';

export const StyledButton = styled.button<ButtonOptionProps>`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacingTokens.spacing04};
  border-radius: ${borderRadiusTokens.borderRadius06};
  border: 1px solid
    ${({ styleVar: buttonType }) => {
      switch (buttonType) {
        case 'primary':
          return colorTokens['primary400'];
        case 'secondary':
          return colorTokens['neutral350'];
        case 'solid':
          return colorTokens['coolgray100'];
        case 'ghost':
          return 'transparent';
        default:
          return colorTokens['primary200'];
      }
    }};
  opacity: ${({ disabled }) => Boolean(disabled) && '0.5'};
  padding: 0px ${spacingTokens.spacing12};
  min-width: ${({ sizeVar: buttonSize }) => {
    switch (buttonSize) {
      case 'm':
        return '72px';
      case 's':
        return '54px';
      default:
        return '72px';
    }
  }};
  min-height: ${({ sizeVar: buttonSize }) => {
    switch (buttonSize) {
      case 'm':
        return '40px';
      case 's':
        return '32px';
      default:
        return '40px';
    }
  }};
  background-color: ${({ styleVar: buttonType }) => {
    switch (buttonType) {
      case 'primary':
        return colorTokens['primary300'];
      case 'secondary':
        return colorTokens['neutral0'];
      case 'solid':
        return colorTokens['coolgray50'];
      case 'ghost':
        return 'transparent';
      default:
        return colorTokens['primary100'];
    }
  }};
  border-radius: ${borderRadiusTokens['borderRadius12']};

  &:hover {
    background-color: ${({ styleVar: buttonType, disabled }) => {
      if (disabled) {
        return;
      }
      switch (buttonType) {
        case 'primary':
          return colorTokens['primary400'];
        case 'secondary':
          return colorTokens['neutral100'];
        case 'solid':
          return colorTokens['coolgray100'];
        case 'ghost':
          return colorTokens['neutral400_5'];
        default:
          return colorTokens['primary200'];
      }
    }};
  }

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  /* ${({ disabled }) => {
    if (!disabled) {
      return;
    }

    return `
          background-color: red;
          border: 1px solid yellow;
        `;
  }} */
`;
