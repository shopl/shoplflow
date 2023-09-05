import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#555'
        fillRule='evenodd'
        d='M10 3a1 1 0 0 1 .993.883L11 4v5h5a1 1 0 0 1 .117 1.993L16 11h-5v5a1 1 0 0 1-1.993.117L9 16v-5H4a1 1 0 0 1-.117-1.993L4 9h5V4a1 1 0 0 1 1-1Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcAdd);
