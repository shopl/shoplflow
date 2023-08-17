import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcStar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.16 2.555a.913.913 0 0 1 1.68 0L12.6 6.689l4.558.356a.912.912 0 0 1 .514 1.609l-3.456 2.889 1.058 4.329a.912.912 0 0 1-1.354 1L10 14.533 6.079 16.87a.913.913 0 0 1-1.354-1l1.058-4.328-3.456-2.889a.912.912 0 0 1 .514-1.609l4.557-.356 1.763-4.134Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcStar);
