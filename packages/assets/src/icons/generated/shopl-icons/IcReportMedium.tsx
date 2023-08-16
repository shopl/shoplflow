import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcReportMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <rect width={14} height={16} x={5} y={4} stroke="#333" strokeWidth={2} rx={2} />
      <rect width={8} height={4} x={8} y={2} fill="#333" rx={1} />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-7Zm0 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcReportMedium);
