import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcReceiverMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M13.346 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm4.409 7.493a1.07 1.07 0 0 0-1.412-1.292l-7.156 2.744c-.854.328-.93 1.505-.126 1.94l2.305 1.247 3.472-3.795a.5.5 0 0 1 .707-.032l.236.216a.5.5 0 0 1 .031.707l-3.484 3.808 1.408 2.126c.504.762 1.67.581 1.92-.297l2.099-7.372ZM12.608 22a.2.2 0 0 1-.193-.253l.442-1.603a.2.2 0 0 1 .193-.147h5.61c0-2.766-1.886-5.008-4.213-5.008a.13.13 0 0 1-.126-.165l.459-1.665a.195.195 0 0 1 .208-.144c3.004.325 5.358 3.327 5.358 6.982v.462c0 .851-.58 1.541-1.297 1.541h-6.44Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcReceiverMedium);
