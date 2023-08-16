import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 3C6.692 3 4 5.617 4 8.833c0 1.566.63 3.037 1.773 4.139l4.014 3.941a.303.303 0 0 0 .426 0l4.012-3.94A5.715 5.715 0 0 0 16 8.834C16 5.617 13.308 3 10 3Zm0 8a2.503 2.503 0 0 1-2.5-2.5C7.5 7.122 8.621 6 10 6s2.5 1.122 2.5 2.5S11.379 11 10 11Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcPin);
