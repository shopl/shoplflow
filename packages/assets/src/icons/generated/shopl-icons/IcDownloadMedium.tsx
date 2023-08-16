import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcDownloadMedium(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M11 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v12.086l4.94-4.94a.5.5 0 0 1 .706 0l.708.708a.5.5 0 0 1 0 .707l-6.647 6.646a1 1 0 0 1-1.414 0l-6.646-6.646a.5.5 0 0 1 0-.707l.707-.707a.5.5 0 0 1 .707 0L11 15.085V3ZM4 20a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-15A.5.5 0 0 1 4 21v-1Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcDownloadMedium);
