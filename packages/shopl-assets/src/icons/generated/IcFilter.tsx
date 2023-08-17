import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcFilter(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <rect width={14} height={1.5} x={3} y={4.25} fill="#333" rx={0.75} />
      <rect width={14} height={1.5} x={3} y={9.25} fill="#333" rx={0.75} />
      <rect width={14} height={1.5} x={3} y={14.25} fill="#333" rx={0.75} />
      <path fill="#fff" d="M8.5 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M7 4.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.75 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="M14.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13 9.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
      <path fill="#fff" d="M9.5 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 14.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM5.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcFilter);
