import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcFullScreenMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <rect width={18} height={14} x={3} y={5} stroke='#333' strokeWidth={2} rx={1} />
      <path fill='#333' d='M4 14h7a1 1 0 0 1 1 1v3H4v-4Z' />
      <path
        fill='#333'
        fillRule='evenodd'
        d='M14.707 7.5H18a.5.5 0 0 1 .5.5v3.293a.5.5 0 0 1-.854.353l-.957-.957-2.561 2.56a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l2.56-2.56-.92-.921a.5.5 0 0 1 .353-.854Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcFullScreenMedium);
