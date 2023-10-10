import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInfoDaysoff(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path fill='#333' fillRule='evenodd' d='M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm3-8H7v2h6V9Z' clipRule='evenodd' />
    </svg>
  );
}
export default createIcon(SvgIcInfoDaysoff);
