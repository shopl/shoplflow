import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcTag(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M16.999 4.208 17 9.323c0 .32-.127.627-.353.854l-6.47 6.47a1.206 1.206 0 0 1-1.706 0l-5.118-5.118a1.206 1.206 0 0 1 0-1.706l6.47-6.47c.227-.226.534-.353.854-.353l5.115.001c.666.001 1.206.54 1.207 1.207Zm-2.674 1.467a1.167 1.167 0 1 0-1.65 1.65 1.167 1.167 0 0 0 1.65-1.65Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcTag);
