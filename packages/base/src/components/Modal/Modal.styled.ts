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
const MODAL_SIZE_XXXL = 1600;

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
    case 'XXXL':
      return MODAL_SIZE_XXXL;
    default:
      return MODAL_SIZE_M;
  }
};

const getModalBodyTopBottomPadding = (isIncludeHeader: boolean, sizeVar: ModalContainerProps['sizeVar']) => {
  if (sizeVar === 'FULL') {
    return css`
      padding-top: 0;
      padding-bottom: 0;
    `;
  }
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

const getFullScreenModal = () => {
  return css`
    min-height: 100vh;
    max-height: 100vh;
    width: 100vw;
    max-width: 100vw;
    border-radius: 0;
    box-shadow: none;
  `;
};

const checkMaxHeight = (height: number, viewport: number) => {
  const topBottomMargin = 64;
  if (height > 1200) {
    return 1200 - topBottomMargin;
  }
  if (height > viewport) {
    return viewport - topBottomMargin;
  }
  return height - topBottomMargin;
};

export const Container = styled.div<
  ModalContainerProps & {
    viewport: number;
  }
>`
  display: flex;
  flex-direction: column;
  border-radius: ${borderRadiusTokens.borderRadius08};
  background: ${colorTokens.neutral0};
  box-shadow: ${boxShadowTokens.dropShadow};
  overflow: hidden;
  flex-grow: 1;
  height: ${({ height, viewport }) => (height ? `${checkMaxHeight(height, viewport)}px` : 'initial')};
  min-height: 180px;
  max-height: 1200px;

  width: ${({ sizeVar }) => getModalWidthFromSize(sizeVar)}px;
  max-width: ${({ sizeVar }) => getModalWidthFromSize(sizeVar)}px;
  ${({ sizeVar }) =>
    sizeVar &&
    window.innerWidth <= getModalWidthFromSize(sizeVar) + 40 &&
    css`
      width: ${window.innerWidth - 40}px;
      max-width: ${window.innerWidth - 40}px;
    `};
  ${({ sizeVar }) => sizeVar === 'FULL' && getFullScreenModal()};
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
  minHeight: string | number;
  maxHeight: string | number;
  sizeVar: ModalContainerProps['sizeVar'];
}>`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-direction: column;
  background: ${colorTokens.neutral0};
  box-sizing: border-box;
  min-height: ${({ minHeight }) => minHeight}px;
  max-height: ${({ maxHeight }) => maxHeight}px;
  flex: 1;
  ${({ isIncludeHeader, sizeVar }) => getModalBodyTopBottomPadding(isIncludeHeader, sizeVar)};
`;

export const ModalBodyContainerInner = styled.div`
  display: grid;
  align-self: stretch;
  flex-direction: column;
  flex-grow: 1;
  //스크롤 생성시 하단 padding 적용하기 위한 설정
  height: 100%;
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
  ${({ sizeVar }) =>
    sizeVar === 'FULL' &&
    css`
      padding: 0;
    `};
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

export const BottomContainer = styled.footer`
  width: 100%;
`;
