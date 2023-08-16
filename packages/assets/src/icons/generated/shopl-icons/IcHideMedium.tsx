import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcHideMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path fill="#333" d="m3 12 3-3v6l-3-3Z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 7a1 1 0 0 1 1-1h6.667a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 5a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h9.917a1 1 0 1 0 0-2H9Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcHideMedium);
