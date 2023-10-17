import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcNormal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Zm0 4a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcNormal);
