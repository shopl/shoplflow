import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradeBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M13.675 3.32a.2.2 0 0 0-.35 0L12.29 5.212a.2.2 0 0 1-.08.08l-1.89 1.034a.2.2 0 0 0 0 .35l1.89 1.034a.2.2 0 0 1 .08.08l1.034 1.89a.2.2 0 0 0 .35 0l1.034-1.89a.2.2 0 0 1 .08-.08l1.89-1.034a.2.2 0 0 0 0-.35L14.79 5.29a.2.2 0 0 1-.08-.08l-1.034-1.89Zm-5.5 4a.2.2 0 0 0-.35 0L6.26 10.18a.2.2 0 0 1-.08.08l-2.86 1.565a.2.2 0 0 0 0 .35l2.86 1.565a.2.2 0 0 1 .08.08l1.565 2.86a.2.2 0 0 0 .35 0l1.565-2.86a.2.2 0 0 1 .08-.08l2.86-1.565a.2.2 0 0 0 0-.35L9.82 10.26a.2.2 0 0 1-.08-.08L8.175 7.32Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcGradeBadge);
