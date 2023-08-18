import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 2.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5Zm7.746 12.03A5.75 5.75 0 0 0 12 10.25H8l-.22.004A5.75 5.75 0 0 0 2.25 16v1l.007.102A.75.75 0 0 0 3.75 17v-1l.005-.206A4.25 4.25 0 0 1 8 11.75h4l.206.005A4.25 4.25 0 0 1 16.25 16v1l.007.102A.75.75 0 0 0 17.75 17v-1l-.004-.22Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcUser);
