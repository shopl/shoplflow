import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoState(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="m8.5 8.25.477.159 2.523 3.162v4.679h-.012L8.5 15.098V8.25Zm-1 0v6.848l-3 1.152V9.584l3-1.334Zm8 0v6.666l-3 1.334v-4.588l2.477-3.179.523-.233ZM12 3.75a2.5 2.5 0 0 1 2.053 3.927l-.11.146-1.94 2.726-1.946-2.726A2.5 2.5 0 0 1 12 3.75Zm0 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoState);
