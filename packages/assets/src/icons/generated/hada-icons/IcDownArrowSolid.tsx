import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcDownArrowSolid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 16 16" {...props}>
      <path
        fill="#999"
        fillRule="evenodd"
        d="M5.04 5.5a.5.5 0 0 0-.39.812l2.96 3.7c.2.25.58.25.78 0l2.96-3.7a.5.5 0 0 0-.39-.812H5.04Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDownArrowSolid);
