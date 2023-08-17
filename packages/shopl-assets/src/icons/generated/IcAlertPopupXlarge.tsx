import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcAlertPopupXlarge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 36 36" {...props}>
      <circle cx={18} cy={18} r={15} fill="#FFEFEF" />
      <path
        fill="#F66"
        fillRule="evenodd"
        d="M18 11.314c-.852 0-1.543.691-1.543 1.543v6.172a1.543 1.543 0 0 0 3.086 0v-6.172c0-.852-.691-1.543-1.543-1.543Zm0 14.4a1.543 1.543 0 1 0 0-3.085 1.543 1.543 0 0 0 0 3.085Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcAlertPopupXlarge);
