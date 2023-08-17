import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcDelete(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <circle cx={10} cy={10} r={8} fill="#333" />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M6.142 7.341a.2.2 0 0 1 0-.282l.917-.918a.2.2 0 0 1 .283 0l2.664 2.665L12.67 6.14a.2.2 0 0 1 .283 0l.917.918a.2.2 0 0 1 0 .282l-2.664 2.665 2.653 2.652a.2.2 0 0 1 0 .283l-.917.917a.2.2 0 0 1-.283 0l-2.653-2.652-2.653 2.652a.2.2 0 0 1-.283 0l-.917-.917a.2.2 0 0 1 0-.283l2.653-2.652L6.142 7.34Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDelete);
