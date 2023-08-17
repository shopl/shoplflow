import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcDownload(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#555"
        fillRule="evenodd"
        d="M15 16a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h10ZM10 2a1 1 0 0 1 1 1v8.585l3.293-3.292a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 .083 1.32l-.083.094-5 5a1 1 0 0 1-1.32.083l-.094-.083-5-5a1 1 0 0 1 1.32-1.497l.094.083L9 11.585V3a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDownload);
