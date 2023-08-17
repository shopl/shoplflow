import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcShortcutXsmall(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 12 12" {...props}>
      <path fill="#333" fillRule="evenodd" d="M5 1.5h5.5V7H9V4.121l-6.44 6.44L1.5 9.5 8 3H5V1.5Z" clipRule="evenodd" />
    </svg>
  );
}
export default createIcon(SvgIcShortcutXsmall);
