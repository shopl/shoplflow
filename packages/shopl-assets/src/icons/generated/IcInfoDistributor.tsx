import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcInfoDistributor(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M5.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 .5-.5V9.423H9v1.5a.5.5 0 0 0 .5.5H16l-1.888-2.478L16 6.423h-4v-1.5a.5.5 0 0 0-.5-.5h-5V3.5A.5.5 0 0 0 6 3h-.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcInfoDistributor);
