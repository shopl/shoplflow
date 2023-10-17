import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoBreaktime(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M3.5 5.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v.05a2.5 2.5 0 1 1-.108 4.876A4.002 4.002 0 0 1 10.5 13.5h-3a4 4 0 0 1-4-4v-4Zm11 1.634v1.732a1 1 0 1 0 0-1.732ZM5 14.5a.5.5 0 0 0-.5.5v.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V15a.5.5 0 0 0-.5-.5H5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoBreaktime);
