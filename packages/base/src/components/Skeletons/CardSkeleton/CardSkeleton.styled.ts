import styled from '@emotion/styled';
import { colorTokens } from '../../../styles';

export const Wrapper = styled.div`
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  background-color: ${colorTokens.neutral0};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  padding: 12px 20px;
  align-items: center;
  gap: 8px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px 24px 24px;
`;
