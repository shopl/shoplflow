import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcError(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#555'
        fillRule='evenodd'
        d='M10 4a1.41 1.41 0 0 0-1.406 1.497l.344 5.505a1.064 1.064 0 0 0 2.124 0l.345-5.505A1.41 1.41 0 0 0 10 4Zm0 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcError);
