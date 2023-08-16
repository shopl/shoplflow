import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAnnualMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={14} height={16} x={5} y={4} stroke="#333" strokeWidth={2} rx={2} />
      <rect width={2} height={4} x={8} y={2} fill="#333" rx={1} />
      <rect width={8} height={2} x={8} y={8} fill="#333" rx={0.5} />
      <rect width={5} height={2} x={8} y={11} fill="#333" rx={0.5} />
      <rect width={2} height={2} fill="#333" rx={0.5} transform="matrix(-1 0 0 1 16 15)" />
      <rect width={2} height={4} x={14} y={2} fill="#333" rx={1} />
    </svg>
  );
}
export default createIcon(SvgIcAnnualMedium);
