import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCheckActive(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={9} fill="#02B585" stroke="#333" strokeWidth={2} />
      <path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 11 4 4L22 5" />
    </svg>
  );
}
export default createIcon(SvgIcCheckActive);