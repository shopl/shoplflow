import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPaymentMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={16} height={12} x={4} y={8} stroke="#333" strokeWidth={2} rx={2} />
      <path stroke="#333" strokeWidth={2} d="M6 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2H6V6Z" />
      <path fill="#333" d="M8.5 5H10v3H8.5z" />
      <rect width={3} height={3} x={14} y={12} fill="#333" rx={0.5} />
    </svg>
  );
}
export default createIcon(SvgIcPaymentMedium);
