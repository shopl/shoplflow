import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcDeadline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={18} height={18} x={3} y={3} fill="#E3E8EB" rx={6} />
      <rect width={10} height={2} x={7} y={11} fill="#406588" rx={1} />
    </svg>
  );
}
export default createIcon(SvgIcDeadline);
