import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPlusMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 24 24' {...props}>
      <circle cx={12} cy={12} r={10} fill='#333' />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M13 7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V11H7.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5H11v3.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V13h3.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H13V7.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcPlusMedium);
