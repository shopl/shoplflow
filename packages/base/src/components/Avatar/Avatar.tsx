import React from 'react';
import { StyledAvatar, StyledAvatarBadge, StyledAvatarContainer, StyledAvatarImage } from './Avatar.styled';
import type { AvatarProps } from './Avatar.types';
import AvatarImageNone from '../../assets/mocks/AvatarNone.png';

const Avatar = ({ src, badge, fallbackUrl, ...rest }: AvatarProps): JSX.Element => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar data-shoplflow={'Avatar'} {...rest}>
        {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
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
