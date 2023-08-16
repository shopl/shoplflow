import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcSympathyMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={12} r={9} stroke="#333" strokeWidth={2} />
      <path
        fill="#333"
        d="M9.567 11.333a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333ZM14.233 11.333a1.167 1.167 0 1 0 0-2.333 1.167 1.167 0 0 0 0 2.333ZM9.665 12.76a.583.583 0 0 1 .809-.162c.478.319 1.725.751 2.852 0a.583.583 0 0 1 .647.97c-1.673 1.116-3.458.46-4.147 0a.583.583 0 0 1-.161-.808Z"
      />
    </svg>
  );
}
export default createIcon(SvgIcSympathyMedium);
