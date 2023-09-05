import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcRadio(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path fill='#555' d='M5.833 10a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z' opacity={0.2} />
      <path
        fill='#555'
        fillRule='evenodd'
        d='M10 5.292a4.708 4.708 0 1 0 0 9.416 4.708 4.708 0 0 0 0-9.416ZM6.375 10a3.625 3.625 0 1 1 7.25 0 3.625 3.625 0 0 1-7.25 0Z'
        clipRule='evenodd'
      />
      <path
        fill='#555'
        fillRule='evenodd'
        d='M10 1.125a8.875 8.875 0 1 0 0 17.75 8.875 8.875 0 0 0 0-17.75ZM2.208 10a7.792 7.792 0 1 1 15.583 0 7.792 7.792 0 0 1-15.583 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcRadio);
