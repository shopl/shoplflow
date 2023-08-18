import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcExclamationXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
      <path
        fill="#F66"
        fillRule="evenodd"
        d="M18 33c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C9.716 3 3 9.716 3 18c0 8.284 6.716 15 15 15Zm-1.286-20.371c0-.11.09-.2.2-.2h2.172c.11 0 .2.09.2.2v7.314a.2.2 0 0 1-.2.2h-2.172a.2.2 0 0 1-.2-.2V12.63Zm2.572 10.513a1.286 1.286 0 1 1-2.572 0 1.286 1.286 0 0 1 2.572 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcExclamationXlarge);
