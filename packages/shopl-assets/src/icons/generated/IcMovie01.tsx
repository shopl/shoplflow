import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcMovie01(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-1.25-4.969 4.5-2.598a.5.5 0 0 0 0-.866l-4.5-2.598a.5.5 0 0 0-.75.433v5.196a.5.5 0 0 0 .75.433Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcMovie01);
