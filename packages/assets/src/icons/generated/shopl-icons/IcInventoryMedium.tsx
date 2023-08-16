import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcInventoryMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={15} height={15} x={4.5} y={4.5} stroke="#333" strokeWidth={2} rx={2} />
      <rect width={6} height={2} x={9} y={11} fill="#333" rx={0.5} />
      <rect width={4} height={4} x={10} y={4} fill="#333" rx={0.5} />
    </svg>
  );
}
export default createIcon(SvgIcInventoryMedium);
