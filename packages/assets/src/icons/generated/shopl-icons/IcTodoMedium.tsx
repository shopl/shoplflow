import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcTodoMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path stroke="#333" strokeWidth={2} d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z" />
      <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="m7 8.184 1.702 1.648a.25.25 0 0 0 .347.001L12 7" />
      <rect width={2} height={2} x={4} y={16} fill="#333" rx={0.5} />
      <rect width={13} height={2} x={7} y={16} fill="#333" rx={0.5} />
      <rect width={13} height={2} x={7} y={19} fill="#333" rx={0.5} />
      <rect width={2} height={2} x={4} y={19} fill="#333" rx={0.5} />
    </svg>
  );
}
export default createIcon(SvgIcTodoMedium);
