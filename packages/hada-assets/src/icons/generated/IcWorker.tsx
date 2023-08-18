import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcWorker(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 28 28" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M14 4a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm4.207 9c2.604 0 4.81 1.92 5.168 4.5l.309 2.225A2 2 0 0 1 21.703 24H6.297a2 2 0 0 1-1.981-2.275l.309-2.225A5.218 5.218 0 0 1 9.793 15h8.414Zm.184 2.005L18.207 17H9.793a3.218 3.218 0 0 0-3.157 2.593l-.03.182L6.296 22h15.407l-.31-2.225a3.218 3.218 0 0 0-3.002-2.77Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcWorker);
