import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcCamera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='none' viewBox='0 0 20 20' {...props}>
      <path
        fill='#02B585'
        fillRule='evenodd'
        d='M7 3a1 1 0 0 0-1 1v1h8V4a1 1 0 0 0-1-1H7ZM5 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H5Zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm8.5 3.5a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Zm-5.5 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z'
        clipRule='evenodd'
      />
    </svg>
  );
}
export default createIcon(SvgIcCamera);
