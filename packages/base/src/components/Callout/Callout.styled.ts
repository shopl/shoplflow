import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens } from '../../styles';
import { css } from '@emotion/react';
import type { CalloutProps } from './Callout.types';

const informationStyle = css`
  background: ${colorTokens.neutral400_5};
  & > span {
    color: ${colorTokens.neutral600};
  }
  & > svg > circle {
    fill: ${colorTokens.neutral200};
  }
  & > svg > path {
    fill: ${colorTokens.neutral400};
  }
`;
const alertStyle = css`
  background: ${colorTokens.red100};
  & > span {
    align-self: center;
    color: ${colorTokens.red300};
  }
  & > svg > path {
    fill: ${colorTokens.red300};
  }
`;

export const StyledCallout = styled.div<CalloutProps>`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  padding: 6px 8px;
  gap: 4px;
  border-radius: ${borderRadiusTokens.borderRadius08};
  ${({ styleVar }) => styleVar === 'INFORMATION' && informationStyle}
  ${({ styleVar }) => styleVar === 'ALERT' && alertStyle}
`;

export const StyledCalloutIcon = styled.svg`
  display: flex;
  height: 20px;
  min-height: 20px;
  width: 20px;
  min-width: 20px;
`;
export const TextWrapper = styled.div`
  padding: 2px 0;
`;
