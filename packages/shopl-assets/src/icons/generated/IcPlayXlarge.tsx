import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPlayXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
      <circle cx={18} cy={18} r={15} fill="#333" />
      <path
        fill="#fff"
        d="M24.5 17.134a1 1 0 0 1 0 1.732l-9 5.196a1 1 0 0 1-1.5-.866V12.804a1 1 0 0 1 1.5-.866l9 5.196Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcPlayXlarge);
