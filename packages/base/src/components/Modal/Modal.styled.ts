import styled from '@emotion/styled';
import type { ModalContainerProps } from './Modal.types';
import { css } from '@emotion/react';
import { borderRadiusTokens, colorTokens } from '../../styles';
import { boxShadowTokens } from '../../styles/tokens';

const MODAL_SIZE_XXS = 400;
const MODAL_SIZE_XS = 500;
const MODAL_SIZE_S = 560;
const MODAL_SIZE_M = 640;
const MODAL_SIZE_L = 768;
const MODAL_SIZE_XL = 1040;
const MODAL_SIZE_XXL = 1280;

const getModalWidthFromSize = (size: ModalContainerProps['sizeVar']) => {
  switch (size) {
    case 'XXS':
      return MODAL_SIZE_XXS;
    case 'XS':
      return MODAL_SIZE_XS;
    case 'S':
      return MODAL_SIZE_S;
    case 'M':
      return MODAL_SIZE_M;
    case 'L':
      return MODAL_SIZE_L;
    case 'XL':
      return MODAL_SIZE_XL;
    case 'XXL':
      return MODAL_SIZE_XXL;
    default:
      return MODAL_SIZE_M;
  }
};

const getModalBodyTopBottomPadding = (isIncludeHeader: boolean) => {
  if (isIncludeHeader) {
    return css`
      padding-top: 16px;
      padding-bottom: 24px;
    `;
  }
  return css`
    padding-top: 24px;
    padding-bottom: 24px;
  `;
};

export const Container = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadiusTokens.borderRadius08};
  background: ${colorTokens.neutral0};
  box-shadow: ${boxShadowTokens.dropShadow};
  overflow: hidden;
  flex-grow: 1;
  height: ${({ height }) => (height ? `${height}px` : 'initial')};
  min-height: 180px;
  max-height: 1200px;
  width: ${({ sizeVar }) => getModalWidthFromSize(sizeVar)}px;
  max-width: ${({ sizeVar }) => getModalWidthFromSize(sizeVar)}px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 12px 24px;
  gap: 10px;
`;

export const BodyContainer = styled.div<{
  isIncludeHeader: boolean;
  height: string | number;
}>`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  background: ${colorTokens.neutral0};
  min-height: 112px;
  min-height: ${({ height }) => height};
  flex: 1;
  ${({ isIncludeHeader }) => getModalBodyTopBottomPadding(isIncludeHeader)}
`;

export const ModalBodyContainerInner = styled.div`
  display: grid;
  align-self: stretch;
  flex-direction: column;
  flex-grow: 1;
  //스크롤 생성시 하단 padding 적용하기 위한 설정
  height: calc(100%);
  box-sizing: border-box;
`;

export const ModalBodyContent = styled.div<{
  isIncludeHeader: boolean;
  sizeVar: ModalContainerProps['sizeVar'];
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  background: ${colorTokens.neutral0};
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
  gap: 12px;
  border-top: 1px solid ${colorTokens.neutral300};
  background: ${colorTokens.neutral0};
`;
