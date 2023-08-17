import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoRadius(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.75 4a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5Zm0 1.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4 9.75A5.75 5.75 0 0 1 15.451 9h.299a.75.75 0 0 1 .102 1.493l-.102.007h-3.095a3.001 3.001 0 0 1-5.905-.75A3 3 0 0 1 12.655 9h1.279a4.251 4.251 0 1 0-4.184 5 .75.75 0 0 1 0 1.5A5.75 5.75 0 0 1 4 9.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoRadius);
