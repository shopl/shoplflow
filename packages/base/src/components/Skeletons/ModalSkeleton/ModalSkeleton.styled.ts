import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  padding-inline: 20px;
`;

export const SkeletonWrapper = styled.div<{ isList?: boolean }>`
  display: flex;
  align-items: center;
  padding-block: ${({ isList }) => (isList ? '17px' : '20px')};
`;
