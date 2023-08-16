import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M3.345 3.344a8.005 8.005 0 0 1 11.952 10.61l3.425 3.425a.95.95 0 0 1-1.342 1.343l-3.425-3.425A8.006 8.006 0 0 1 3.345 3.344Zm9.91 1.415a6.009 6.009 0 1 0-8.497 8.498 6.009 6.009 0 0 0 8.497-8.498Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSearch);
