import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcDrawer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M3.5 4.5A.5.5 0 0 1 4 4h7.667a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1Zm0 5A.5.5 0 0 1 4 9h12a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-1ZM4 14a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10.917a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDrawer);
