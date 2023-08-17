import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcBookmarkFilledMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        stroke="#333"
        strokeWidth={2}
        d="M5 4.5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13.904a1 1 0 0 1-1.63.777l-4.74-3.838a1 1 0 0 0-1.26 0L6.63 19.18A1 1 0 0 1 5 18.404V4.5Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcBookmarkFilledMedium);
