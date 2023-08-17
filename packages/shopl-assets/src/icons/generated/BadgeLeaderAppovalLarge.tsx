import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgBadgeLeaderAppovalLarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 30 30" {...props}>
      <circle cx={15} cy={15} r={14} fill="#35485B" stroke="#FFD000" strokeWidth={2} />
      <path
        fill="#FFD000"
        d="M14.249 7.488a.822.822 0 0 1 1.502 0l1.823 3.864a.841.841 0 0 0 .631.48l4.077.619c.687.104.961.987.464 1.494l-2.95 3.007a.901.901 0 0 0-.24.775l.696 4.247c.117.716-.601 1.261-1.216.923l-3.646-2.005a.805.805 0 0 0-.78 0l-3.646 2.005c-.615.338-1.333-.207-1.216-.923l.697-4.247a.901.901 0 0 0-.241-.775l-2.95-3.007c-.497-.507-.223-1.39.464-1.494l4.077-.62a.841.841 0 0 0 .63-.48l1.824-3.863Z"
      />
    </svg>
  );
}
export default createIcon(SvgBadgeLeaderAppovalLarge);
