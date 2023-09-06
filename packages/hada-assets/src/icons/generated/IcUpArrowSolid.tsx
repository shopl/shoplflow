import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcUpArrowSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 16 16' {...props}>
      <path
        fill='#999'
        fillRule='evenodd'
        d='M10.96 10.5a.5.5 0 0 0 .39-.812l-2.96-3.7a.5.5 0 0 0-.78 0l-2.96 3.7a.5.5 0 0 0 .39.812h5.92Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcUpArrowSolid);
