import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInviteBefore(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="m3.526 3.965 6.301 6.002a.25.25 0 0 0 .345 0l6.302-6.002A2.496 2.496 0 0 0 14.5 3h-9c-.802 0-1.516.378-1.974.965ZM17 5.535l-5.793 5.518a1.75 1.75 0 0 1-2.414 0L3 5.535V14.5A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5V5.536Z"
        clipRule="evenodd"
      />
      <path stroke="#fff" strokeLinecap="round" strokeWidth={1.5} d="M8.25 13.5h3.5" />
    </svg>
  );
}
export default createIcon(SvgIcInviteBefore);
