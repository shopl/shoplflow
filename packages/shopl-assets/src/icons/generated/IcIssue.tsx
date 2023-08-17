import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcIssue(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <circle cx={5.5} cy={10.5} r={1.5} fill="#333" />
      <circle cx={10.5} cy={10.5} r={1.5} fill="#333" opacity={0.6} />
      <circle cx={15.5} cy={10.5} r={1.5} fill="#333" opacity={0.3} />
    </svg>
  );
}
export default createIcon(SvgIcIssue);
