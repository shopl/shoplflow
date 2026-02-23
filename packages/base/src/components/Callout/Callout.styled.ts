import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens } from '../../styles';
import { css } from '@emotion/react';
import type { CalloutProps } from './Callout.types';

const informationStyle = css`
  background: ${colorTokens.neutral400_5};
  & > svg > circle {
    fill: ${colorTokens.neutral200};
  }
  & > svg > path {
    fill: ${colorTokens.neutral400};
  }
`;
const cautionStyle = css`
  background: ${colorTokens.yellow100};
  & > svg > path {
    fill: ${colorTokens.yellow300};
  }
  & > svg > circle {
    fill: ${colorTokens.yellow300};
  }
  & > svg > path {
    fill: ${colorTokens.yellow300};
  }
`;
const alertStyle = css`
  background: ${colorTokens.red100};
  & > svg > path {
    fill: ${colorTokens.red300};
  }
`;

export const StyledCallout = styled.div<CalloutProps>`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  padding: 12px;
  gap: 6px;
  border-radius: ${borderRadiusTokens.borderRadius08};
  ${({ styleVar }) => styleVar === 'INFORMATION' && informationStyle}
  ${({ styleVar }) => styleVar === 'CAUTION' && cautionStyle}
  ${({ styleVar }) => styleVar === 'ALERT' && alertStyle}
  ${({ fillWidth }) =>
    fillWidth &&
    css`
      width: 100%;
    `}
`;

export const StyledCalloutIcon = styled.svg`
  display: flex;
  height: 20px;
  min-height: 20px;
  width: 20px;
  min-width: 20px;
  flex-shrink: 0;
`;
export const TextWrapper = styled.div`
  padding: 2px 0;
`;
