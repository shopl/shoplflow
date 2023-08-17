import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcDisplayMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={14} height={16} x={5} y={4} stroke="#333" strokeWidth={2} rx={2} />
      <path
        fill="#333"
        d="M5 11h14v2H5zM8 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11H8V8.5ZM8 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V19H8v-2.5ZM11 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h-2V8.5ZM11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V19h-2v-2.5ZM14 8.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11h-2V8.5ZM14 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V19h-2v-2.5Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcDisplayMedium);
