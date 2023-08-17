import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcPhone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        stroke="#333"
        strokeWidth={1.5}
        d="M4.75 4A2.25 2.25 0 0 1 7 1.75h6A2.25 2.25 0 0 1 15.25 4v12A2.25 2.25 0 0 1 13 18.25H7A2.25 2.25 0 0 1 4.75 16V4Z"
      />
      <path stroke="#333" strokeLinecap="round" strokeWidth={1.5} d="M9 16h2" />
    </svg>
  );
}
export default createIcon(SvgIcPhone);
