import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcRepeat(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M6 6.75c-.69 0-1.25.56-1.25 1.25v4c0 .69.56 1.25 1.25 1.25a.75.75 0 0 1 0 1.5A2.75 2.75 0 0 1 3.25 12V8A2.75 2.75 0 0 1 6 5.25h5.008a.75.75 0 0 1 0 1.5H6ZM13.25 6a.75.75 0 0 1 .75-.75A2.75 2.75 0 0 1 16.75 8v4A2.75 2.75 0 0 1 14 14.75H8.998a.75.75 0 0 1 0-1.5H14c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M10.029 3.968A.75.75 0 1 0 8.97 5.032L9.945 6l-.974.968a.75.75 0 0 0 1.058 1.064l1.508-1.5a.75.75 0 0 0 .003-1.06l-.002-.002-.001-.002m0 0-1.508-1.5 1.508 1.5Z"
        clipRule="evenodd"
      />
      <path
        fill="#333"
        d="M9.98 11.968a.75.75 0 1 1 1.057 1.064l-.974.968.974.968a.75.75 0 0 1-1.058 1.064l-1.508-1.5a.75.75 0 0 1-.002-1.062"
      />
      <path fill="#333" d="m9.98 11.968-1.509 1.5 1.508-1.5Z" />
    </svg>
  );
}
export default createIcon(SvgIcRepeat);
