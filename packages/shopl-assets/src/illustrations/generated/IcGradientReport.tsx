import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcGradientReport(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="url(#ic-gradient-report_svg__a)"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5v-13Z"
      />
      <path
        fill="#395F77"
        d="M4 4h16H4Zm16 15.5a2.875 2.875 0 0 1-2.875 2.875H6.875A2.875 2.875 0 0 1 4 19.5c0 1.173 1.12 2.125 2.5 2.125h11c1.38 0 2.5-.952 2.5-2.125ZM4 22V4v18ZM20 4v18V4Z"
      />
      <path
        fill="url(#ic-gradient-report_svg__b)"
        d="M6 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7Z"
      />
      <path
        fill="#B6C8D3"
        d="M6 5h12H6Zm12 12c0 1.22-.99 2.21-2.21 2.21H8.21A2.21 2.21 0 0 1 6 17c0 .988.895 1.79 2 1.79h8c1.105 0 2-.802 2-1.79ZM6 19V5v14ZM18 5v14V5Z"
      />
      <rect width={6} height={2.5} x={9} y={3} fill="url(#ic-gradient-report_svg__c)" rx={1} />
      <path
        fill="#8092AA"
        fillRule="evenodd"
        d="M8.5 8.5A.5.5 0 0 1 9 8h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5Zm0 2A.5.5 0 0 1 9 10h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5ZM9 12a.5.5 0 1 0 0 1h6a.5.5 0 0 0 0-1H9Z"
        clipRule="evenodd"
      />
      <defs>
        <linearGradient
          id="ic-gradient-report_svg__a"
          x1={12}
          x2={20.733}
          y1={0.062}
          y2={21.704}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5291CC" />
          <stop offset={1} stopColor="#1864AC" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-report_svg__b"
          x1={12}
          x2={18.971}
          y1={1.937}
          y2={18.594}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={0.62} stopColor="#F8FAFF" />
          <stop offset={1} stopColor="#D9E2EB" />
        </linearGradient>
        <linearGradient
          id="ic-gradient-report_svg__c"
          x1={12}
          x2={12.765}
          y1={3}
          y2={6.059}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6291BD" />
          <stop offset={1} stopColor="#346089" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default createIcon(SvgIcGradientReport);
