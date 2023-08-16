import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcApprovalMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={14} height={16} x={5} y={4} stroke="#333" strokeWidth={2} rx={2} />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="m9 11.023 2.056 2.133c.106.11.283.11.39 0L15 9.5" />
      <path fill="#333" d="M10 4a2 2 0 1 1 4 0v2.63a.37.37 0 0 1-.37.37h-3.26a.37.37 0 0 1-.37-.37V4Z" />
    </svg>
  );
}
export default createIcon(SvgIcApprovalMedium);
