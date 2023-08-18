import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcQrcode(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M16 2a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2H16Zm-.5 1.5a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1h2.5ZM7.5 10.5a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5ZM7 12a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1H7ZM7.5 2a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.5ZM7 3.5a1 1 0 0 1 1 1V7a1 1 0 0 1-1 1H4.5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1H7Z"
        clipRule="evenodd"
      />
      <path fill="#555" d="M7 4.5H4.5V7H7z" />
      <path
        fill="#555"
        fillRule="evenodd"
        d="M16 10.5a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2H16Zm-.5 1.5a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V13a1 1 0 0 1 1-1h2.5Z"
        clipRule="evenodd"
      />
      <path fill="#555" d="M15.5 13H13v2.5h2.5z" />
    </svg>
  );
}
export default createIcon(SvgIcQrcode);
