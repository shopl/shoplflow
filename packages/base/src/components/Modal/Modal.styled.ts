import styled from '@emotion/styled';
import type { ModalContainerProps } from './Modal.types';

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

const getModalBodyPadding = (isIncludeHeader: boolean) => {
  if (isIncludeHeader) {
    return '16px 24px 24px 24px';
  }
  return '24px';
};

export const Container = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius08);
  background: var(--neutral0);
  box-shadow: var(--dropShadow);
  overflow: hidden;
  flex-grow: 1;
  height: max-content;
  height: ${({ height }) => height}px;
  max-height: 1200px;
  width: ${({ sizeVar }) => getModalWidthFromSize(sizeVar)}px;
  max-width: ${({ sizeVar }) => getModalWidthFromSize(sizeVar)}px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 12px 24px;
  gap: 10px;
`;

export const BodyContainer = styled.div<{
  isIncludeHeader: boolean;
}>`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${({ isIncludeHeader }) => getModalBodyPadding(isIncludeHeader)};
`;

export const BodyContainerInner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 24px;
  gap: 12px;
`;
