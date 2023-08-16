import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgBadgeAdminLarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 30 30" {...props}>
      <circle cx={15} cy={15} r={14} fill="#FFA800" stroke="#fff" strokeWidth={2} />
      <path
        fill="#fff"
        d="M15.934 9.1c-.326-.8-1.544-.8-1.87 0L11 15.744l-3.085-4.736c-.276-.38-.915-.199-.915.26l.846 8.653c.087.893.9 1.578 1.875 1.578h10.63c.98 0 1.796-.692 1.877-1.591l.772-8.64c0-.459-.639-.64-.915-.26L19 15.746l-3.066-6.647Z"
      />
    </svg>
  );
}
export default createIcon(SvgBadgeAdminLarge);
