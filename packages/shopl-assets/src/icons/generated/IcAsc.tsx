import * as React from 'react';
import type { SVGProps } from 'react';
import { createIcon } from '../utils';
function SvgIcAsc(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 20 20" {...props}>
      <path
        fill="#333"
        fillRule="evenodd"
        d="M4.5 3.5A.5.5 0 0 1 5 3h1a.5.5 0 0 1 .5.5v9.833h1a.5.5 0 0 1 .4.8l-2 2.667a.5.5 0 0 1-.8 0l-2-2.667a.5.5 0 0 1 .4-.8h1V3.5Zm12 13.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h6.5Zm-1-4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h5.5ZM10 9a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 10 7h4.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H10Zm3.5-4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
}
export default createIcon(SvgIcAsc);
