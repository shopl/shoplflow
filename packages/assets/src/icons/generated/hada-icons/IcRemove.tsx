import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcRemove(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <circle cx={10} cy={10} r={8} fill="#FF7979" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcRemove);
