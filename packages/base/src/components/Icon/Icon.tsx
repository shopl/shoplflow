import React, { forwardRef } from 'react';
import { StyledIcon } from './Icon.styled';
import type { DangerouslySetInnerHTML, IconProps } from './Icon.types';

const Icon = forwardRef<SVGSVGElement, IconProps>(({ iconSource, dangerouslySetInnerHTML, ...rest }, ref) => {
  const htmlContent = (
    dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined
  ) as DangerouslySetInnerHTML;
  if (htmlContent && iconSource) {
    throw new Error('Icon: iconSource와 dangerouslySetInnerHTML은 동시에 사용할 수 없습니다.');
  }
  return (
    <StyledIcon as={iconSource} ref={ref} {...rest} data-shoplflow={'Icon'} dangerouslySetInnerHTML={htmlContent} />
  );
});

export default Icon;
