import React from 'react';
import { StyledAvatar, StyledAvatarBadge, StyledAvatarContainer, StyledAvatarImage } from './Avatar.styled';
import type { AvatarProps } from './Avatar.types';
import AvatarImageNone from '../../assets/mocks/AvatarNone.png';

const Avatar = ({ src, badge, ...rest }: AvatarProps) => {
  return (
    <StyledAvatarContainer>
      <StyledAvatar data-shoplflow={'Avatar'} {...rest}>
        {/*eslint-disable-next-line @typescript-eslint/no-unsafe-assignment*/}
        <StyledAvatarImage src={(src ?? AvatarImageNone) as string} />
      </StyledAvatar>
      <StyledAvatarBadge>{badge}</StyledAvatarBadge>
    </StyledAvatarContainer>
  );
};

export default Avatar;
