import styled from '@emotion/styled';
import type { ColorTokens } from '../../styles';
import { colorTokens } from '../../styles';

export const SwitchContainer = styled.div<{ isDisabled: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isDisabled }) => isDisabled && 0.3};

  &:hover {
    background: ${({ isDisabled }) => !isDisabled && colorTokens.neutral400_5};
  }
`;

export const Switch = styled.input<{ activeColor: ColorTokens }>`
  appearance: none;
  border: none;
  border-radius: 12px;
  width: 28px;
  height: 18px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  background: ${colorTokens.neutral350};
  padding: 2px;
  margin: 0;

  // slider
  &:before {
    content: '';
    left: 2px;
    display: block;
    position: absolute;
    width: 14px;
    height: 14px;
    background: ${colorTokens.neutral0};
    border-radius: 50%;
    transition: left 0.2s ease-in-out;
  }

  // selected
  &:checked {
    background: ${({ activeColor }) => colorTokens[activeColor]};
    &:before {
      left: 12px;
    }
  }

  // disabled
  &:disabled {
    cursor: auto;
  }
`;
