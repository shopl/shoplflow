import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcGradientWorkplace(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <mask id="ic-gradient-workplace_svg__b" width={16} height={19} x={4} y={3} fill="#000" maskUnits="userSpaceOnUse">
        <path fill="#fff" d="M4 3h16v19H4z" />
        <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z" />
      </mask>
      <path
        fill="url(#ic-gradient-workplace_svg__a)"
        d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z"
      />
      <path
        fill="#8092AA"
        d="M4 3h16H4Zm16 15.5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3c0 1.105 1.12 2 2.5 2h11c1.38 0 2.5-.895 2.5-2ZM4 21V3v18ZM20 3v18V3Z"
        mask="url(#ic-gradient-workplace_svg__b)"
      />
      <rect width={3} height={3} x={7} y={6} fill="#fff" rx={0.5} />
      <rect width={3} height={3} x={7} y={10} fill="#fff" rx={0.5} />
      <rect width={3} height={3} x={11} y={6} fill="#fff" rx={0.5} />
      <defs>
        <linearGradient
          id="ic-gradient-workplace_svg__a"
          x1={4}
          x2={21.897}
          y1={3}
          y2={18.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BEC8D5" />
          <stop offset={1} stopColor="#98A7B7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientWorkplace);
