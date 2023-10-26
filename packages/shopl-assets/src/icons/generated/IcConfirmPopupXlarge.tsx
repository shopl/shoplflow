import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcConfirmPopupXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 36 36' {...props}>
      <circle cx={18} cy={18} r={15} fill='#EAF5FF' />
      <path
        fill='#3299FE'
        fillRule='evenodd'
        d='M26.033 12.913c.6.57.625 1.52.054 2.12l-8.552 9a1.5 1.5 0 0 1-2.188-.014l-4.447-4.8a1.5 1.5 0 0 1 2.2-2.039l3.361 3.628 7.452-7.841a1.5 1.5 0 0 1 2.12-.054Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcConfirmPopupXlarge);
