import styled from '@emotion/styled';
import { borderRadiusTokens, colorTokens } from '../../styles';
import { css } from '@emotion/react';
import type { CalloutProps } from './Callout.types';

const informationStyle = css`
  background: ${colorTokens.neutral100};
  & > span {
    color: ${colorTokens.neutral600};
  }
  & > svg > path {
    fill: ${colorTokens.neutral600};
  }
`;
const alertStyle = css`
  background: ${colorTokens.red100};
  & > span {
    color: ${colorTokens.red300};
  }
  & > svg > path {
    fill: ${colorTokens.red300};
  }
`;

export const StyledCallout = styled.div<CalloutProps>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 8px;
  gap: 4px;
  border-radius: ${borderRadiusTokens.borderRadius08};
  ${({ styleVar }) => styleVar === 'INFORMATION' && informationStyle}
  ${({ styleVar }) => styleVar === 'ALERT' && alertStyle}
`;

export const StyledCalloutIcon = styled.svg`
  min-height: 20px;
  min-width: 20px;
`;
