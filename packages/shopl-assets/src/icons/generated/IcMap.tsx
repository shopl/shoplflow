import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcMap(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M7 5.5 3 4v10.5L7 16V5.5Zm1 0L12 4v10.5L8 16V5.5ZM13 4l4 1.5V16l-4-1.5V4Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcMap);
