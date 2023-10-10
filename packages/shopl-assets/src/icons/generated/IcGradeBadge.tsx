import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradeBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M13.659 3.304a.2.2 0 0 0-.351 0l-1.034 1.89a.2.2 0 0 1-.08.08l-1.89 1.034a.2.2 0 0 0 0 .35l1.89 1.034a.2.2 0 0 1 .08.08l1.034 1.89a.2.2 0 0 0 .35 0l1.035-1.89a.2.2 0 0 1 .08-.08l1.89-1.033a.2.2 0 0 0 0-.351l-1.89-1.034a.2.2 0 0 1-.08-.08l-1.034-1.89Zm-5.5 4a.2.2 0 0 0-.351 0l-1.564 2.86a.2.2 0 0 1-.08.08l-2.86 1.564a.2.2 0 0 0 0 .35l2.86 1.565a.2.2 0 0 1 .08.08l1.564 2.86a.2.2 0 0 0 .35 0l1.565-2.86a.2.2 0 0 1 .08-.08l2.86-1.564a.2.2 0 0 0 0-.351l-2.86-1.565a.2.2 0 0 1-.08-.079L8.16 7.304Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcGradeBadge);
