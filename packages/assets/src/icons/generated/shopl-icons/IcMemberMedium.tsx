import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcMemberMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={7.5} r={3.5} stroke="#333" strokeWidth={2} />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M5 18a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V18Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcMemberMedium);
