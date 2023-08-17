import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcEdit(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="m15.65 3.447.89.893c.296.298.46.695.46 1.117 0 .421-.164.818-.46 1.116l-1.091 1.094-3.116-3.126 1.09-1.094c.595-.596 1.631-.596 2.226 0ZM3.943 13.05l7.716-7.716 3.007 3.007-7.717 7.715a.304.304 0 0 1-.14.08l-3.433.856a.303.303 0 0 1-.368-.368l.855-3.433a.307.307 0 0 1 .08-.14Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcEdit);
