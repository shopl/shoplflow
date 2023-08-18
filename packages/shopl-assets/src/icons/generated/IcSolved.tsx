import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSolved(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.884 6.116a1.25 1.25 0 0 1 0 1.768l-6.25 6.25a1.25 1.25 0 0 1-1.768 0l-3.75-3.75a1.25 1.25 0 0 1 1.768-1.768l2.866 2.866 5.366-5.366a1.25 1.25 0 0 1 1.768 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSolved);
