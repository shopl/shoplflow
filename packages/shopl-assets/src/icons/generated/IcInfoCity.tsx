import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoCity(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10h1V9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6h.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H4V5Zm3.5 3V6h-2v2h2Zm0 1v2h-2V9h2Zm6.5 3h-2v-2h2v2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoCity);
