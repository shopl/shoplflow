import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcReturn(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M8 3.5 4 7l4 3.5v-2h1.682c1.604.06 2.857 1.522 2.857 3.794 0 2.323-2.77 4.206-2.77 4.206C12.66 16.5 15 14.038 15 11s-2.342-5.5-5.23-5.5H8v-2Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcReturn);
