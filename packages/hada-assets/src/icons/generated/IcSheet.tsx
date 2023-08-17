import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcSheet(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 28 28" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10 15a3 3 0 0 1 2.995 2.824L13 18v3a3 3 0 0 1-2.824 2.995L10 24H7a3 3 0 0 1-2.995-2.824L4 21v-3a3 3 0 0 1 2.824-2.995L7 15h3Zm11 0a3 3 0 0 1 2.995 2.824L24 18v3a3 3 0 0 1-2.824 2.995L21 24h-3a3 3 0 0 1-2.995-2.824L15 21v-3a3 3 0 0 1 2.824-2.995L18 15h3Zm-11 2H7a1 1 0 0 0-.993.883L6 18v3a1 1 0 0 0 .883.993L7 22h3a1 1 0 0 0 .993-.883L11 21v-3a1 1 0 0 0-.883-.993L10 17Zm11 0h-3a1 1 0 0 0-.993.883L17 18v3a1 1 0 0 0 .883.993L18 22h3a1 1 0 0 0 .993-.883L22 21v-3a1 1 0 0 0-.883-.993L21 17ZM10 4a3 3 0 0 1 2.995 2.824L13 7v3a3 3 0 0 1-2.824 2.995L10 13H7a3 3 0 0 1-2.995-2.824L4 10V7a3 3 0 0 1 2.824-2.995L7 4h3Zm11 0a3 3 0 0 1 2.995 2.824L24 7v3a3 3 0 0 1-2.824 2.995L21 13h-3a3 3 0 0 1-2.995-2.824L15 10V7a3 3 0 0 1 2.824-2.995L18 4h3ZM10 6H7a1 1 0 0 0-.993.883L6 7v3a1 1 0 0 0 .883.993L7 11h3a1 1 0 0 0 .993-.883L11 10V7a1 1 0 0 0-.883-.993L10 6Zm11 0h-3a1 1 0 0 0-.993.883L17 7v3a1 1 0 0 0 .883.993L18 11h3a1 1 0 0 0 .993-.883L22 10V7a1 1 0 0 0-.883-.993L21 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcSheet);
