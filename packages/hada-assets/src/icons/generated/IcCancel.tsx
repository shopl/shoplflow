import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCancel(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <circle cx={10} cy={10} r={8} fill="#CCC" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.141 7.342a.2.2 0 0 1 0-.283l.918-.917a.2.2 0 0 1 .282 0l2.665 2.664 2.664-2.664a.2.2 0 0 1 .283 0l.917.917a.2.2 0 0 1 0 .283l-2.664 2.664 2.652 2.653a.2.2 0 0 1 0 .283l-.917.917a.2.2 0 0 1-.283 0l-2.652-2.653-2.653 2.653a.2.2 0 0 1-.283 0l-.917-.917a.2.2 0 0 1 0-.283l2.653-2.653L6.14 7.342Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcCancel);
