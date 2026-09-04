import styled from '@emotion/styled';
import { Combobox as BaseCombobox } from '@base-ui/react/combobox';
import { borderRadiusTokens, boxShadowTokens, colorTokens, spacingTokens } from '../../../styles';
import type { ComboboxSizeVariantType, ComboboxTextAlignType } from './Combobox.types';

export const ComboboxRoot = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${spacingTokens.spacing06};
  width: fit-content;
  max-width: 100%;
`;

const getFieldHeight = (sizeVar: ComboboxSizeVariantType) => (sizeVar === 'S' ? '32px' : '40px');

const getInputPadding = (sizeVar: ComboboxSizeVariantType) =>
  sizeVar === 'S'
    ? `0 0 0 ${spacingTokens.spacing08}`
    : `${spacingTokens.spacing04} 0 ${spacingTokens.spacing04} ${spacingTokens.spacing12}`;

export const StyledInputGroup = styled(BaseCombobox.InputGroup, {
  shouldForwardProp: (prop) => prop !== 'sizeVar' && prop !== 'width',
})<{ sizeVar: ComboboxSizeVariantType; width?: string }>`
  display: flex;
  align-items: center;
  gap: ${spacingTokens.spacing04};
  box-sizing: border-box;
  min-width: 60px;
  width: ${({ width }) => width ?? '90px'};
  height: ${({ sizeVar }) => getFieldHeight(sizeVar)};
  border: 1px solid ${colorTokens.neutral300};
  border-radius: ${borderRadiusTokens.borderRadius06};
  background: ${colorTokens.neutral0};
  overflow: hidden;

  &:hover:not([data-disabled]):not([data-invalid]):not(:focus-within) {
    border-color: ${colorTokens.neutral700};
  }

  &:focus-within:not([data-invalid]) {
    border-color: ${colorTokens.primary300};
  }

  &[data-invalid] {
    border-color: ${colorTokens.red300};
  }

  &[data-disabled] {
    background: ${colorTokens.neutral100};
    border-color: ${colorTokens.neutral300};
    cursor: not-allowed;
  }
`;

export const StyledInput = styled(BaseCombobox.Input, {
  shouldForwardProp: (prop) => prop !== 'textAlign' && prop !== 'sizeVar',
})<{ textAlign: ComboboxTextAlignType; sizeVar: ComboboxSizeVariantType }>`
  flex: 1 1 auto;
  min-width: 1px;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  padding: ${({ sizeVar }) => getInputPadding(sizeVar)};
  text-align: ${({ textAlign }) => textAlign};
  color: ${colorTokens.neutral700};
  box-sizing: border-box;

  &::placeholder {
    color: ${colorTokens.neutral350};
  }

  &:disabled {
    color: ${colorTokens.neutral350};
    cursor: not-allowed;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
    margin: 0;
  }
`;

export const CounterSlot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'sizeVar',
})<{ sizeVar: ComboboxSizeVariantType }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 100%;
  width: max-content;
  padding-right: ${({ sizeVar }) => (sizeVar === 'S' ? spacingTokens.spacing08 : spacingTokens.spacing12)};
`;

export const StyledTrigger = styled(BaseCombobox.Trigger)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 22px;
  height: 100%;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${colorTokens.neutral400};

  &[data-disabled] {
    cursor: not-allowed;
  }
`;

export const ChevronWrapper = styled.span`
  display: flex;
  width: fit-content;
  height: fit-content;
  transition: transform 0.2s ease;

  [data-popup-open] & {
    transform: rotate(180deg);
  }
`;

export const StyledPositioner = styled(BaseCombobox.Positioner)`
  z-index: inherit;
`;

export const StyledPopup = styled(BaseCombobox.Popup)`
  box-sizing: border-box;
  width: var(--anchor-width);
  padding: ${spacingTokens.spacing04};
  border-radius: ${borderRadiusTokens.borderRadius08};
  background: ${colorTokens.neutral0};
  box-shadow: ${boxShadowTokens.dropShadow};
  overflow: hidden;
`;

export const StyledList = styled(BaseCombobox.List)`
  max-height: 128px;
  overflow-y: auto;
  outline: none;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled(BaseCombobox.Item)`
  display: flex;
  align-items: center;
  min-height: 28px;
  padding: 6px;
  border-radius: ${borderRadiusTokens.borderRadius04};
  cursor: pointer;
  outline: none;
  color: ${colorTokens.neutral700};

  &[data-highlighted] {
    background: ${colorTokens.neutral400_5};
  }

  &[data-selected] {
    background: ${colorTokens.neutral200};

    &[data-highlighted] {
      background: ${colorTokens.neutral200};
    }
  }

  &[data-disabled] {
    cursor: not-allowed;
  }
`;

export const TagSlot = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
`;
