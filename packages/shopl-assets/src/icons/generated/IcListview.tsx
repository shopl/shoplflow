import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcListview(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-2ZM3 9a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-13A.5.5 0 0 1 3 11V9Zm.5 5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcListview);
