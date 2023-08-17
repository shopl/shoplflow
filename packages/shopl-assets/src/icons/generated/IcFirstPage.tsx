import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../../utils';
function SvgIcFirstPage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M15.719 4.456a.906.906 0 0 0-.09-1.189.93.93 0 0 0-1.305 0L8.17 9.354l-.09.103a.906.906 0 0 0 .09 1.189l6.154 6.087.104.088a.93.93 0 0 0 1.201-.088l.09-.103a.906.906 0 0 0-.09-1.189L10.13 10l5.5-5.441.09-.103ZM5 3a.9.9 0 0 0-.9.9v12.2a.9.9 0 1 0 1.8 0V3.9A.9.9 0 0 0 5 3Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcFirstPage);
