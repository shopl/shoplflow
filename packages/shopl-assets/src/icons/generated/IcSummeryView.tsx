import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcSummeryView(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M3.5 3a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-13Zm0 8a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-13Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSummeryView);
