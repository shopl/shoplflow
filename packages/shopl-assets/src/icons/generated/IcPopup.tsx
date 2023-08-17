import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcPopup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="#DDD" d="M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1H5V8Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M7 5.25h10A2.75 2.75 0 0 1 19.75 8v9A2.75 2.75 0 0 1 17 19.75H7A2.75 2.75 0 0 1 4.25 17V8A2.75 2.75 0 0 1 7 5.25Zm10 1.5H7c-.69 0-1.25.56-1.25 1.25v9c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25Z"
        clipRule="evenodd"
      />
      <rect width={8} height={2} x={8} y={11} fill="#999" rx={1} />
      <rect width={4} height={2} x={8} y={14} fill="#999" rx={1} />
    </svg>
  );
}
export default createIcon(SvgIcPopup);
