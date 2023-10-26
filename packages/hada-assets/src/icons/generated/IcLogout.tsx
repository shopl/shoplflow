import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcLogout(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='M8 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-1h-2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1h2V6a4 4 0 0 0-4-4H8Z'
        clipRule='evenodd'
      />
      <path
        fill='#333'
        d='M20.968 12.733a.97.97 0 0 0 0-1.466L18.8 9.39a.97.97 0 0 0-1.604.733v3.756a.97.97 0 0 0 1.604.733l2.168-1.878Z'
      />
      <rect width={6} height={2} x={12} y={11} fill='#333' rx={0.5} />
    </svg>
  );
}
export default createIcon(SvgIcLogout);
