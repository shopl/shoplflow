import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcTrash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M8 3a1 1 0 0 0-1 1v1H5a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2h-2V4a1 1 0 0 0-1-1H8Zm3 2H9V4h2v1ZM5.2 8c-.11 0-.2.065-.2.145V14c0 .602 0 2 1.5 2h7c1.5 0 1.5-1.398 1.5-2V8.145c0-.08-.09-.145-.2-.145H5.2Zm3.6 6a.2.2 0 0 0 .2-.2V9.2a.2.2 0 0 0-.2-.2h-.6a.2.2 0 0 0-.2.2v4.6c0 .11.09.2.2.2h.6Zm3.2-.2a.2.2 0 0 1-.2.2h-.6a.2.2 0 0 1-.2-.2V9.2c0-.11.09-.2.2-.2h.6c.11 0 .2.09.2.2v4.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcTrash);
