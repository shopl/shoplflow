import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 3a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H8Zm3 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-2.5 6v1h3v-1H11V9.5a.5.5 0 0 0-.5-.5h-2v1H9v3h-.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfo);
