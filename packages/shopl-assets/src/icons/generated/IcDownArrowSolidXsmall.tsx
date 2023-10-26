import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcDownArrowSolidXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 12 12' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M6.416 8.376a.5.5 0 0 1-.832 0L2.518 3.777A.5.5 0 0 1 2.934 3h6.132a.5.5 0 0 1 .416.777L6.416 8.376Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcDownArrowSolidXsmall);
