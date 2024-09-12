import type { ComponentPropsWithRef, MouseEvent } from 'react';
import { useState, forwardRef } from 'react';
import { StyledIconButton } from './IconButton.styled';
import type { IconButtonProps } from './IconButton.types';
import LoadingSpinner from '../../../assets/LoadingSpinner';

const IconButton = forwardRef(
  (
    {
      styleVar,
      sizeVar,
      disabled,
      children,
      color,
      onMouseEnter,
      onMouseLeave,
      isLoading = false,
      type = 'button',
      ...rest
    }: IconButtonProps<'button'>,
    ref: ComponentPropsWithRef<'button'>['ref'],
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleOnMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
      setIsHovered(true);
      onMouseEnter && onMouseEnter(e);
    };
    const handleOnMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
      setIsHovered(false);
      onMouseLeave && onMouseLeave(e);
    };
    return (
      <StyledIconButton
        styleVar={styleVar}
        sizeVar={sizeVar}
        disabled={disabled}
        color={color}
        ref={ref}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        isHovered={isHovered}
        type={type}
        {...rest}
        data-shoplflow={'IconButton'}
      >
        {isLoading ? (
          <LoadingSpinner color={styleVar === 'SECONDARY' || styleVar === 'GHOST' ? 'neutral500' : 'neutral0'} />
        ) : (
          children
        )}
      </StyledIconButton>
    );
  },
);

export default IconButton;
