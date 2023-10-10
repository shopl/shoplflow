import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcEditXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 14 14' {...props}>
      <path
        fill='#333'
        fillRule='evenodd'
        d='m11.842 1.383.763.766c.255.255.395.595.395.957 0 .361-.14.701-.395.957L11.671 5 9 2.32l.934-.937c.51-.51 1.398-.511 1.908 0ZM1.81 9.613 8.423 3 11 5.577 4.386 12.19a.26.26 0 0 1-.12.07l-2.943.732a.26.26 0 0 1-.315-.315l.733-2.943a.264.264 0 0 1 .068-.12Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcEditXsmall);
