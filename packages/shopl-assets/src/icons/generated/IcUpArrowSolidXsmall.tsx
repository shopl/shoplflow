import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcUpArrowSolidXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 12 12" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6.416 3.624a.5.5 0 0 0-.832 0L2.518 8.223A.5.5 0 0 0 2.934 9h6.132a.5.5 0 0 0 .416-.777L6.416 3.624Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcUpArrowSolidXsmall);
