import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcNoticeLine(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <circle cx={10} cy={10} r={8} stroke="#333" strokeWidth={1.5} />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-.5 6h-1v-1H9v-3h-.5V9h2a.5.5 0 0 1 .5.5V13h.5v1h-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcNoticeLine);
