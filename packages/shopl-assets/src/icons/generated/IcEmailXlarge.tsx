import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcEmailXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
      <path
        fill="#3299FE"
        fillRule="evenodd"
        d="M6 15.833v11.975c0 1.212.977 2.195 2.182 2.195h19.636A2.188 2.188 0 0 0 30 27.808V15.834l-12 7.157-12-7.158Z"
        clipRule="evenodd"
      />
      <path
        fill="#84C2FC"
        fillRule="evenodd"
        d="M30 14.09 18 21 6 14.09v-1.971C6 10.949 6.977 10 8.182 10h19.636c1.205 0 2.182.948 2.182 2.119v1.971Z"
        clipRule="evenodd"
      />
      <circle cx={30} cy={10} r={3} fill="#FF7979" stroke="#fff" strokeWidth={2} />
    </svg>
  );
}
export default createIcon(SvgIcEmailXlarge);
