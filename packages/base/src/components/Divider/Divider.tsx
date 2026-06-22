import { forwardRef } from 'react';

import type { DividerProps } from './Divider.types';

import { StyledDivider } from './Divider.styled';
import { colorTokens } from '../../styles';

/**
 * 콘텐츠를 시각적으로 구분하는 구분선(Divider) 컴포넌트입니다.
 *
 * @param {DividerProps} props
 * @return {JSX.Element}
 */
export const Divider = forwardRef<HTMLDivElement, DividerProps>(function Divider(
  {
    as = 'div',
    direction = 'row',
    color = colorTokens.neutral200,
    length = '100%',
    thickness = '1px',
    isFull = false,
    ...rest
  },
  ref,
) {
  return (
    <StyledDivider
      as={as}
      ref={ref}
      direction={direction}
      color={color}
      length={length}
      thickness={thickness}
      isFull={isFull}
      {...rest}
      data-shoplflow={'Divider'}
    />
  );
});

export default Divider;
