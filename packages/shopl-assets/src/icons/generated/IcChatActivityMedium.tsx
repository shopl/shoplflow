import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcChatActivityMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M16.214 3.3A2.286 2.286 0 0 1 18.5 5.586v6.857a2.286 2.286 0 0 1-2.286 2.285H12.56l-3.078 2.053c-1.519 1.012-3.553-.077-3.553-1.902v-.15H4.786A2.286 2.286 0 0 1 2.5 12.442V5.586A2.286 2.286 0 0 1 4.786 3.3h11.428Zm0 2.286H4.786v6.857h3.428v2.436l3.654-2.436h4.346V5.586Zm-3.393 10L10.5 17.134v.832a1 1 0 0 0 1 1h3.758l2.187 1.458A1 1 0 0 0 19 19.593v-.627h1.5a1 1 0 0 0 1-1V13.3a1 1 0 0 0-1-1h-1.142v.143a3.143 3.143 0 0 1-3.143 3.143h-3.394Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcChatActivityMedium);
