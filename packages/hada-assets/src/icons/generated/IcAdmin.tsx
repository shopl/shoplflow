import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAdmin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <rect width={18} height={18} x={1} y={1} fill='#FB0' opacity={0.2} rx={6} />
      <path
        fill='#FFB600'
        fillRule='evenodd'
        d='M10.468 6.248a.5.5 0 0 0-.936 0L7.72 11.08 5.916 8.374A.5.5 0 0 0 5 8.65V13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8.65a.5.5 0 0 0-.916-.277L12.28 11.08l-1.812-4.832Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcAdmin);
