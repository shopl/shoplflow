import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colorTokens, spacingTokens } from 'src/styles';

export const StyledTextArea = styled.textarea`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: ${spacingTokens.spacing08} ${spacingTokens.spacing12};
  border: none;
  resize: none;
  border-radius: ${spacingTokens.spacing08};
  outline: none;
  color: ${colorTokens.neutral700};
  background: ${colorTokens.neutral0};
  cursor: auto;
  &::placeholder {
    color: ${colorTokens.neutral400};
  }
`;
export const LengthTextBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
  -webkit-justify-content: flex-end;
  align-items: flex-end;
  -webkit-align-items: flex-end;
  padding-right: ${spacingTokens.spacing12};
  padding-bottom: ${spacingTokens.spacing08};
  cursor: default;
`;

export const InputWrapper = styled.div<{
  isHovered: boolean;
  isSelected: boolean;
  isError: boolean;
  disabled: boolean;
  height?: number;
  minHeight?: number;
  flexDirection?: 'row' | 'column';
  sizeVar?: 'S' | 'M';
}>`
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: center;
  /**
    * box shadow로 border를 구현했기 때문에 border 영역을 별도로 만들어줘야합니다.
   */

  background: ${colorTokens.neutral300};
  margin: ${spacingTokens.spacing04};
  box-sizing: border-box;
  box-shadow: 0 0 0 1px ${colorTokens.neutral300};
  ${({ isHovered }) =>
    isHovered &&
    css`
      box-shadow: ${colorTokens.neutral700};
    `};
  ${({ isSelected }) =>
    isSelected &&
    css`
      box-shadow: ${colorTokens.primary300};
    `};
  ${({ isError }) =>
    isError &&
    css`
      box-shadow: ${colorTokens.red300};
    `};

  transition: box-shadow 0.2s ease-in-out;
  border-radius: ${spacingTokens.spacing08};
  cursor: pointer;
  z-index: 301;
  ${({ minHeight }) =>
    minHeight &&
    css`
      min-height: minHeight;
    `};
  ${({ disabled }) =>
    disabled &&
    css`
      background: ${disabled ? colorTokens.neutral300 : colorTokens.neutral150};
      cursor: not-allowed;
      box-shadow: 0 0 0 1px ${colorTokens.neutral300};
    `};
  ${({ sizeVar }) => {
    switch (sizeVar) {
      case 'S':
        return css`
          height: 40px;
        `;
      case 'M':
        return css`
          height: 40px;
        `;
      default:
        return css`
          height: 40px;
        `;
    }
  }};
  width: calc(100% - 2px);
  height: ${({ height }) => height};
`;
