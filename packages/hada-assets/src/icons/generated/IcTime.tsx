import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcTime(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#8092AA"
        fillRule="evenodd"
        d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm.743 3.398A.75.75 0 0 0 9.25 7v3.6l.007.104a.75.75 0 0 0 .167.376l2 2.4.077.08a.75.75 0 0 0 .98.016l.08-.077a.75.75 0 0 0 .015-.98l-1.826-2.191V7l-.007-.102Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcTime);
