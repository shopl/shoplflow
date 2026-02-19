import React from 'react';
import { StyledAvatar, StyledAvatarBadge, StyledAvatarContainer, StyledAvatarImage } from './Avatar.styled';
import type { AvatarProps } from './Avatar.types';
import AvatarImageNone from '../../assets/mocks/AvatarNone.png';

// TEST, version 올라가는지 확인 중2

const Avatar = ({ src, badge, fallbackUrl, ...rest }: AvatarProps): JSX.Element => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar data-shoplflow={'Avatar'} {...rest}>
        <StyledAvatarImage
          src={src ?? fallbackUrl}
          onError={(e) => {
            e.currentTarget.src = fallbackUrl ?? AvatarImageNone;
          }}
        />
      </StyledAvatar>
      <StyledAvatarBadge>{badge}</StyledAvatarBadge>
    </StyledAvatarContainer>
  );
};

export default Avatar;
