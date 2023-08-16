import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcJpMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke="#333"
        strokeWidth={2}
        d="M19.5 10.621c0 6.165-5.707 9.477-7.156 10.218a.724.724 0 0 1-.662 0C10.229 20.1 4.5 16.792 4.5 10.621 4.5 6.412 7.858 3 12 3c4.142 0 7.5 3.412 7.5 7.621Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m8.5 10.955 2.398 2.489c.124.128.33.129.455 0L15.5 9.18"
      />
    </svg>
  );
}
export default createIcon(SvgIcJpMedium);
