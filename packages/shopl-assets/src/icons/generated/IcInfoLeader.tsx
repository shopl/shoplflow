import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoLeader(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="m12.161 7.1-1.502-3.196a.729.729 0 0 0-1.319 0L7.837 7.1 4.4 7.629a.729.729 0 0 0-.412 1.23l2.508 2.57-.584 3.591a.729.729 0 0 0 1.072.755L10 14.11l3.016 1.666a.729.729 0 0 0 1.072-.755l-.584-3.59 2.508-2.572A.729.729 0 0 0 15.6 7.63l-3.439-.528Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoLeader);
