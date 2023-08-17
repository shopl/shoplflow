import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcRefresh(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M15.133 5.243a7 7 0 1 0 1.536 6.89.473.473 0 0 0-.351-.599l-1.115-.27a.224.224 0 0 0-.27.16 5.133 5.133 0 1 1-.973-4.691H11.9a.5.5 0 0 0-.5.5V8.1a.5.5 0 0 0 .5.5h4.6a.5.5 0 0 0 .5-.5V3.5a.5.5 0 0 0-.5-.5h-.867a.5.5 0 0 0-.5.5v1.743Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcRefresh);
