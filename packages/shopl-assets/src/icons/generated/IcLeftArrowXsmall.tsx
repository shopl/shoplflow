import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcLeftArrowXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 12 12" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8.53 1.47a.75.75 0 0 1 0 1.06L5.06 6l3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcLeftArrowXsmall);
