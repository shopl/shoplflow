import styled from '@emotion/styled';
import type { AvatarOptionProps } from './Avatar.types';

const getSizeBySizeVariant = (size: AvatarOptionProps['sizeVar']) => {
  switch (size) {
    case 'XS':
      return '18px';
    case 'S':
      return '24px';
    case 'M':
      return '32px';
    case 'L':
      return '48px';
    case 'XL':
      return '72px';
    default:
      return '32px';
  }
};

export const StyledAvatar = styled.picture<AvatarOptionProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ sizeVar }) => getSizeBySizeVariant(sizeVar)};
  height: ${({ sizeVar }) => getSizeBySizeVariant(sizeVar)};
  position: relative;
  overflow: hidden;
  border-radius: 50%;
`;

export const StyledAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  position: relative;
`;

export const StyledAvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledAvatarBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  bottom: 0;
  right: 0;
`;
